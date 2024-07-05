// import { fetchSingleLocation } from "@/utils/actions/location"
import { fetchSingleResource } from "@/utils/actions/resource"
import LocationForm from "../components/LocationForm"
import path from "path"

const LocationEditPage = async (props) => {
  console.log(props)
  // const location = await fetchSingleResource(params.id)

  return (
    <section>
      <h1>Location Edit</h1>
      {/* <LocationForm location={location} /> */}
    </section>
  )
}
export default LocationEditPage
