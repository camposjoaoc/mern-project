# MERN Project - Item Management App

This project is a MERN (MongoDB, Express, React, Node.js) stack application for managing items.

## Features

- List all items
- Create new items
- Delete items
- Update items (in development)

## Project Structure

- **Backend:** Express + Mongoose (`/server`)
- **Frontend:** React + TypeScript + Vite (`/client`)

## How to Run

### Backend

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Configure your `.env` file with your MongoDB connection string and port:
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=3001
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:3001/api`.

### Frontend

1. Install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Start the frontend:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

## API Routes

- `GET    /api/items` — List all items
- `POST   /api/items` — Create a new item
- `GET    /api/items/:id` — Get item by ID
- `PUT    /api/items/:id` — Update item by ID
- `PATCH  /api/items/:id` — Partially update item by ID
- `DELETE /api/items/:id` — Delete item by ID
- `GET    /api/items/name/:name` — Get items by name
- `GET    /api/items/quantity/:quantity` — Get items by quantity
- `GET    /api/items/grouped` — List items grouped by name
- `GET    /api/items/count` — Get total item count
- `GET    /api/items/sorted/asc` — List items sorted (A-Z)
- `GET    /api/items/sorted/desc` — List items sorted (Z-A)
- `DELETE /api/items/many` — Delete many items (quantity < 3)

## Notes

- The frontend expects the backend to be running at `http://localhost:3001/api`.
- The backend uses MongoDB Atlas, but you can use a local MongoDB instance if you prefer.

---

Made with ❤️ using MERN + Vite + TypeScript.
