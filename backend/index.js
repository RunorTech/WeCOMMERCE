import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

const allowedOrigins = ['http://localhost:5173', 'https://we-commerce-delta.vercel.app'];

// Configure CORS
app.use(cors({
    origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, // Replace with the origin you want to allow
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.listen(PORT, () => {
  console.log(`Api Successfully started server on port ${PORT}.`);
});