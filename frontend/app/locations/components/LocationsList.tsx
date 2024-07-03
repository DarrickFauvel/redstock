import DeleteResourceButton from "@/components/DeleteResourceButton"
import { fetchLocations } from "@/utils/actions/location"
import Link from "next/link"

const LocationsList = async () => {
  const locations = await fetchLocations()
  console.log(locations)

  return (
    <ul className="flex flex-col gap-2 mt-8">
      {locations.map((location) => (
        <li className="flex justify-between" key={location.id}>
          {location.name}
          <div>
            <Link href={`/locations/${location.id}`}>edit</Link>
            <DeleteResourceButton values={{ location }} />
          </div>
        </li>
      ))}
    </ul>
  )
}
export default LocationsList
