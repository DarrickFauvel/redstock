// routes/location.js
import { Router } from "express"
const router = Router()
import { Location, User } from "../models/index.js"

// Get all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find()
    res.json(locations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get a single location
router.get("/:location", async (req, res) => {
  const { location } = req.params.location
  try {
    const location = await Location.find(location)
    res.json(location)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new user
router.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.user })

  const location = new Location({
    name: req.body.name,
    description: req.body.description,
    user: user._id,
  })

  try {
    const newLocation = await location.save()
    res.status(201).json(newLocation)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
