import mongoose from "mongoose"
import { Category, Product, Transaction } from "./schemas.js"

const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_database = process.env.DB_DATABASE

const connectionString = `mongodb+srv://${db_username}:${db_password}@${db_host}${db_database}?retryWrites=true&w=majority&appName=Cluster0`

export async function main() {
  await mongoose.connect(connectionString)
  console.log("Connected to database.")
}

// main().catch((err) => console.log(err))
