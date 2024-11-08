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
              buttonLink = "https://www.mollecode.co/comunidad"
              buttonText = "Conviertete en un embajador"
          />
          <DonateCard
              imageUrl = "/assets/images/basura_1.jpg"
              imageAlt = "Biodiversidad"
              subtitle = "Conoce a organizaciones"
              subtitleData = "$25"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya a proyectos"
              objective = "$34"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.mollecode.co/rescate"
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
              buttonLink = "https://www.feria24.co/mollecode"
              buttonText = "Ver más"
          />
          <DonateCard
              imageUrl = "/assets/images/datathon.jpg"
              imageAlt = "3800823"
              subtitle = "Total de basura vendido"
              subtitleData = "$25"
              subtitlePercentage = "83%"
              progressPercentage = {83}
              title = "Apoya a registrar un arbolito"
              objective = "$34"
              raised = "$56"
              goal = "$86"
              buttonLink = "https://www.mollecode.co/persona-individual"
              buttonText = "Planta y riega un arbolito"
          />
        </ul>
    </section>
  )
}
export { Donate }