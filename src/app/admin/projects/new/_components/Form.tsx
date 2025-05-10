"use client";
import React, { useActionState, useEffect, useState } from "react";
import useFormFields from "@/hooks/useFormFields";
import { Pages, Routes } from "@/constants/enums";
import FormFields from "@/components/FormFields/FormFields";
import { IFormField } from "@/types/app";
import Image from "next/image";
import { CameraIcon, LoaderIcon } from "lucide-react";
import { newProject } from "../../_actions/projects";
import { initialState } from "@/types/app";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Form() {
  const { getFormFields } = useFormFields({ slug: Pages.Projects });
  const [selectedImage, setSelectedImage] = useState("");
  const [state, action, pending] = useActionState(newProject, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message && state.status && !pending) {
      toast(state.message);
    }
  }, [pending, state.message, state.status]);

  useEffect(() => {
    if (state.status === 201) {
      router.replace(`/${Routes.Admin}/${Pages.Projects}`);
    }
  }, [state.status, router]);

  return (
    <form className="w-full" action={action}>
      <div className="group relative w-full h-[300px] overflow-hidden rounded-lg mx-auto mb-4">
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
            className={`w-full h-[300px] rounded-lg border`}
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
          className ? className : "border rounded-full w-full h-[300px]"
        } element-center cursor-pointer`}
      >
        <CameraIcon className="!w-8 !h-8 text-accent" />
      </label>
    </>
  );
};
