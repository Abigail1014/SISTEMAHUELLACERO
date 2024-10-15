import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type EventCardProps = {
  month: string,
  date: string,
  subtitle: string,
  title: string,
  content: string,
  link: string,
  linkText: string,
}
const EventCard = ({
  month,
  date,
  subtitle,
  title,
  content,
  link,
  linkText,
}: EventCardProps) => {
  const data = {
    month,
    date,
    subtitle,
    title,
    content,
    link,
    linkText,
  }
  return (
    <li>
      <div className="p-4 flex border hover:shadow-md rounded">

        <div className="bg-lime-600 p-4 text-white w-20 h-20 font-bold text-center rounded">
          <p className="">{data.month}</p>
          <p className="">{data.date}</p>
        </div>

        <div className="flex ml-6 justify-between w-full items-center">
          <div className="">
            <p className="text-lg font-semibold text-lime-600 mb-1">{data.subtitle}</p>
            <h3 className="text-xl font-bold">{data.title}</h3>
            <p className="text-slate-700">{data.content}</p>
          </div>

          <Button variant="secondary" asChild>
            <Link href={data.link} target="_blank">{data.linkText}</Link>
          </Button>
        </div>

      </div>
    </li>
  )
}

export { EventCard }