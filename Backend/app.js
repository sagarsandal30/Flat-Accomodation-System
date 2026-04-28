const express = require("express");
const cors = require("cors");
require('dotenv').config();

// Connect DB
const connectDB = require("./Service-Layer/DB/connect");
const router = require("./Web-Layer/Routes/AuthRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api",router);


// Start server
const PORT = process.env.PORT ;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
