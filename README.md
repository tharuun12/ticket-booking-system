# Train Ticket Booking System

A full-stack ticket booking application enabling users to efficiently reserve train seats with advanced features like real-time updates and user-friendly management.

🌐 **Live Demo**: [Train Booking System](https://train-booking-back.vercel.app/)

---

## Overview

This system allows users to book train tickets seamlessly while adhering to a structured seat allocation logic. The platform is built using modern web technologies, ensuring performance, scalability, and responsiveness.

### Key Features:

- **Dynamic Seat Allocation**: Optimized seat booking with a priority to allocate seats in the same row.
- **User-Friendly Dashboard**: Intuitive interface to manage bookings, view history, and track real-time updates.
- **Secure Authentication**: Robust login/signup system to ensure user data protection.
- **Comprehensive Booking Logs**: Users can track current and past bookings, cancellations, and expenses.
- **Responsive Design**: Accessible across devices with consistent performance.

---

## Screenshots

### Signup

> **Sample Credentials**:
> - **Name**: Tharuun Mohandass
> - **Username**: `tharuun7299@gmail.com`
> - **Password**: `tharuun!2545`

![Signup Screen](https://github.com/user-attachments/assets/dd119e84-5506-42b1-bffa-7de9c8b5f29f)

### Signin

> **Sample Credentials**:
> - **Username**: `tharuun7299@gmail.com`
> - **Password**: `tharuun!2545`

![Signin Screen](https://github.com/user-attachments/assets/dae5c798-184e-416a-8ef4-dada4263320b)

- **Invalid Credentials**: If a user attempts to sign in without prior signup, the error "Invalid credentials" is displayed.
  ![Invalid Credentials](https://github.com/user-attachments/assets/889a87fe-5683-46d2-91be-6eb868515eb0)
- **User Already Exists**: If a user tries to signup with an already registered email, the error "User already exists" is displayed.
  ![User Already Exists](https://github.com/user-attachments/assets/f8c3a97c-59e2-42e0-835e-23bf9b43bc2c)
- **Successful Signin**: Upon successful login, the message "Successfully signed in!" is shown.
  ![Successful Signin](https://github.com/user-attachments/assets/6a432d61-ce89-416c-8991-901a62c54b3e)

### Dashboard

**Features**:

- View available and booked seats.
- Reserve up to 7 seats in one booking.
- Ensures bookings are prioritized in one row or adjacent rows.
- Real-time updates for seat availability.

![Dashboard](https://github.com/user-attachments/assets/61fb5ef3-3e1c-46fc-9fff-65f38a167e5f)

- **Seat Booking Confirmation**: If a user successfully books available seats, the message "Seats booked successfully!" is displayed.
- **Ticket Cancellation**: If a user cancels a booking, the message "Booking cancelled successfully" is shown.

### My Bookings

- View all active bookings and corresponding seat numbers.
- Track total bookings, canceled tickets, and overall expenses.
- Access detailed booking history, including canceled tickets.

![My Bookings](https://github.com/user-attachments/assets/20f52fcd-717f-4ce5-b387-537fd3c28dfd)

---

## Tech Stack

### Frontend

- **Framework**: Next.js 13+ (App Router)
- **UI**: Responsive design with modern layouts

### Backend

- **Server**: Express.js
- **Database**: PostgreSQL

### Real-Time Updates

- WebSocket for seamless seat status updates.

---

## API Endpoints

### 1. Authentication

- **Signin**: [`POST`](https://train-booking-back.vercel.app/signin)
- **Signup**: [`POST`](https://train-booking-back.vercel.app/signup)

### 2. Dashboard

- **Seat Management**: [`GET`](https://train-booking-back.vercel.app/dashboard)

### 3. User Details

- **Booking History & Logs**: [`GET`](https://train-booking-back.vercel.app/user-details)

---

## Setup Instructions

### Prerequisites

- **Node.js** 16+
- **PostgreSQL** 12+
- Package Manager: `npm` or `yarn`

### 1. Database Setup

1. Create a PostgreSQL database named `ticket`.
2. Update the database credentials in `server/db.js`.
3. Run the following SQL commands to create tables and seed data:

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE seats (
       id SERIAL PRIMARY KEY,
       row_number INT NOT NULL,
       seat_number INT NOT NULL,
       is_reserved BOOLEAN DEFAULT FALSE,
       reserved_by INT REFERENCES users(id) ON DELETE SET NULL
   );

   CREATE TABLE bookings (
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id),
       seat_id INT REFERENCES seats(id),
       booking_time TIMESTAMP DEFAULT NOW(),
       cancelled_at TIMESTAMP
   );

   -- Seed seat data
   DO $$
   BEGIN
      FOR i IN 1..11 LOOP
          FOR j IN 1..7 LOOP
              INSERT INTO seats (row_number, seat_number) VALUES (i, j);
          END LOOP;
      END LOOP;
      FOR k IN 1..3 LOOP
          INSERT INTO seats (row_number, seat_number) VALUES (12, k);
      END LOOP;
   END $$;
   ```

### 2. Backend Setup

   ```bash
   cd backend
   npm install
   npm run dev
   ```

### 3. Frontend Setup

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## Usage Instructions

1. Visit the live application link: [Train Booking System](https://train-booking-back.vercel.app/).
2. Signup or login using sample credentials provided above.
3. Explore the features:
   - Book seats using the dashboard.
   - View current bookings in "My Bookings."
   - Review past bookings under "Booking History."

---

## Development Notes

### Best Practices Followed

- Input validation and sanitization for security.
- Error handling for all user actions (e.g., invalid input, unauthorized access, duplicate actions).
- Code readability and maintainability with clear comments.
- Responsiveness for seamless performance across devices.

---

## Contributors

- **Developer**: [Tharuun M]
- **Contact**: [tharuun2412@gmail.com]

---
