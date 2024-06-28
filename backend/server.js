import express from "express"

import { main } from "./connect.js"

const app = express()

const PORT = 5000

app.get("/", (req, res) => {
  main()
  res.json({ message: "Hello World!!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
