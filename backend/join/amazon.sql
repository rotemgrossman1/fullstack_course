-- make sure you're connected to the right database

CREATE TABLE customer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    city VARCHAR(20),
    gender INT
);

CREATE TABLE company(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    industry VARCHAR(20),
    employees INT
);
