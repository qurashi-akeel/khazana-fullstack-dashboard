CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash TEXT
);

CREATE TABLE investments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    initial_value DECIMAL(15,2),
    current_value DECIMAL(15,2),
    best_performing_scheme VARCHAR(255),
    worst_performing_scheme VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE portfolio_allocation (
    id SERIAL PRIMARY KEY,
    investment_id INTEGER REFERENCES investments(id) ON DELETE CASCADE,
    sector VARCHAR(100),
    amount DECIMAL(15,2),
    percentage DECIMAL(5,2)
);
