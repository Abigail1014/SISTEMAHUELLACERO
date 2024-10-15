import React from 'react'
import Image from "next/image"

import { Recycle, Fish, Banana, Droplets } from "lucide-react"

const Service = () => {
  return (
    <section className="p-6" id="service">
        <div className="">

          <p className="flex items-center">
            <Image src="/assets/images/logo.jpg" width={82} height={82} alt="logo"/>
            <span className="text-xl font-semibold text-lime-600">¿A qué nos dedicamos?</span>
          </p>

          <div className="text-4xl mb-4">
            <h2>Nosotros nos dedicamos a conectar, cambiar, generar ingresos a proyectos de alto impacto</h2>
            <h2 className="font-bold">También analizamos datos sociales</h2>
          </div>

          <ul className="grid grid-cols-4 gap-6">

            <li className=''>
              <div className="p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lime-600 shadow-lg h-full">
                <div className="mb-4 mt-4">
                  <Recycle className="w-16 h-16 text-lime-600"/>
                </div>
                <h3 className="text-2xl mb-4 font-bold">Plástico</h3>
                <p className="">
                  Acciona por el medio ambiente, reforestando, reciclando y genera una economía circular.
                </p>
              </div>
            </li>

            <li className=''>
              <div className="p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lime-600 shadow-lg h-full">
                <div className="mb-4 mt-4">
                  <Fish className="w-16 h-16 text-lime-600"/>
                </div>
                <h3 className="text-2xl mb-4 font-bold">Proyectos de mar</h3>
                <p className="" >
                  Aqui puedes subir todo proyecto contra la contaminacion del mar.
                </p>
              </div>
            </li>

            <li className=''>
              <div className="p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lime-600 shadow-lg h-full">
                <div className="mb-4 mt-4">
                  <Banana className="w-16 h-16 text-lime-600"/>
                </div>
                <h3 className="text-2xl mb-4 font-bold">Abono orgánico</h3>
                <p className="">
                  Conecta a quienes necesitan abono organico.
                </p>
              </div>
            </li>

            <li className=''>
              <div className="p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lime-600 shadow-lg h-full">
                <div className="my-4">
                  <Droplets className="w-16 h-16 text-lime-600"/>
                </div>
                <h3 className="text-2xl mb-4 font-bold">Aceite usado</h3>
                <p className="" >
                  Tienes aceite usado y quieres venderlo.
                </p>
              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export { Service }