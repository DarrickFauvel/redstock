// routes/category.js
import { Router } from "express"
const router = Router()
import { Category, User } from "../models/index.js"

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get a single category
router.get("/:category", async (req, res) => {
  const { category } = req.params.category
  try {
    const category = await Category.find(category)
    res.json(category)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new user
router.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.user })

  const category = new Category({
    name: req.body.name,
    description: req.body.description,
    user: user._id,
  })

  try {
    const newCategory = await category.save()
    res.status(201).json(newCategory)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
