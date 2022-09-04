import { NextFunction, Request, Response } from 'express'
import { AnimalService } from "../services/AnimalService";
import { IController } from '../types/Animal';

export class AnimalController implements IController {
  // animal service which fetches data from "database"
  // returns hardcoded data for now :)
  private _animalService: AnimalService;

  public constructor() {
    this._animalService = new AnimalService();
  }
  public getAll = (req: Request, res: Response, next: NextFunction) => {
    const animals = this._animalService.findAll();
    res.json(animals);
  };

  public store = (req: Request, res: Response) => {
    const animal = this._animalService.store(req.body);
    res.json(animal);
  };

  public getOne = (req: Request, res: Response) => {};

  public update = (req: Request, res: Response) => {};

  public remove = (req: Request, res: Response) => {};
}