import React from 'react'
import { DataTable } from "@/components/project/data-table"
import { columnsOrgs } from "@/components/orgs/column"
import { getRecentOrganizationList } from "@/lib/actions/organization.actions"

const OrganizationTable = async () => {
    const dataOrgs = await getRecentOrganizationList()
  return (
    <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Organizaciones</h2>
        <DataTable columns={columnsOrgs} data={dataOrgs} />
      </div>
  )
}

export default OrganizationTable