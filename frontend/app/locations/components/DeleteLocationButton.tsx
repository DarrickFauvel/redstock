"use client"
import { Button } from "@/components/ui/button"
import { deleteLocation } from "@/utils/actions/location"

const DeleteLocationButton = (id: { id: string }) => {
  return <Button onClick={() => deleteLocation(id)}>Delete</Button>
}
export default DeleteLocationButton
