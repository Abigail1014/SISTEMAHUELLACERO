"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Basura = {
  id: string
  ci: string
  description: string
  address: string
  contact: string
  city: string
}



export const columnsBasura: ColumnDef<Basura>[] = [
  {
    accessorKey: "ci",
    header: "CI",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "address",
    header: "Dirección",
  },
  {
    accessorKey: "contact",
    header: "Contacto",
  },
  {
    accessorKey: "city",
    header: "City",
  },
]

// ORG
// organizacion
// redSocial
// contact
// responsible

// PROJECT
// projectName
// orgName
// ODS //multiple choice
// contact
// responsible

// BASURA
// ci
// description
// address
// contact
// city