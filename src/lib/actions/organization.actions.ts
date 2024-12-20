"use server";

import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  ORGANIZATION_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
} from "../appwrite.config";
import {parseStringify } from "../utils";

// REGISTER ORG
export const registerOrganization = async ({
  logo,
  ...organization
}: RegisterOrganizationParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (logo) {
      const inputFile =
        logo &&
        InputFile.fromBuffer(
          logo?.get("blobFile") as Blob,
          logo?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newOrganization = await databases.createDocument(
      DATABASE_ID!,
      ORGANIZATION_COLLECTION_ID!,
      ID.unique(),
      {
        logoId: file?.$id ? file.$id : null,
        logoUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...organization,
      }
    );

    return parseStringify(newOrganization);
  } catch (error) {
    console.error("An error occurred while creating a new organization:", error);
    
  }
};

export const getRecentOrganizationList = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID!,
      ORGANIZATION_COLLECTION_ID!,
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