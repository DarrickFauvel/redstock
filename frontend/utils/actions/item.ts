"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchItems = async () => {
  return await prisma.item.findMany({
    orderBy: {
      name: "desc",
    },
  })
}

export const fetchSingleItem = async (id: string) => {
  return await prisma.item.findUnique({
    where: {
      id,
    },
  })
}

export const createItem = async (values: { email: string; name: string }) => {
  const newItem = await prisma.item.create({
    data: {
      email: values.email,
      name: values.name,
    },
  })
  revalidatePath("/items")
}

export const updateItem = async (values: {
  id: string
  name: string
  email: string
}) => {
  const updatedItem = await prisma.item.update({
    where: {
      id: values.id,
    },
    data: {
      name: values.name,
      email: values.email,
    },
  })
  redirect("/items")
}

export const deleteItem = async ({ id }: { id: string }) => {
  await prisma.item.delete({
    where: {
      id,
    },
  })
  revalidatePath("/items")
}
