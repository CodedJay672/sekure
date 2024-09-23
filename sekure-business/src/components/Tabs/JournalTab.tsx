import { bigTable, data } from "@/constants"
import TableComponent from "../ui/shared/TableComponent"

const JournalTab = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="flex-1 text-xs font-light text-placeholder-text">Ces clés vous permettront d’authentifier les demandes d’API</h1>
      </div>

      <TableComponent variant="big" columns={bigTable} data={data} />
    </>
  )
}

export default JournalTab
