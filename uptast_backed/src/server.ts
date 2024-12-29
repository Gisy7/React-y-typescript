import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { router } from './routes/proyectRoutes';

dotenv.config()

connectDB()

export const app = express()
app.use(express.json())

// Rutas
app.use("/api/proyects", router)




