import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";

export const animalsRouter = Router()

const animalController = new AnimalController()

animalsRouter.get("/", animalController.getAll);

animalsRouter.post("/", animalController.store);

