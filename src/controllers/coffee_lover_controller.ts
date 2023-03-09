import { Request, Response } from "express";
import * as coffeeLoverService from "../services/coffee_lover_service";

export const getCoffeeLover = async (req: Request, res: Response) => {
  const text = coffeeLoverService.getCoffeeLover();
  res.send(text).status(200);
};
