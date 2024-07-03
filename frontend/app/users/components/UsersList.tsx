import { fetchUsers } from "@/utils/actions"
import Link from "next/link"

const UsersList = async () => {
  const users = await fetchUsers()

  return (
    <ul>
      {users.map((user) => (
        <li className="flex justify-between" key={user.email}>
          {user.name} : {user.email}
          <div>
            <Link href={`/users/${user.id}`}>edit</Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default UsersList
