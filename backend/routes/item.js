// routes/item.js
import { Router } from "express"
const router = Router()
import { Category, Item, Location, User } from "../models/index.js"

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get a single item
router.get("/:id", async (req, res) => {
  const { id } = req.params.id
  try {
    const item = await Item.find(id)
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new item
router.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.user })

  const category = new Category({ name: req.body.category, user: user._id })
  if (category.name !== req.body.category) {
    await category.save()
  }

  const location = new Location({ name: req.body.location, user: user._id })
  if (location.name !== req.body.location) {
    await location.save()
  }

  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    itemUrl: req.body.itemUrl,
    upcCode: req.body.upcCode,
    quantity: req.body.quantity,
    value: req.body.value,
    category,
    location,
    user: user._id,
    purchaseDate: req.body.purchaseDate,
    expiryDate: req.body.expiryDate,
  })

  try {
    const newItem = await item.save()
    res.status(201).json({ message: `${newItem.name} created` })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id })
    if (!item) {
      return res.status(404).send("Item not found")
    }
    res.json({ message: `${item.name} deleted` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
