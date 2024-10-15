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
            month="Dic"
            date="13"
            subtitle="Summit"
            title="Datathon ODS 2025"
            content="Organizaciones internacionales"
            link="https://www.facebook.com/ecossmarket"
            linkText="Ver mas sobre el evento"
          />
          <EventCard
            month="Feb"
            date="23"
            subtitle="Foro"
            title="Conoce los paises que creen en la economía circular"
            content="Respiramos el mismo aire para fortalecernos sin importar nuestro idiomas, estamos listos para una economia circular"
            link="https://www.facebook.com/ecossmarket"
            linkText="Ver mas sobre el evento"
          />
          <EventCard
            month="Mar"
            date="27"
            subtitle="Datathon 2024"
            title="En este Datathon creemos el impacto que puede tener los datos para accionar con todos y para todos"
            content="Conoce la agenda de nuestros eventos"
            link="https://www.facebook.com/ecossmarket"
            linkText="Ver mas sobre el evento"
          />

        </ul>
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aDIIwTe2JuPG2K5UVw4plcCedgo787cvWmDWRsJnoHzTHL47R7gDa5iJ0oa36QmBNC2p-lbjr?gv=true" width="100%" height="820" frameBorder="0"></iframe>

      </div>
    </section>
  )
}

export { Events }