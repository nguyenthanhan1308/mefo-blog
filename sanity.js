import {createImageUrlBuilder, createCurrentUserHook, createClient} from "next-sanity";

export const config ={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    apiVersion: "2022-05-22",
    useCdn: process.env.NODE_ENV === "production",
}