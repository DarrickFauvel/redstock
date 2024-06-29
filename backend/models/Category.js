import { Schema, model } from "mongoose"

// Category Schema
const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
})

const Category = model("Category", categorySchema)

export default Category
