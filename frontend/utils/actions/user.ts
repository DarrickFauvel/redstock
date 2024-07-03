"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchUsers = async () => {
  return await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  })
}

export const fetchSingleUser = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export const createUser = async (values: { email: string; name: string }) => {
  const newUser = await prisma.user.create({
    data: {
      email: values.email,
      name: values.name,
    },
  })
  revalidatePath("/users")
}

export const updateUser = async (values: {
  id: string
  name: string
  email: string
}) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: values.id,
    },
    data: {
      name: values.name,
      email: values.email,
    },
  })
  redirect("/users")
}

export const deleteUser = async ({ id }: { id: string }) => {
  await prisma.user.delete({
    where: {
      id,
    },
  })
  revalidatePath("/users")
}
