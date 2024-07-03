import DeleteResourceButton from "@/components/DeleteResourceButton"
import { fetchResource } from "@/utils/actions/resource"
import Link from "next/link"

type ValuesProps = {
  values: {
    resource: {
      name: string
    }
  }
}

const ResourceList = async (modelName: string) => {
  const resourceData = await fetchResource(modelName)
  const resourcePathSegment = resourceData.resource.name + "s"
  const {
    resource: { name, data },
  } = resourceData

  return (
    // <h1>ResourceListComponent</h1>
    <div>
      <h1>ResourceListComponent</h1>
      <ul className="flex flex-col gap-2 mt-8">
        {data.map((item: { name: string; id: string }) => (
          <li className="flex justify-between" key={item.id}>
            {item.name}
            <div>
              <Link href={`/${resourcePathSegment}/${item.id}`}>edit</Link>
              <DeleteResourceButton values={{ location }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ResourceList
