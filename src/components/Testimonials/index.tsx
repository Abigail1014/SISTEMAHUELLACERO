import React from 'react'
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const Testimonials = () => {
  return (
    <section className="mt-24 flex bg-slate-800 text-white">

      <div className="p-6">
        <p className="flex items-center mb-4">
          <Image src="/assets/images/logo.jpg" className="rounded" width={82} height={82} alt="logo"/>
          <span className='ml-2 mb-4 text-xl font-semibold text-lime-600'>Lee los Testimonios</span>
        </p>

        <div className="text-4xl mb-4">
          <h2>Lo que dicen de nosotros</h2>
          <h2 className="font-bold">Nuestra Comunidad</h2>
        </div>

        <div className="flex gap-2">
          <div className="">
            {/* <Image src="/assets/images/testi-avatar.png" width={60} height={60} alt="David S. Neuman"/> */}
            <Image src="/assets/images/logo.jpg" className="rounded" width={60} height={60} alt="David S. Neuman"/>
          </div>

          <div>
            <p className="">
              Para mi fue una gran experiencia con el evento.
            </p>
            <Separator className="my-4" />
            <h3 className="font-bold">Wendy Añagua</h3>

            <p className="text-slate-400">Representante de Wasiri</p>
          </div>
        </div>

      </div>

      <div className="testi-banner">
        {/* <Image src="/assets/images/recicle.jpg" width={960} height={846} alt="Recicle"/> */}
        <Image src="/assets/images/cover.jpg" width={960} height={846} alt="Recicle"/>
      </div>

    </section>
  )
}

export { Testimonials }