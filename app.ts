import express from 'express'
import { AnimalService } from './services/AnimalService'

export const app = express()

// animal service which fetches data from "database"
// returns hardcoded data for now :)
const animalService = new AnimalService()

app.get("/", (req, res, next) => {
  res.json("Hello from API")
})

app.get("/animals", (req, res, next) => {
  const animals = animalService.findAll()
  res.json(animals)
})

app.post("/animals", (req, res, next) => {
  const animal = animalService.store()
  res.json(animal)
})