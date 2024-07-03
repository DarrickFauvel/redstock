import { fetchSingleUser } from "@/utils/actions/user"
import UserForm from "../components/UserForm"

const UserEditPage = async ({ params }: { params: { id: string } }) => {
  const user = await fetchSingleUser(params.id)

  return (
    <section>
      <h1>User Edit</h1>
      <UserForm user={user} />
    </section>
  )
}
export default UserEditPage
