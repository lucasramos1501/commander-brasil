import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from 'cors';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

export default app;