import { fetchSingleLocation } from "@/utils/actions/location"
import LocationForm from "../components/LocationForm"

const LocationEditPage = async ({ params }: { params: { id: string } }) => {
  const location = await fetchSingleLocation(params.id)

  return (
    <section>
      <h1>Location Edit</h1>
      <LocationForm location={location} />
    </section>
  )
}
export default LocationEditPage
