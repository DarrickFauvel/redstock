import { Button } from "@/components/ui/button"
import { deleteUser, fetchUsers } from "@/utils/actions/user"
import Link from "next/link"
import DeleteUserButton from "./DeleteUserButton"

const UsersList = async () => {
  const users = await fetchUsers()

  return (
    <ul className="flex flex-col gap-2 mt-8">
      {users.map((user) => (
        <li className="flex justify-between" key={user.email}>
          {user.name} : {user.email}
          <div>
            <Link href={`/users/${user.id}`}>edit</Link>
            <DeleteUserButton id={user.id} />
          </div>
        </li>
      ))}
    </ul>
  )
}
export default UsersList
