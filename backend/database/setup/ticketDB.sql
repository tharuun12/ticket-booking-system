create database ticket;

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create seats table
CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    row_number INT NOT NULL,
    seat_number INT NOT NULL,
    is_reserved BOOLEAN DEFAULT FALSE,
    reserved_by INT REFERENCES users(id) ON DELETE SET NULL
);

-- Create bookings table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    seat_id INT REFERENCES seats(id),
    booking_time TIMESTAMP DEFAULT NOW(),
    cancelled_at TIMESTAMP
);

-- Seed seats data
DO $$
BEGIN
   FOR i IN 1..11 LOOP
       FOR j IN 1..7 LOOP
           INSERT INTO seats (row_number, seat_number) 
           VALUES (i, j)
           ON CONFLICT DO NOTHING;
       END LOOP;
   END LOOP;
   FOR k IN 1..3 LOOP
       INSERT INTO seats (row_number, seat_number) 
       VALUES (12, k)
       ON CONFLICT DO NOTHING;
   END LOOP;
END $$;

