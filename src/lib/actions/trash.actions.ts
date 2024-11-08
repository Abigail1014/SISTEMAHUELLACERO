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