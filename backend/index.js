// import express from "express";
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from "path";
// import { fileURLToPath } from "url";
// // import bodyParser from "body-parser";
// import { Client, Account, Databases, Users } from "node-appwrite";



// // Enable __dirname in ES6 modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();

// const app = express();
// const PORT = 3000 || process.env.PORT;

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, "../frontend/dist")));

// const allowedOrigins = ['http://localhost:5173', 'https://we-commerce-bay.vercel.app'];

// // Configure CORS
// app.use(cors({
//     origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }, // Replace with the origin you want to allow
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // Handle all other routes and return the React app's index.html
// // app.get("*", (req, res) => {
// //   // res.sendFile(path.join(__dirname, "../dist", "index.html"));
// // });

// app.post('/sign-up', async (req, res) => {
//   const jsonKey = Object.keys(req.body)[0]; 
//   const jsonObject = JSON.parse(jsonKey);
//   const { password, email, confirmPassword } = jsonObject;
//   console.log(email);

//   res.json(jsonObject);
// });

// app.listen(PORT, () => {
//   console.log(`Api Successfully started server on port ${PORT}.`);
// });