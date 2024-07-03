import ResourceList from "../components/ResourceList"
import LocationForm from "./components/LocationForm"

export default async function UsersPage() {
  return (
    <section>
      <h1>Users</h1>
      <LocationForm />
      <ResourceList values={{ modelName: "location" }} />
    </section>
  )
}
