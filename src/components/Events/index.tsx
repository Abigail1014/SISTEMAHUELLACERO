import React from 'react'
import Image from "next/image"
import { EventCard } from '@/components/EventCard'

const Events = () => {
  return (
    <section className="p-6" id="event">
      <div className="">

        <p className="flex justify-center mb-4 items-center">
          <Image src="/assets/images/logo.jpg" width={60} height={60} alt="logo" />
          <span className='text-2xl'>Eventos</span>
          <Image src="/assets/images/logo.jpg" width={60} height={60} alt="logo" />
        </p>

        <div className="text-4xl text-center mb-4">
          <h2>Conoce el proyecto de alto impacto</h2>
          <h2 className="font-bold">Participa</h2>
        </div>

        <ul className="flex flex-col gap-4 mb-6">

          <EventCard
            month="Nov"
            date="23"
            subtitle="Presenta tu pitch"
            title="Datathon ODS 2024"
            content="ODS de investigacion de datos para resolver con una idea de startup"
            link="https://www.facebook.com/photo/?fbid=993267032816530&set=a.474095908066981"
            linkText="Ver mas sobre el evento"
          />
          <EventCard
            month="Feb"
            date="6"
            subtitle="Semilla de Cambio 2025"
            title="Conoce colegios que reciclan"
            content="Campaña de reciclaje para actividades de reforestacion"
            link="https://www.facebook.com/HuellaCeroBo"
            linkText="Ver mas sobre el evento"
          />
          <EventCard
            month="Dic"
            date="6"
            subtitle="Graduacion de mi Arbolito 2025"
            title="Conoce los arboles que fueron cuidados por grandes semillas de cambio"
            content="Los datos de los arboles nos ayudan a reciclar"
            link="https://www.facebook.com/profile.php?id=100093211535999"
            linkText="Ver mas sobre el evento"
          />

        </ul>
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aDIIwTe2JuPG2K5UVw4plcCedgo787cvWmDWRsJnoHzTHL47R7gDa5iJ0oa36QmBNC2p-lbjr?gv=true" width="100%" height="820" frameBorder="0"></iframe>

      </div>
    </section>
  )
}

export { Events }