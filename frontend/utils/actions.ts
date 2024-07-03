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

export const createUser = async (values) => {
  const newUser = await prisma.user.create({
    data: {
      email: values.email,
      name: values.name,
    },
  })
  revalidatePath("/users")
}
