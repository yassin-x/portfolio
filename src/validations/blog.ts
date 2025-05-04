import { z } from "zod";

export const blogSchema = async () => {
  return z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    marker: z.string().min(1, "Description is required"),
    image: z.custom((val) => val instanceof File),
    link: z
      .string()
      .min(1, "Link is required")
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Link must be a valid slug (lowercase letters, numbers, and dashes only)"
      ),
  });
};
export const updateBlogSchema = async () => {
  return z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    marker: z.string().min(1, "Description is required"),
    link: z
      .string()
      .min(1, "Link is required")
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Link must be a valid slug (lowercase letters, numbers, and dashes only)"
      ),
  });
};
