// routes/user.js
import { Router } from "express"
const router = Router()
import User from "../models/User.js"

// Get users
router.get("/", async (req, res) => {
  if (req.body.username) {
    // Get a single user
    try {
      const user = await User.findOne({ username: req.body.username }).exec()
      res.json(user)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  } else {
    // Get all users
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
})

// Create a new user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const newUser = await user.save()
    res.status(201).json({ message: `New user '${newUser.username}' created.` })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
