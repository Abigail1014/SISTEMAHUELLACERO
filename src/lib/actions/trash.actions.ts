"use server";

import { ID, Query } from "node-appwrite";

import {
  TRASH_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createTrash = async (
  trash: CreateTrashParams
) => {
  try {
    const newTrash = await databases.createDocument(
      DATABASE_ID!,
      TRASH_COLLECTION_ID!,
      ID.unique(),
      trash
    );

    // revalidatePath("/");
    return parseStringify(newTrash);
  } catch (error) {
    console.error("An error occurred while creating a new trash:", error);
  }
};

export const getRecentTrashList = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID!,
      TRASH_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    return parseStringify(data.documents);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the recent trash tables:",
      error
    );
  }
};

// Editar un formulario
export async function updateTrash(documentId: string, data: CreateTrashParams, userId: string, userRole: string) {
  try {
    // Obtener el documento original para verificar permisos
    const existingDoc = await databases.getDocument(DATABASE_ID!, TRASH_COLLECTION_ID!, documentId);

    if (existingDoc.userId !== userId && userRole !== "admin") {
      throw new Error("No tienes permiso para editar este formulario.");
    }

    const response = await databases.updateDocument(DATABASE_ID!, TRASH_COLLECTION_ID!, documentId, data);
    return response;
  } catch (error) {
    console.error("Error al editar el formulario:", error);
    throw error;
  }
}

// Eliminar un formulario
export async function deleteTrash(documentId: string, userId: string, userRole: string) {
  try {
    // Obtener el documento original para verificar permisos
    const existingDoc = await databases.getDocument(DATABASE_ID!, TRASH_COLLECTION_ID!, documentId);

    if (existingDoc.userId !== userId && userRole !== "admin") {
      throw new Error("No tienes permiso para eliminar este formulario.");
    }

    await databases.deleteDocument(DATABASE_ID!, TRASH_COLLECTION_ID!, documentId);
    return true;
  } catch (error) {
    console.error("Error al eliminar el formulario:", error);
    throw error;
  }
}