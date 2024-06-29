"use client"
import { useEffect, useState } from "react"
import TableComponent from "./components/table"

export default function ItemsComponent() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function getItems() {
      const res = await fetch("http://localhost:5000/api/items")
      const data = await res.json()
      setItems(data)
    }
    getItems()
  }, [])

  return (
    <section>
      <TableComponent items={items} />
    </section>
  )
}
