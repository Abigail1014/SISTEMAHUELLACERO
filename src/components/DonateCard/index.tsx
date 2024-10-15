"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

import { Mail } from "lucide-react"

type DonateCardProps = {
  imageUrl: string,
  imageAlt: string,
  subtitle: string,
  subtitleData: string,
  subtitlePercentage: string,
  progressPercentage: number,
  title: string,
  objective: string,
  raised: string,
  goal: string,
  buttonLink: string,
  buttonText: string,
}

export function DonateCard({
  imageUrl,
  imageAlt,
  subtitle,
  subtitleData,
  subtitlePercentage,
  progressPercentage,
  title,
  objective,
  raised,
  goal,
  buttonLink,
  buttonText,
}: DonateCardProps) {
  const [progress, setProgress] = React.useState(13)

  const data = {
    imageUrl,
    imageAlt,
    subtitle,
    subtitleData,
    subtitlePercentage,
    progressPercentage,
    title,
    objective,
    raised,
    goal,
    buttonLink,
    buttonText,
  }

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(data.progressPercentage), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <li>
      <div className="relative">

        <div className="">
          <Image src={data.imageUrl} width={450} height={450} alt={data.imageAlt} className="" />
        </div>

        <div className="absolute top-60 left-32 border p-8 bg-white max-w-96">
          <div className="flex justify-between mb-4">
            <p className="">
              <span>{data.subtitle}</span>
              <span className="ml-2 font-bold">{data.subtitleData}</span>
            </p>
            <p className="text-xl font-semibold text-lime-600">{data.subtitlePercentage}</p>
          </div>

          <div className="mb-4">
            <Progress value={progress} className="" />
          </div>

          <h3 className="font-bold text-2xl">{data.title}</h3>

          <div className="flex justify-between mb-4" >

            <p className="">
              <span className="text-slate-600 text-sm">Objetivo</span>
              <span className="ml-2 font-bold text-lime-600">{data.objective}</span>
            </p>

            <p className="">
              <span className="text-slate-600 text-sm">Recaudado</span>
              <span className="ml-2 font-bold text-orange-400">{data.raised}</span>
            </p>

            <p className="">
              <span className="text-slate-600 text-sm">Meta</span>
              <span className="ml-2 font-bold text-cyan-600">{data.goal}</span>
            </p>

          </div>

          <Button asChild>
            <Link href={data.buttonLink}>{data.buttonText}<Mail className="ml-2" /></Link>
          </Button>
        </div>

      </div>
    </li>
  )
}