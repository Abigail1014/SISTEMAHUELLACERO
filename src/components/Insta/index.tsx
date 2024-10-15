import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Medio Ambiente",
    art: "/assets/images/forest.jpg",
  },
  {
    artist: "Botella",
    art: "/assets/images/basura_1.jpg",
  },
  {
    artist: "Voluntarios",
    art: "/assets/images/voluntario.jpg",
  },
  {
    artist: "Marcha",
    art: "/assets/images/marcha.jpg",
  },
  {
    artist: "Perro y gato",
    art: "/assets/images/perro.jpg",
  },
  {
    artist: "Botella",
    art: "/assets/images/bottle.jpg",
  },
]

export function Insta() {
  return (
    <div className="w-full p-6 flex justify-center">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Description ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-96 object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Descripción{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

    </div>
  )
}
