import express from "express";
import playerRouter from "./resources/player";

const apiRouter = express.Router();

apiRouter.use("/player", playerRouter);

export default apiRouter;
