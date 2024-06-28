import { Schema } from "mongoose"

// Category Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
})

// Product Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

// Transaction Schema
const transactionSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ["purchase", "sale"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Models
const Category = mongoose.model("Category", categorySchema)
const Product = mongoose.model("Product", productSchema)
const Transaction = mongoose.model("Transaction", transactionSchema)

export default { Category, Product, Transaction }
