import express from "express";
import * as homeController from "../controllers/home_controller";
import * as coffeeLoverController from "../controllers/coffee_lover_controller";
import * as coffeeController from "../controllers/coffee_controller";
import * as teaController from "../controllers/tea_controller";

export const router = express.Router();

router.get("/", homeController.getHome);

router.get("/coffeeLover", coffeeLoverController.getCoffeeLover);

router.get("/coffee", coffeeController.getCoffee);

router.get("/tea", teaController.getTea);
