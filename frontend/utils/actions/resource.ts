"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchResource = async (modelName: any) => {
  if (!prisma[modelName]) {
    throw new Error(`Model ${modelName} does not exist on Prisma client`)
  }

  const data = await prisma[modelName].findMany({
    orderBy: {
      name: "desc",
    },
  })

  return {
    modelName,
    data,
  }
}

export const fetchSingleResource = async (modelName: string, id: string) => {
  return await prisma[modelName].findUnique({
    where: {
      id,
    },
  })
}

export const deleteResource = async (modelName: any, id: string) => {
  const resourcePath = "/" + modelName + "s"
  await prisma[modelName].delete({
    where: {
      id,
    },
  })
  revalidatePath(resourcePath)
}
