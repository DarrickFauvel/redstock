// routes/user.js
import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import User from "../models/User.js"
const router = Router()
const prisma = new PrismaClient()

// Get a single user
router.get("/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    })
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new user
router.post("/", async (req, res) => {
  const { name, email } = req.body
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    })
    res.json({
      message: `Deleted  '${deletedUser.email}' with id: ${deletedUser.id}`,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Update a user
router.patch("/:id", async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      },
    })
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
