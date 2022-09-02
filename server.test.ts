import supertest from 'supertest'
import { app } from './app'

const postman = supertest(app)

test("if that works", () => {
  const isAdmin = true
  expect(isAdmin).toBeTruthy()
})

test("test home route", async () => {
  const respo = await postman.get("/") 
  expect(respo.body).toBeDefined()
  expect(respo.body).toBe("Hello from API");
})

test("test animals router", async () => {
  const respo = await postman.get("/animals")
  expect(respo.body.length).toBeGreaterThan(0)
})
