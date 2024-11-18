"use client"

import { ColumnDef } from "@tanstack/react-table"

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
  {
    accessorKey: "Entregado",
    header: "Entregado",
  }
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