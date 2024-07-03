import UserForm from "./components/UserForm"
import ListUsers from "./components/UsersList"

export default async function UsersPage() {
  return (
    <section>
      <h1>Users</h1>
      <UserForm />
      <ListUsers />
    </section>
  )
}
