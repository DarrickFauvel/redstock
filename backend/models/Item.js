import { Schema, model } from "mongoose"

const itemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  imageUrl: { type: String },
  itemUrl: { type: String },
  quantity: { type: Number, required: true, default: 1 },
  value: { type: Number },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  location: { type: Schema.Types.ObjectId, ref: "Location" },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  purchaseDate: { type: Date },
  expiryDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Item = model("Item", itemSchema)

export default Item
