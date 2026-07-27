CREATE TABLE transaction(
    id SERIAL PRIMARY KEY,
    
    item_purchased VARCHAR(20),
    amount INT,
    discount FLOAT DEFAULT 0, 
   
    customer_id INT,
    company_id INT,
    FOREIGN KEY(customer_id) REFERENCES customer(id),
    FOREIGN KEY(company_id) REFERENCES company(id)
);
