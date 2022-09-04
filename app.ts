import express, { ErrorRequestHandler } from 'express'
import { animalsRouter } from './routes/animals.router'

export const app = express()

app.get("/", (req, res, next) => {
  res.json("Hello from API")
})

// LOAD ROUTES
app.use("/animals", animalsRouter)

// CENTRAL ERROR HANDLER
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

  // log all code errors (no status set)
  if(!err.status) console.log(err)

  res.status(err.status || 500).json({
    error: err.message || err
  })
};

app.use(errorHandler)