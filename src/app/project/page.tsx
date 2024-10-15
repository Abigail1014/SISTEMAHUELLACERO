import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import React from 'react'
import Navbar from '@/components/Navbar';
import { ProjectForm } from "@/components/form/ProjectForm"
import style from "./style.module.css"
import { cn } from "@/lib/utils";

const Project = async () => {
  const session = await getServerSession(options)
  return (
    <div>
      <div className="px-6 py-2 flex justify-center sticky top-0 bg-white z-50 gap-4">
        <Navbar admin={!!session} />
      </div>
      <div className={cn("p-6 w-full flex justify-center items-center", style.gradientCustom)}>
        <ProjectForm />
      </div>
    </div>
  )
}

export default Project