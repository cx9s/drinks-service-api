import express from "express";
import * as coffeeController from "../controllers/coffee_controller";
import * as homeController from "../controllers/home_controller";

export const router = express.Router();

router.get("/coffee", coffeeController.getCoffee);

router.get("/", homeController.getHome);
