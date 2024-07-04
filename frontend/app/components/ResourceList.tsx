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

const ResourceList = async ({ modelName }: { modelName: string }) => {
  const resourceData = await fetchResource(modelName)
  const resourcePathSegment = resourceData.modelName + "s"
  const { data } = resourceData

  return (
    <ul className="flex flex-col gap-2 mt-8">
      {data.map((item: { name: string; id: string }) => (
        <li className="flex justify-between" key={item.id}>
          {item.name}
          <div className="flex items-center gap-4">
            <Link href={`/${resourcePathSegment}/${item.id}`}>edit</Link>
            <DeleteResourceButton modelName={modelName} id={item.id} />
          </div>
        </li>
      ))}
    </ul>
  )
}
export default ResourceList
