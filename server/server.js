import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import router from './src/routes/itemRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app and middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log('Connected to MongoDB'); })
    .catch((err) => { console.error('MongoDB connection error:', err); });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });