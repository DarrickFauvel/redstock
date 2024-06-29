import { Schema, model } from "mongoose"

const locationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
})

const Location = model("Location", locationSchema)

export default Location
