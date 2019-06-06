import express from "express";
import session from "express-session";
import path from "path";
import helmet from "helmet";
import mongoose from "mongoose";
import expressValidator from "express-validator";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import initializePassport from "./passportStrategy";
import uuid from "uuid/v4";
import initiateGraphQL from "./graphql";
import initializeRoutes from "./routes";

dotenv.config({ path: ".env" });

const app = express();

// Connect to mongo db
(async () => {
  try {
    mongoose.set("useCreateIndex", true);
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  } catch (e) {
    throw (e);
  }
})();

app.use(helmet());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  genid: () => {
    return uuid(); // use UUIDs for session IDs
  },
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

initializePassport(app);
initializeRoutes(app);
initiateGraphQL(app);

app.use("/", express.static("dist"));

// Handles any requests that don't match the ones above
app.get("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.set("port", process.env.PORT || 3000);

export default app;
