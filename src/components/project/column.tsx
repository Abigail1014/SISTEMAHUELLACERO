"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// PROJECT
// projectName
// orgName
// ODS //multiple choice
// contact
// responsible

export type Project = {
  id: string
  projectName: string
  orgName: string
  ODS: "ODS1" | "ODS2" | "ODS3" | "ODS4" | "ODS5" | "ODS6" | "ODS7" | "ODS8" | "ODS9" | "ODS10" | "ODS11" | "ODS12" | "ODS13" | "ODS14" | "ODS15" | "ODS16" | "ODS17"
  contact: string
  responsible: string
}

export const columnsProject: ColumnDef<Project>[] = [
  {
    accessorKey: "projectName",
    header: "Proyecto",
  },
  {
    accessorKey: "orgName",
    header: "Organización",
  },
  {
    accessorKey: "ODS",
    header: "ODS",
  },
  {
    accessorKey: "responsible",
    header: "Responsable",
  },
  {
    accessorKey: "contact",
    header: "Contacto",
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