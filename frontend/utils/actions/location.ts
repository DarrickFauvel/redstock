"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchLocations = async () => {
  return await prisma.location.findMany({
    orderBy: {
      name: "desc",
    },
  })
}

export const fetchSingleLocation = async (id: string) => {
  return await prisma.location.findUnique({
    where: {
      id,
    },
  })
}

export const createLocation = async (values) => {
  const newLocation = await prisma.location.create({
    data: {
      name: values.name,
      description: values.description,
    },
  })
  revalidatePath("/locations")
}

export const updateLocation = async (values) => {
  const updatedLocation = await prisma.location.update({
    where: {
      id: values.id,
    },
    data: {
      name: values.name,
      description: values.description,
    },
  })
  redirect("/locations")
}

export const deleteLocation = async ({ id }: { id: string }) => {
  console.log(id)
  await prisma.location.delete({
    where: {
      id,
    },
  })
  revalidatePath("/locations")
}
