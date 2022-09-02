import { Animal } from "../types/Animal"

export class AnimalService {

  // get all animals
  findAll() : Array<Animal>  {
    return [
      { _id: "a1", name: "Sneezy Sloth" },
      { _id: "a2", name: "Lazy Lioness" },
    ];
  }

  // create new animal
  store() : Animal {
    return { _id: "a3", name: "Crazy Chameleon" } 
  }

}