"use server";

import { Pages, Routes } from "@/constants/enums";
import { db } from "@/lib/prisma";
import { deleteCloudinaryImage, getImageUrl } from "@/server/db/cloudinary";
import { projectSchema, updateProjectSchema } from "@/validations/projects";
import { revalidatePath } from "next/cache";

export const newProject = async (prevState: unknown, formData: FormData) => {
  const result = (await projectSchema()).safeParse(
    Object.fromEntries(formData.entries())
  );
  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      formData: formData,
      status: 400,
    };
  }
  try {
    const imageURL = await getImageUrl(result.data.image, "projects");
    await db.projects.create({
      data: {
        title: result.data.title,
        description: result.data.description,
        image: imageURL!,
        website: result.data.website || "",
        github: result.data.github || "",
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Projects}`);
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Projects}`);

    return {
      status: 201,
      message: "Project created successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const updateProject = async (prevState: unknown, formData: FormData) => {
  const result = (await updateProjectSchema()).safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      formData: formData,
      status: 400,
    };
  }

  try {
    const project = await db.projects.findUnique({
      where: {
        id: result.data.id,
      },
    });

    if (!project) {
      return {
        message: "Project not found",
        status: 404,
      };
    }

    await db.projects.update({
      where: {
        id: result.data.id,
      },
      data: {
        title: result.data.title,
        description: result.data.description,
        website: result.data.website,
        github: result.data.github,
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Projects}`);
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Projects}`);

    return {
      status: 200,
      message: "Project updated successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const deleteProject = async (id: string) => {
  try {
    const project = await db.projects.findUnique({
      where: {
        id: id,
      }
    });

    const imageId = project?.image.split("/").pop()?.split(".")[0];
    await deleteCloudinaryImage(imageId!, "projects");

    await db.projects.delete({
      where: {
        id: id,
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Projects}`);
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Projects}`);

    return {
      status: 200,
      message: "Project deleted successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}