import bodyParser from "body-parser";
import express from "express";

const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
