import { NextFunction, Request, Response } from "express";

// Animal Input type
// used to CREATE new animals (where we do not have an ID so far...)
export type AnimalInput = {
  name: string;
  age?: number;
};

// Animal Type
// type for an already created Animal in the database, has an ID
// we use the Typescript Union operator (&) here to merge the Animal Input type with another type with an _id field
// this way we get a new type with alle fields: { _id: string, name: string, age?: number }
export type Animal = {
  _id: string;
} & AnimalInput


type ControllerFunc = (req: Request, res: Response, next: NextFunction) => void;

// each controller we setup must provide these methods to support all REST methods
export interface IController {
  getAll: ControllerFunc; // get all items
  getOne: ControllerFunc; // get single item by ID
  store: ControllerFunc; // create new item
  update: ControllerFunc; // update item
  remove: ControllerFunc; // delete item by id
}
