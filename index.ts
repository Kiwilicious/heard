require("dotenv").config();

import bodyParser from "body-parser";
import express from "express";
import { db, sequelizeConnection } from "./db";
import userRouter from "./routes/user";

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// expose db to routes
app.use((req, _, next) => {
  req.db = db;
  next();
});

app.use("/user", userRouter);

const startServer = async () => {
  try {
    await sequelizeConnection.sync();

    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
