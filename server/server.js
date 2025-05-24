import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app and connect to MongoDB
const app = express();
app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI)
.then (() => { console.log('Connected to MongoDB'); })
.catch((err) => { console.error('MongoDB connection error:', err); });  

