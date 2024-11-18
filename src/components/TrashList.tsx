"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteTrash } from "@/lib/actions/trash.actions";
import { Button } from "@/components/ui/button";

type TrashItem = {
  id: string;
  ci: string;
  description: string;
  address: string;
  contact: string;
  city: string;
  userId: string;
};

export function TrashList({ trashItems, currentUserId, currentUserRole }: { 
  trashItems: TrashItem[]; 
  currentUserId: string; 
  currentUserRole: string; 
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("¿Estás seguro de que deseas eliminar este formulario?");
    if (!confirm) return;

    setIsDeleting(true);
    try {
      await deleteTrash(id, currentUserId, currentUserRole);
      router.refresh(); // Refresca la página para actualizar la lista
    } catch (error) {
      console.error("Error al eliminar el formulario:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-2xl mb-4">Basura</h2>
      <div className="space-y-4 grid grid-cols-5">
        {trashItems.map((item) => (
          <div key={item.id} className="p-4 border rounded-md shadow-sm space-y-2">
            <p><strong>CI:</strong> {item.ci}</p>
            <p><strong>Descripción:</strong> {item.description}</p>
            <p><strong>Dirección:</strong> {item.address}</p>
            <p><strong>Contacto:</strong> {item.contact}</p>
            <p><strong>Ciudad:</strong> {item.city}</p>
            {item.userId === currentUserId || currentUserRole === "admin" ? (
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => router.push(`/edit/${item.id}`)}>
                  Editar
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(item.id)} disabled={isDeleting}>
                  {isDeleting ? "Eliminando..." : "Eliminar"}
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
