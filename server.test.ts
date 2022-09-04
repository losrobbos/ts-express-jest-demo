import supertest from 'supertest'
import { app } from './app'
import { AnimalInput } from './types/Animal'

const postman = supertest(app)

test("if that works", () => {
  const isAdmin = true
  expect(isAdmin).toBeTruthy()
})

test("home route", async () => {
  const respo = await postman.get("/") 
  expect(respo.body).toBeDefined()
  expect(respo.body).toBe("Hello from API");
})

test.only("get animals", async () => {
  const respo = await postman.get("/animals")
  expect(respo.statusCode).toBe(200)
  expect(respo.body.length).toBeGreaterThan(0)
})

test("create animal", async () => {
  const animalNew: AnimalInput = { name: "Picky Penguin", age: 13 }
  const respo = await postman.post("/animals").send(animalNew)
  expect(respo.statusCode).toBe(200);
  expect(respo.body).toBeDefined()
  expect(respo.body.name).toBe(animalNew.name)
  expect(respo.body.age).toBe(animalNew.age)
})