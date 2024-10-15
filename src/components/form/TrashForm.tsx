"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useRouter } from "next/navigation";
import { useState } from "react";

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { createTrash, prueba } from "@/lib/actions/trash.actions";

const FormSchema = z.object({
  ci: z.string().min(2, {
    message: "Por favor introduce un CI válido",
  }),
  description: z.string().min(2, {
    message: "Descripción no válida.",
  }),
  address: z.string().min(2, {
    message: "Introduce una dirección válida.",
  }),
  contact: z.string().min(2, {
    message: "Introduce un contacto válido.",
  }),
  city: z.string().min(2, {
    message: "Introduce una ciudad válida.",
  }),
})

export function TrashForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ci: "",
      description: "",
      address: "",
      contact: "",
      city: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    try {
      const trash = {
        ci: data.ci,
        description: data.description,
        address: data.address,
        contact: data.contact,
        city: data.city,
      };
      // const newTrash = await createTrash(trash);
      let newTrash = await createTrash(trash);
      // while(!newTrash) {
      //   newTrash = await createTrash(trash);
      // }

      if (newTrash) {
        router.push(`/`);
      } else {
        console.log("Hubo un error en al crear trash");
      }
    } catch (error) {
      console.log("Hubo un error en onSubmit");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="ci"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carnet</FormLabel>
              <FormControl>
                <Input placeholder="CI" {...field} />
              </FormControl>
              <FormDescription>
                Introduce tu ci sin extensión.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Escribe la deescripción" {...field} />
              </FormControl>
              <FormDescription>
                Describe la basura que deseas registrar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Describe la basura" {...field} />
              </FormControl>
              <FormDescription>
                Escribe la dirección donde se encuentra la basura.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contacto</FormLabel>
              <FormControl>
                <Input placeholder="Contacto" {...field} />
              </FormControl>
              <FormDescription>
                Deja un número de contacto.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciudad</FormLabel>
              <FormControl>
                <Input placeholder="Ciudad" {...field} />
              </FormControl>
              <FormDescription>
                Escribe la ciudad en la que se encuentra.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Enviar</Button> */}
        <Button disabled={isLoading} variant="lime" type="submit">
          {isLoading ? (
            <div className="flex items-center gap-4">
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="animate-spin"
              />
              Cargando...
            </div>
          ) : (
            <>Enviar</>
          )}
        </Button>
      </form>
    </Form>
  )
}
