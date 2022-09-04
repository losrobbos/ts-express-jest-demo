import { Animal, AnimalInput } from "../types/Animal"

export class AnimalService {
  private _animals;

  public constructor() {
    this._animals = [
      { _id: "a1", name: "Sneezy Sloth" },
      { _id: "a2", name: "Lazy Lioness" },
    ];
  }

  // get all animals
  public findAll = (): Array<Animal> => {
    return this._animals;
  };

  public findById = (id: string): Animal | null => {
    return this._animals.find((animal) => animal._id === id) || null;
  }

  // create new animal
  public store = (animalData: AnimalInput): Animal => {
    const animal: Animal = { ...animalData, _id: Date.now().toString() };
    this._animals.push(animal);
    return animal;
  }
}