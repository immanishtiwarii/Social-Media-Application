import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/mongoDB.js";
import ImportData from "./DataImport.js";

dotenv.config();

// Datata Base Connection
connectDatabase();

const app = express();

// API
app.use("/api/import", ImportData);

app.get("/", (req, res) => {
  res.send("Api is running....");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is Running in Port ${PORT}`);
});



