"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchResource = async ({ values }) => {
  const { modelName } = values
  // console.log(modelName)
  if (!prisma[modelName]) {
    throw new Error(`Model ${modelName} does not exist on Prisma client`)
  }

  const data = await prisma[modelName].findMany({
    orderBy: {
      name: "desc",
    },
  })

  return {
    resource: {
      name: modelName,
      data,
    },
  }
}

export const deleteResource = async ({ values }) => {
  console.log(values)
  // await prisma.location.delete({
  //   where: {
  //     id,
  //   },
  // })
  // revalidatePath("/locations")
}
