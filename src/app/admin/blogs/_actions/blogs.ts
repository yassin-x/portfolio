"use server";

import { Pages, Routes } from "@/constants/enums";
import { db } from "@/lib/prisma";
import { deleteCloudinaryImage, getImageUrl } from "@/server/db/cloudinary";
import { blogSchema, updateBlogSchema } from "@/validations/blog";
import { revalidatePath } from "next/cache";

export const newBlog = async (prevState: unknown, formData: FormData) => {
  const result = (await blogSchema()).safeParse(
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
    const isValidLink = await db.blogs.findUnique({
      where: {
        link: result.data.link,
      },
    });
    if (isValidLink) {
      return {
        message: "Link already exists",
        status: 400,
      };
    }

    const imageURL = await getImageUrl(result.data.image, "blogs");

    const blog = await db.blogs.create({
      data: {
        title: result.data.title,
        description: result.data.description,
        marker: result.data.marker,
        image: imageURL!,
        link: result.data.link,
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Blogs}`);
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Blogs}`);
    revalidatePath(`/${Pages.Blogs}/${blog.link}`);

    return {
      status: 201,
      message: "Blog created successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const updateBlog = async (prevState: unknown, formData: FormData) => {
  const result = (await updateBlogSchema()).safeParse(
    Object.fromEntries(formData)
  );

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      formData: formData,
    };
  }
  try {
    const dbBlog = await db.blogs.findUnique({
      where: {
        link: result.data.link,
      },
    });

    if (!dbBlog) {
      return {
        message: "Blog not found",
        status: 404,
      };
    }

    const blog = await db.blogs.update({
      where: {
        link: result.data.link,
      },
      data: {
        title: result.data.title,
        description: result.data.description,
        marker: result.data.marker,
        link: result.data.link,
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Blogs}`);
    revalidatePath(
      `/${Routes.Admin}/${Pages.Blogs}/${Pages.Edit}/${blog.link}`
    );
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Blogs}`);
    revalidatePath(`/${Pages.Blogs}/${blog.link}`);

    return {
      status: 200,
      message: "Blog updated successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const dbBlog = await db.blogs.findUnique({
      where: {
        id: id,
      },
    });

    const imageId = dbBlog?.image.split("/").pop()?.split(".")[0];
    await deleteCloudinaryImage(imageId!, "blogs");

    await db.blogs.delete({
      where: {
        id: id,
      },
    });

    revalidatePath(`/${Routes.Admin}/${Pages.Blogs}`);
    revalidatePath(
      `/${Routes.Admin}/${Pages.Blogs}/${Pages.Edit}/${dbBlog?.link}`
    );
    revalidatePath(`/`);
    revalidatePath(`/${Pages.Blogs}`);
    revalidatePath(`/${Pages.Blogs}/${dbBlog?.link}`);

    return {
      status: 200,
      message: "Blog deleted successfully",
    };
  } catch {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};
