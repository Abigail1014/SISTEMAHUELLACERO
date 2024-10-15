"use server";

import { ID } from "node-appwrite";

import {
  TRASH_COLLECTION_ID,
  DATABASE_ID,
  databases,
  PROJECT_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createProject = async (
  project: CreateProjectParams
) => {
  try {
    const newProject = await databases.createDocument(
      DATABASE_ID!,
      PROJECT_COLLECTION_ID!,
      ID.unique(),
      project
    );

    // revalidatePath("/");
    return parseStringify(newProject);
  } catch (error) {
    console.error("An error occurred while creating a new trash:", error);
  }
};