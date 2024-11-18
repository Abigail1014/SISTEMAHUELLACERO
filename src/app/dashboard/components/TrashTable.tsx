import React from 'react'
import { DataTable } from "@/components/project/data-table"
import { columnsBasura } from "@/components/basura/column"
import { getRecentTrashList } from "@/lib/actions/trash.actions"


const TrashTable = async () => {
    const dataBasura = await getRecentTrashList()
  return (
    <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Basura</h2>
        <DataTable columns={columnsBasura} data={dataBasura} />
      </div>
  )
}

export default TrashTable