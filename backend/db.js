import mongoose from "mongoose"

const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_database = process.env.DB_DATABASE

// const dbURI = `mongodb+srv://${db_username}:${db_password}@${db_host}${db_database}?retryWrites=true&w=majority&appName=Cluster0`
const dbURI = process.env.DB_URL

mongoose.connect(dbURI)

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected.")
})

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err)
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected")
})

export default mongoose.connection
