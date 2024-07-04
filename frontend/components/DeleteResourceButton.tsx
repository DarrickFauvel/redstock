"use client"
import { Button } from "@/components/ui/button"
import { deleteResource } from "@/utils/actions/resource"

const DeleteResourceButton = ({ modelName, id }: any) => {
  return <Button onClick={() => deleteResource(modelName, id)}>Delete</Button>
}
export default DeleteResourceButton
