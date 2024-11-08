import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectTable from "./components/ProjectTable"
import OrganizationTable from "./components/OrganizationTable"
import TrashTable from "./components/TrashTable"

export default async function Dashboard () {  
  return (
    <div>
      <div className="p-6 w-full flex justify-between">
        <h2>Administrador</h2>
        <Button variant="outline" asChild>
          <Link href="/">Volver a la página principal</Link>
        </Button>
      </div>
      {/* Project */}
      <ProjectTable />
      {/* Orgs */}
      <OrganizationTable />
      {/* Trash */}
      <TrashTable />
      
      
    </div>
  )
}