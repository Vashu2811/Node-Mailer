import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import jobRouter from "./Routes/jobRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
const upload = multer();

app.use(upload.any()); 

app.options('*', cors());

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
 
app.use("/api/formfill", jobRouter);


const start = async () => {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error("Database connection error: ", error);
  }
};

start();
