import { Project, columnsProject } from "@/components/project/column"
import { DataTable } from "@/components/project/data-table"
import { Orgs, columnsOrgs } from "@/components/orgs/column"
import { Basura, columnsBasura } from "@/components/basura/column"
import { Button } from "@/components/ui/button"
import Link from "next/link"
async function getDataProject(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      projectName: "Nombre del proyecto",
      orgName: "Organizacion",
      ODS: "ODS1",
      contact: "77667766",
      responsible: "Alan Richard",
    },
  ]
}
async function getDataOrgs(): Promise<Orgs[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      organization: "organizacion",
      socialMedia: "alksjdhbfiuqubhwsfkg",
      contact: "66776677",
      responsible: "Propietario",
      logo: "/assets/images/logo.jpg"
    },
  ]
}
async function getDataBasura(): Promise<Basura[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      ci: "12121212",
      description: "Descripcion de la basura",
      address: "direccion",
      contact: "66556655",
      city: "Cochabamba",
    },
  ]
}

const Dashboard = async () => {
  const dataProject = await getDataProject()
  const dataOrgs = await getDataOrgs()
  const dataBasura = await getDataBasura()
  return (
    <div>
      <div className="p-6 w-full flex justify-between">
        <h2>Administrador</h2>
        <Button variant="outline" asChild>
          <Link href="/">Volver a la página principal</Link>
        </Button>
      </div>
      <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Proyectos</h2>
        <DataTable columns={columnsProject} data={dataProject} />
      </div>
      <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Organizaciones</h2>
        <DataTable columns={columnsOrgs} data={dataOrgs} />
      </div>
      <div className="container mx-auto pt-10">
        <h2 className="text-2xl mb-4">Basura</h2>
        <DataTable columns={columnsBasura} data={dataBasura} />
      </div>
    </div>
  )
}

export default Dashboard