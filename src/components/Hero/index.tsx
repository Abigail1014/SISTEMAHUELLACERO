import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import { Mail } from "lucide-react"

const Hero = () => {
  return (
    <section className="p-6 flex flex-col items-center bg-[url('/assets/images/cover.jpg')] bg-cover bg-center w-full min-h-screen justify-around" id="home">
      <div className="flex items-center">
        <Image className="mr-2 rounded" src="/assets/images/logo.jpg" width={80} height={80} alt="Logo huella cero" />
        <h1 className="text-2xl text-white">Bienvenido a Huella Cero</h1>
      </div>

      <div className="text-6xl text-center text-white">
        <h2>Comunidad Huella Cero</h2>
        <h2 className="font-bold">Por una economía circular para todos</h2>
      </div>

      <p className="mb-8 text-lg text-white">
        Somos conscientes de nuestro consumo para fomentar la economía circular mediante los ODS en el mundo.
      </p>
      <Button className='' asChild>
        <Link href="/project"> <Mail className="mr-2 h-4 w-4" />Registra tu proyecto</Link>
      </Button>
    </section>
  )
}

export { Hero }