require("dotenv").config();

import bodyParser from "body-parser";
import express from "express";
import { sequelizeConnection } from "./db";

const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await sequelizeConnection.sync();

    app.listen(PORT, () => {
      console.log(`Server listening on port:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
