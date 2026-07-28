-- 1. Types
CREATE TABLE IF NOT EXISTS pokemon_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- 2. Towns
CREATE TABLE IF NOT EXISTS town (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- 3. Pokemon
CREATE TABLE IF NOT EXISTS pokemon (
    id INT PRIMARY KEY, -- Original Pokemon ID
    name VARCHAR(100) NOT NULL,
    type_id INT REFERENCES pokemon_type(id),
    height INT,
    weight INT
);

-- 4. Trainers
CREATE TABLE IF NOT EXISTS trainer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    town_id INT REFERENCES town(id)
);

-- 5. Join Table
CREATE TABLE IF NOT EXISTS pokemon_trainer (
    pokemon_id INT REFERENCES pokemon(id),
    trainer_id INT REFERENCES trainer(id),
    PRIMARY KEY (pokemon_id, trainer_id)
);