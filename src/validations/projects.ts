import { z } from "zod";

export const projectSchema = async () => {
  return z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.custom((val) => val instanceof File),
    website: z.string().optional(),
    github: z.string().optional(),
  });
};

export const updateProjectSchema = async () => {
  return z.object({
    id: z.string().min(1, "Project id is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    website: z.string().optional(),
    github: z.string().optional(),
  });
};
