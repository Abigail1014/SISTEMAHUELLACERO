import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react';

const About = () => {
  const images = [
    {
      name: "basura_1",
      url: "/assets/images/basura_1.jpg"
    },
    {
      name: "marcha",
      url: "/assets/images/marcha.jpg"
    },
    // {
    //   name: "basura_2",
    //   url: "/assets/images/basura_2.jpg"
    // },
  ]
  return (
    <section className="p-6" id="about">
      <div className="grid grid-cols-2 gap-6">

        <div className="">
          {/* <ion-icon name="globe" style="font-size: 5rem; color: #91BE55;"></ion-icon> */}
          <div className="flex items-center">
            <Heart className="mr-2 h-6 w-6" />
            <h2 className="text-2xl">Juntos impactamos mejor</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((item, i) => <Image key={i} src={item.url} width={250} height={250} alt={item.name} className='w-full'/>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex items-center">
            <Image src="/assets/images/logo.jpg" width={82} height={82} alt="logo" className="mr-2" />
            <span className="text-xl font-semibold text-lime-600">¿Por qué debes unirte?</span>
          </p>
          <div className="text-2xl">
            <h2>Porque generamos una economía para proyectos sociales del vivir bien</h2>
            <h2 className='font-bold'>Conecta para apoyar a proyectos sociales</h2>
          </div>

          <ul className="flex gap-2">
            <li>
              <Button className="">Recicla</Button>
            </li>

            <li>
              <Button variant="secondary" className="">Reutiliza</Button>
            </li>

            <li>
              <Button variant="secondary" className="">Reduce</Button>
            </li>

          </ul>

          <div className="">

            <ul className="flex flex-col gap-4 mb-4">
              <li className="">
                <p className="">
                  Datathon donde fomentamos la investigación con los datos.
                </p>
              </li>
              <li className="flex">
                <Heart className="mr-2 h-6 w-6" />
                <p className="">Proyectos contra el hambre</p>
              </li>

              <li className="flex">
                <Heart className="mr-2 h-6 w-6" />
                <p className="">Proyectos de educación</p>
              </li>

              <li className="flex">
                <Heart className="mr-2 h-6 w-6" />
                <p className="">Proyecto de agua</p>
              </li>

              <li className="flex">
                <Heart className="mr-2 h-6 w-6" />
                <p className="">Proyecto de salud</p>
              </li>
            </ul>

            <Button asChild>
              <Link href="https://intelligence.weforum.org/topics/a1G0X000006DI8yUAG" target="_blank">
                <span>Conoce del impacto</span>
                <Heart className="ml-2 h-6 w-6"/>
              </Link>
            </Button>

          </div>

        </div>

      </div>
    </section>
  )
}

export { About }