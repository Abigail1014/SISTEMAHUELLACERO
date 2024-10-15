"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import * as React from "react"
import Image from "next/image"
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import { registerOrganization } from "@/lib/actions/organization.actions";
import { useRouter } from "next/navigation";
import { FileUploader } from "../FileUploader"

const FormSchema = z.object({
  organization: z.string().min(2, {
    message: "Por favor introduce un CI válido",
  }),
  socialMedia: z.string().min(2, {
    message: "Descripción no válida.",
  }),
  contact: z.string().min(2, {
    message: "Introduce una dirección válida.",
  }),
  responsible: z.string().min(2, {
    message: "Introduce un contacto válido.",
  }),
  logo: z.custom<File[]>().optional(),
})

export function OrgForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      organization: "",
      socialMedia: "",
      contact: "",
      responsible: "",
      logo: []
    },
  })

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("Enviando onSubmit");
    setIsLoading(true);
    let formData;
    if (
      values.logo &&
      values.logo?.length > 0
    ) {
      const blobFile = new Blob([values.logo[0]], {
        type: values.logo[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.logo[0].name);
    }

    try {
      const organization = {
        organization: values.organization,
        socialMedia: values.socialMedia,
        contact: values.contact,
        responsible: values.responsible,
        logo: values.logo
          ? formData
          : undefined,
      };

      const newOrganization = await registerOrganization(organization);

      if (newOrganization) {
        router.push(`/`);
      }
    } catch (error) {
      console.log("Hubo un error en onSubmit");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-[350px] md:w-[450px] lg:w-[650px]">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/assets/images/logo.jpg" width={80} height={80} alt="logo" />
            <span>Comunidad Huella Cero</span>
          </div>
        </CardTitle>
        <CardDescription>Registra los datos sobre la organización que deseas subir.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la organización</FormLabel>
                  <FormControl>
                    <Input placeholder="La organización se llama..." {...field} className="w-full" />
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
              name="socialMedia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link de alguna red social de tu organización URL:</FormLabel>
                  <FormControl>
                    <Input placeholder="Link..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el link de Facebook o Instagram o Tiktok.
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
                  <FormLabel>Número de contacto del proyecto</FormLabel>
                  <FormControl>
                    <Input placeholder="77007700" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa un número de contacto de la organización.
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
                  <FormLabel>Nombre de contacto responsable</FormLabel>
                  <FormControl>
                    <Input placeholder="Carlos S." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el nombre del contacto responsable.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <FileUploader files={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormDescription>
                    Arratra o sube el logo de la organización.
                  </FormDescription>
                  <FormMessage className="shad-error" />
                </FormItem>
              )}
            />
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
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => { console.log("Mensaje auxiliar") }}>Prueba</Button>
        {/* <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  )
}