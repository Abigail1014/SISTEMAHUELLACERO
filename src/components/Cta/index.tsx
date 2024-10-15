import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import { Mail } from "lucide-react"

const Cta = () => {
  return (
    <section className="p-6 grid grid-cols-2 gap-6">
      <div className="p-8 bg-lime-500 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-white text-center font-semibold mb-8">Conoce las  Organizaciones que se unieron a nosotros</h2>

        <Button variant="outline" className='w-fit' asChild>
          <Link href="/org">
            <span>Quiero registrar mi Organización</span>
            <Mail className='ml-2 text-lime-500' />
          </Link>
        </Button>
      </div>

      <div className="">
        <Image src="/assets/images/reciclar.jpg" width={520} height={228} alt="Fox"
          className="w-full" />
      </div>
    </section>
  )
}
export { Cta }