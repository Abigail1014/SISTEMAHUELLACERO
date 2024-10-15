"use server";

import { ID } from "node-appwrite";

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

export const prueba = async () => {
  const trash ={
    ci: "data.ci",
    description: "data.description",
    address: "data.address",
    contact: "data.contact",
    city: "data.city",
  }
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
}