"use client";
import FormFields from "@/components/FormFields/FormFields";
import { Button } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { IFormField, initialState } from "@/types/app";
import { CameraIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useEffect, useState } from "react";
import { newBlog } from "../../_actions/blogs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Form() {
  const { getFormFields } = useFormFields({ slug: Pages.Blogs });
  const [selectedImage, setSelectedImage] = useState("");
  const router = useRouter();
  const [state, action, pending] = useActionState(newBlog, initialState);
  useEffect(() => {
    if (state.message && state.status && !pending) {
      toast(state.message);
    }
  }, [pending, state.message, state.status]);

  useEffect(() => {
    if (state.status === 201) {
      router.replace(`/${Routes.Admin}/${Pages.Blogs}`);
    }
  }, [state.status, router]);

  return (
    <form className="w-full" action={action}>
      <div className="group relative w-full h-[200px] overflow-hidden rounded-lg mx-auto mb-4">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={"image"}
            fill
            className="rounded-lg object-cover"
          />
        )}
        <div
          className={`${
            selectedImage
              ? "group-hover:opacity-[1] opacity-0  transition-opacity duration-200"
              : ""
          } absolute top-0 left-0 w-full h-full bg-black/40`}
        >
          <UploadImage
            setSelectedImageF={setSelectedImage}
            className={`w-full h-[200px] rounded-lg border`}
            name="image"
          />
        </div>
      </div>
      {getFormFields().map((field: IFormField) => {
        return (
          <div key={field.name} className="mb-4">
            <FormFields {...field} error={state.error} />
          </div>
        );
      })}
      <Button type={"submit"} disabled={pending} className="w-full">
        {pending ? <LoaderIcon className="animate-spin w-4 h-4" /> : "Submit"}
      </Button>
    </form>
  );
}

const UploadImage = ({
  setSelectedImageF,
  className,
  name,
}: {
  setSelectedImageF: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  name: string;
}) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImageF(url);
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={name}
        onChange={handleImageChange}
        name={name}
      />
      <label
        htmlFor={name}
        className={`${
          className ? className : "border rounded-full w-full h-[200px]"
        } element-center cursor-pointer`}
      >
        <CameraIcon className="!w-8 !h-8 text-accent" />
      </label>
    </>
  );
};
