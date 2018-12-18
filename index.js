import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
