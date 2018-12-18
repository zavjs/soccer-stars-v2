import express from "express";
import cors from "cors";
// https://github.com/expressjs/body-parser
import bodyParser from "body-parser";
import apiRouter from "./api";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api", apiRouter);

app.listen(4000, () => {
  console.log("Listening on 4000");
});
