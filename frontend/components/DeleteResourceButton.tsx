"use client"
import { Button } from "@/components/ui/button"
import { deleteResource } from "@/utils/actions/resource"

const DeleteResourceButton = (resource, id) => {
  return <Button onClick={() => deleteResource(resource, id)}>Delete</Button>
}
export default DeleteResourceButton
