import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";
import { AnimalService } from "../services/AnimalService";

export const animalsRouter = Router()

// Setup Controller & Service for Router
const animalService = new AnimalService();
const animalController = new AnimalController(animalService)

// Routes
animalsRouter.get("/", animalController.getAll);
animalsRouter.post("/", animalController.store);

