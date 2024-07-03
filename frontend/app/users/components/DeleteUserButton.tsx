"use client"
import { Button } from "@/components/ui/button"
import { deleteUser } from "@/utils/actions/user"

const DeleteUserButton = (id: { id: string }) => {
  return <Button onClick={() => deleteUser(id)}>Delete</Button>
}
export default DeleteUserButton
