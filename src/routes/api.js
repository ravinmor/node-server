import { Router } from "express";
import homeController from "../controllers/homeController";

const routes = Router();

routes.get("/", (req, res) => {res.send("Hello world")});
routes.get("/home", homeController.homeFunction);

export { routes }