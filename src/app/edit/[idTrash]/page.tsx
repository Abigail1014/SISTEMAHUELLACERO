"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TrashForm } from "@/components/form/TrashForm";
import { updateTrash } from "@/lib/actions/trash.actions";
import { databases } from "@/lib/appwrite.config";

const EditTrash = ({ params }: { params: { id: string } }) => {
  const DATABASE_ID = process.env.DATABASE_ID!;
  const COLLECTION_ID = process.env.TRASH_COLLECTION_ID!;
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFormData = async () => {
    try {
      const document = await databases.getDocument(DATABASE_ID, COLLECTION_ID, params.id);
      console.log(document)
      setFormData(document);
    } catch (error) {
      console.error("Error al obtener datos del formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const handleSubmit = async (data: any) => {
    try {
      await updateTrash(params.id, data, "currentUserId", "currentUserRole");
      router.push("/");
    } catch (error) {
      console.error("Error al actualizar el formulario:", error);
    }
  };

  if (isLoading) return <p>Cargando...</p>;
  if (!formData) return <p>Error al cargar datos.</p>;

  return <TrashForm initialData={formData} onSubmit={handleSubmit} />;
};

export default EditTrash;
