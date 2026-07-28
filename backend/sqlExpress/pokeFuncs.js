const { Sequelize, QueryTypes } = require('sequelize');
const fs = require('fs');

// Initialize Sequelize connection
const sequelize = new Sequelize('pokemons', 'postgres', 'rotem12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
//ex2
const getFattestPokemon = async () => {
  let query = `
    SELECT name, weight
    FROM pokemon
    WHERE weight = (SELECT MAX(weight) FROM pokemon);
  `;
  let result = await sequelize.query(query);
  console.log('Fattest Pokemon:', result[0]);
  return result[0];
};

// //ex3
// Write a function that receives a pokemon type,
//  and returns all of the pokemon names with that type.
// For instance, findByType("grass") should return
//  ["bulbasaur", "ivysaur", "venusaur", "oddish", ...]
const findByType = async (type) => {
  let query = `
    SELECT p.name
    FROM pokemon as p 
        JOIN pokemon_type AS pt
        ON p.type_id = pt.id
    WHERE pt.name = :type;
  `;
    const [results] = await sequelize.query(query, {
        replacements: {
            type,
        },
    });
    const pokemonNames = results.map(row => row.name);

    console.log(`Pokemon of type ${type}:`, pokemonNames);
    return pokemonNames;
}

//ex4
const findOwners = async (pokemonName) => {
    const query = `
        SELECT t.name
        FROM trainer AS t
        JOIN pokemon_trainer AS pt ON t.id = pt.trainer_id
        JOIN pokemon AS p ON pt.pokemon_id = p.id
        WHERE LOWER(p.name) = LOWER(:pokemonName);
    `;

    const results = await sequelize.query(query, {
        replacements: { pokemonName },
        type: QueryTypes.SELECT
    });

    // Map array of objects [{ name: 'Misty' }, ...] to simple array of strings ['Misty', ...]
    const owners = results.map(row => row.name);

    console.log(`Owners of ${pokemonName}:`, owners);
    return owners;
};

//ex5
const findRoster = async (trainer) => {
    const query = `
        SELECT p.name
        FROM pokemon AS p
        JOIN pokemon_trainer AS pt ON p.id = pt.pokemon_id
        JOIN trainer AS t ON pt.trainer_id = t.id
        WHERE LOWER(t.name) = LOWER(:trainer);
    `;

    const results = await sequelize.query(query, {
        replacements: { trainer },
        type: QueryTypes.SELECT
    });

    // Map array of objects [{ name: 'Misty' }, ...] to simple array of strings ['Misty', ...]
    const pokemons = results.map(row => row.name);

    console.log(`Pokemons of ${trainer}:`, pokemons);
    return pokemons;
};
async function run() {
    await getFattestPokemon();
    await findByType('grass');
    await findOwners("gengar");
    await findRoster("Loga");
    await sequelize.close();
}

run();