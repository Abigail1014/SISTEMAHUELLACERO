"use client"

import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Orgs = {
  id: string
  organization: string
  socialMedia: string
  contact: string
  responsible: string
  logo: string
}

export const columnsOrgs: ColumnDef<Orgs>[] = [
  {
    accessorKey: "logo",
    header: "Logo",
    cell: ({ row }) => {
      const logo = row.getValue("logo") as string
      return (
        <Image src={logo} width={30} height={30} alt="" className="mr-2" />
      )
    },
  },
  {
    accessorKey: "organization",
    header: "Organización",
    cell: ({ row }) => {
      const logo = row.getValue("logo") as string
      const organizacion = row.getValue("organization") as string
      return (
        <div className="flex">
          <Image src={logo} width={30} height={30} alt="" className="mr-2" />
          <p>{organizacion}</p>
        </div>
      )
    },
  },
  {
    accessorKey: "socialMedia",
    header: "Link",
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