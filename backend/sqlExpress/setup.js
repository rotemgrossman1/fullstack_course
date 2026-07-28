const { Sequelize, QueryTypes } = require('sequelize');
const fs = require('fs');

// Initialize Sequelize connection
const sequelize = new Sequelize('pokemons', 'postgres', 'rotem12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

// Cache maps to avoid redundant DB reads/inserts for lookup data
const typeMap = new Map();    // type_name -> id
const townMap = new Map();    // town_name -> id
const trainerMap = new Map(); // trainer_name -> id

// ==========================================
// 1. The 5 Table-Specific Insert Functions
// ==========================================

async function addType(typeName) {
    if (!typeName) return null;
    if (typeMap.has(typeName)) return typeMap.get(typeName);

    const [result] = await sequelize.query(
        `INSERT INTO pokemon_type (name) 
         VALUES (:name) 
         ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name 
         RETURNING id`,
        { replacements: { name: typeName }, type: QueryTypes.INSERT }
    );

    const id = result[0].id;
    typeMap.set(typeName, id);
    return id;
}

async function addTown(townName) {
    if (!townName) return null;
    if (townMap.has(townName)) return townMap.get(townName);

    const [result] = await sequelize.query(
        `INSERT INTO town (name) 
         VALUES (:name) 
         ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name 
         RETURNING id`,
        { replacements: { name: townName }, type: QueryTypes.INSERT }
    );

    const id = result[0].id;
    townMap.set(townName, id);
    return id;
}

async function addTrainer(name, townId) {
    if (trainerMap.has(name)) return trainerMap.get(name);

    const [result] = await sequelize.query(
        `INSERT INTO trainer (name, town_id) 
         VALUES (:name, :town_id) 
         RETURNING id`,
        { replacements: { name, town_id: townId }, type: QueryTypes.INSERT }
    );

    const id = result[0].id;
    trainerMap.set(name, id);
    return id;
}

async function addPokemon(id, name, typeId, height, weight) {
    await sequelize.query(
        `INSERT INTO pokemon (id, name, type_id, height, weight) 
         VALUES (:id, :name, :type_id, :height, :weight) 
         ON CONFLICT (id) DO NOTHING`,
        { replacements: { id, name, type_id: typeId, height, weight }, type: QueryTypes.INSERT }
    );
}

async function addPokemonTrainer(pokemonId, trainerId) {
    await sequelize.query(
        `INSERT INTO pokemon_trainer (pokemon_id, trainer_id) 
         VALUES (:pokemon_id, :trainer_id) 
         ON CONFLICT DO NOTHING`,
        { replacements: { pokemon_id: pokemonId, trainer_id: trainerId }, type: QueryTypes.INSERT }
    );
}

// ==========================================
// 2. Main Setup Execution Function
// ==========================================

async function setup() {
    try {
        await sequelize.authenticate();
        console.log('Database connected!');

        // Read JSON data
        const rawData = fs.readFileSync('./pokemon.json', 'utf-8');
        const pokemons = JSON.parse(rawData);

        console.log('Seeding database...');

        for (const p of pokemons) {
            // 1. Add Type & Pokemon
            const typeId = await addType(p.type);
            await addPokemon(p.id, p.name, typeId, p.height, p.weight);

            // 2. Add Town, Trainer, and Join record
            if (p.ownedBy && p.ownedBy.length > 0) {
                for (const owner of p.ownedBy) {
                    const townId = await addTown(owner.town);
                    const trainerId = await addTrainer(owner.name, townId);
                    await addPokemonTrainer(p.id, trainerId);
                }
            }
        }

        console.log('Data successfully uploaded to postgres!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
}

// Execute setup
setup();