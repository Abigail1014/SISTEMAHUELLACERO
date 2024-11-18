import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectTable from "./components/ProjectTable"
import OrganizationTable from "./components/OrganizationTable"
// import TrashTable from "./components/TrashTable"
import { TrashList } from "@/components/TrashList"

const datitos = [
  {
    id: "67081e2e003a30aeb45f",
    ci: "pruebas",
    description: "pruebas",
    address: "pruebas",
    contact: "pruebas",
    city: "pruebas",
    userId: "pruebas",
  },
  {
    id: "67081e2e003a30aeb45f",
    ci: "pruebas",
    description: "pruebas",
    address: "pruebas",
    contact: "pruebas",
    city: "pruebas",
    userId: "pruebas",
  }
]

export default async function Dashboard ()
 {

  return (
    <div>
      <div className="p-6 w-full flex justify-between">
        <h2>Administrador</h2>
        <Button variant="outline" asChild>
          <Link href="/">Volver a la página principal</Link>
        </Button>
      </div>
      <div className="p-6 w-full flex justify-between">
        <h2>Editar</h2>
        <Button variant="outline" asChild>
          <Link href="/">Agregar otra cuenta de administrador</Link>
        </Button>
      </div>
      {/* Project */}
      <ProjectTable />
      {/* Orgs */}
      <OrganizationTable />
      {/* Trash */}
      {/* <TrashTable /> */}
      <TrashList
        trashItems={datitos}
        currentUserId="admin"
        currentUserRole="admin"/>
    </div>
  )
}
