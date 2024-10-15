import React from 'react'
import { DonateCard } from '@/components/DonateCard'

const Donate = () => {

  return (
    <section className="p-6" id="donate">

        <ul className="grid grid-cols-2 gap-x-4 gap-y-32">

          <DonateCard
              imageUrl = "/assets/images/voluntario.jpg"
              imageAlt = "Voluntario"
              subtitle = "Recaudado"
              subtitleData = "$20"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya actuando una economica circular a proyectos sociales"
              objective = "$342"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.facebook.com/ecossmarket"
              buttonText = "Únete a la comunidad"
          />
          <DonateCard
              imageUrl = "/assets/images/basura_1.jpg"
              imageAlt = "Biodiversidad"
              subtitle = "Recaudado"
              subtitleData = "$25"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya a proyectos"
              objective = "$34"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.facebook.com/ecossmarket"
              buttonText = "Recaudado"
          />
          <DonateCard
              imageUrl = "/assets/images/marcha.jpg"
              imageAlt = "Niños"
              subtitle = "Cantidad de goma reciclada"
              subtitleData = "$25"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya a conocer empresas"
              objective = "$34"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.facebook.com/ecossmarket"
              buttonText = "Ver más"
          />
          <DonateCard
              imageUrl = "/assets/images/perro.jpg"
              imageAlt = "3800823"
              subtitle = "Total de basura vendido"
              subtitleData = "$25"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya contactando a empresa que compran basura"
              objective = "$34"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.facebook.com/ecossmarket"
              buttonText = "Únete a la comunidad"
          />
        </ul>
    </section>
  )
}
export { Donate }