import { Request, Response } from "express";
import * as homeService from "../services/home_service";

export const getHome = async (req: Request, res: Response) => {
  const greeting = homeService.getHome();
  res.send(greeting).status(200);
};
