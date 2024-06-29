import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import logger from "./middleware/logger.js"
import db from "./db.js"
import {
  categoryRoutes,
  itemRoutes,
  locationRoutes,
  userRoutes,
} from "./routes/index.js"

const app = express()
const port = 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

// Routes
app.use("/api/users", userRoutes)
app.use("/api/items", itemRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/locations", locationRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
