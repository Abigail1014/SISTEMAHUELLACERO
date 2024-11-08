import React from 'react'
import { DataTable } from "@/components/project/data-table"
import { columnsProject } from "@/components/project/column"
import { getRecentProjectList } from "@/lib/actions/project.actions"

const ProjectTable = async () => {
    const dataProject = await getRecentProjectList()
  return (
    <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Proyectos</h2>
        <DataTable columns={columnsProject} data={dataProject} />
      </div>
  )
}

export default ProjectTable