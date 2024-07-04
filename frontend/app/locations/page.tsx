import LocationForm from "./components/LocationForm"
import ResourceList from "../components/ResourceList"

export default async function UsersPage() {
  return (
    <section>
      <h1>Locations</h1>
      <LocationForm />
      <ResourceList modelName="location" />
    </section>
  )
}
