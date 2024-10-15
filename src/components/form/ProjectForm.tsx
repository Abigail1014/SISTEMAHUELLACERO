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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createProject } from "@/lib/actions/project.actions";

const FormSchema = z.object({
  projectName: z.string().min(2, {
    message: "Por favor introduce un CI válido",
  }),
  orgName: z.string().min(2, {
    message: "Descripción no válida.",
  }),
  ODS: z.string().min(2, {
    message: "Introduce una dirección válida.",
  }),
  contact: z.string().min(2, {
    message: "Introduce un contacto válido.",
  }),
  responsible: z.string().min(2, {
    message: "Introduce una ciudad válida.",
  }),
})

const options = [
  { value: "ods1", text: "ODS 1 Fin de la Pobreza" },
  { value: "ods2", text: "ODS 2 Hambre Cero" },
  { value: "ods3", text: "ODS 3 Salud y Bienestar" },
  { value: "ods4", text: "ODS 4 Educación de Calidad" },
  { value: "ods5", text: "ODS 5 Igualdad de Género" },
  { value: "ods6", text: "ODS 6 Agua Limpia y Saneamiento" },
  { value: "ods7", text: "ODS 7 Energía Asequible y No Contaminante" },
  { value: "ods8", text: "ODS 8 Trabajo Decente y Crecimiento Económico" },
  { value: "ods9", text: "ODS 9 Producción y Consumo Responsable" },
  { value: "ods10", text: "ODS 10 Acción por Clima" },
  { value: "ods11", text: "ODS 11 Vida de Ecosistemas Terrestres" },
  { value: "ods12", text: "ODS 12 Garantizar modalidades de consumo y producción sostenibles" },
  { value: "ods13", text: "ODS 13 Adoptar medidas urgentes para combatir el cambio climático y sus efectos" },
  { value: "ods14", text: "ODS 14 Conservar y utilizar sostenibilemente los océanos, los mares y los recursos marinos" },
  { value: "ods15", text: "ODS 15 Gestionar sosteniblemente los bosques, detener la pérdida de biodiversidad" },
  { value: "ods16", text: "ODS 16 Promover sociedades justas, pacíficas e inclusivas" },
  { value: "ods17", text: "ODS 17 Revitalizar la Alianza Mundial para el Desarrollo Sostenible" },
]

export function ProjectForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectName: "",
      orgName: "",
      ODS: "",
      contact: "",
      responsible: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log("Trying onSubmit")
    setIsLoading(true);

    try {
      const project = {
        projectName: data.projectName,
        orgName: data.orgName,
        ODS: data.ODS,
        contact: data.contact,
        responsible: data.responsible,
      };
      // const newTrash = await createTrash(trash);
      let newProject = await createProject(project);
      // while(!newTrash) {
      //   newTrash = await createTrash(trash);
      // }

      if (newProject) {
        router.push(`/`);
      } else {
        console.log("Hubo un error en al crear project");
      }
    } catch (error) {
      console.log("Hubo un error en onSubmit");
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <Card className="w-[350px] md:w-[450px] lg:w-[650px]">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/assets/images/logo.jpg" width={80} height={80} alt="logo" />
            <span>Comunidad Huella Cero</span>
          </div>
        </CardTitle>
        <CardDescription>Registra los datos sobre el proyecto que deseas subir.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del proyecto</FormLabel>
                  <FormControl>
                    <Input placeholder="El proyecto se llama..." {...field} className="w-full" />
                  </FormControl>
                  <FormDescription>
                    Ingresa el nombre del proyecto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la organización</FormLabel>
                  <FormControl>
                    <Input placeholder="La organización se llama..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el nombre de la organización.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ODS"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecciona una ODS</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Elige una ODS" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((item,i) => (<SelectItem key={i} value={item.value}>{item.text}</SelectItem>))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Escoge una ODS relacionada a tu proyecto.
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
                  <FormLabel>Número de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder="77007700" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa un número de contacto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="responsible"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Responsable del proyecto</FormLabel>
                  <FormControl>
                    <Input placeholder="Carlos S." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el nombre del encargado del proyecto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="flex justify-center">
              <Button variant="lime" type="submit">Enviar</Button>
            </div> */}
            <div className="flex justify-center">
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
            </div>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
