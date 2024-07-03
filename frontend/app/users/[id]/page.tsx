import { fetchSingleUser } from "@/utils/actions"

const UserEditPage = async ({ params }) => {
  const user = await fetchSingleUser(params.id)
  console.log(user)

  return <div>UserEditPage</div>
}
export default UserEditPage
