"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";

const {
    APPWRITE_DATABASE_ID: DATABASE_ID,
    VITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
    VITE_STORE_FOR_USERS_COLLECTION_ID: STORE_COLLECTION_ID,
  } = process.env;

  export const signUp = async ({ email, password }: SignUpParams) => {

    let newUserAccount;

    try {
      const { account, database } = await createAdminClient();

      newUserAccount = await account.create(ID.unique(), email, password);
  
      if (!newUserAccount) throw new Error('error creating user');
  
      const newUser = await database.createDocument(
        DATABASE_ID!,
        USER_COLLECTION_ID!,
        ID.unique(),
        {
         email: email,
         password: password,
         userId: newUserAccount.$id
        }
      )
  
      const session = await account.createEmailPasswordSession(email, password);
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });

      console.log("sign-up")
      return parseStringify(newUser);
    } catch (error) {
      console.log(error)
    }
  }