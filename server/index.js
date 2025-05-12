import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();
// Connect to DB
connectDB();

// Init app
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('SkillRank Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
