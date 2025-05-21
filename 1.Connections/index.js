import express from 'express';
import connectDB from './db/connectDB.js';
import movie from './models/movies.js';
const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL|| 'mongodb://127.0.0.1:27017/movies'
connectDB(DATABASE_URL)
app.listen (port, ()=> console.log(`Server Listening on port ${port}`)
);

