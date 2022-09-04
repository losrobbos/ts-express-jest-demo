import { NextFunction, Request, Response } from "express";

export type AnimalInput = {
  name: string;
  age?: number;
};

export type Animal = {
  _id: string;
} & AnimalInput


type ControllerFunc = (req: Request, res: Response, next: NextFunction) => void;

export interface IController {
  getAll: ControllerFunc; // get all items
  getOne: ControllerFunc; // get single item by ID
  store: ControllerFunc; // create new item
  update: ControllerFunc; // update item
  remove: ControllerFunc; // delete item by id
}