import express from "express";
import helmet from "helmet";
import expressValidator from "express-validator";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: ".env.example" });

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);
app.use(helmet());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

export default app;
