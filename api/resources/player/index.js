import express from "express";
import controller from "./controller";

const playerRouter = express.Router();

playerRouter.route("/").get(controller().getPlayer);

playerRouter.route("/:id").get(controller().getPlayerById);

export default playerRouter;
