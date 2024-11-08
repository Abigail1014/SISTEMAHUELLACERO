"use server";

import { ID, Query } from "node-appwrite";

import {
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

export const getRecentProjectList = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID!,
      PROJECT_COLLECTION_ID!,
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
