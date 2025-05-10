"use client";

import { Pages, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { Projects } from "@prisma/client";
import React, { useActionState, useEffect } from "react";
import { updateProject } from "../../../_actions/projects";
import { IFormField, initialState } from "@/types/app";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import FormFields from "@/components/FormFields/FormFields";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function Form({ data }: { data: Projects }) {
  const { getFormFields } = useFormFields({ slug: Pages.Projects });
  const [state, action, pending] = useActionState(updateProject, initialState);
  const router = useRouter();
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  useEffect(() => {
    if (state.message && state.status && !pending) {
      toast(state.message);
    }
  }, [pending, state.message, state.status]);

  useEffect(() => {
    if (state.status === 200) {
      router.replace(`/${Routes.Admin}/${Pages.Projects}`);
    }
  }, [state.status, router]);

  return (
    <form className="w-full" action={action}>
      <div className="w-full h-[300px] overflow-hidden rounded-lg mx-auto mb-4">
        <Image
          src={data.image}
          alt={data.title}
          width={980}
          height={1080}
          className="w-full h-[300px] object-cover"
        />
      </div>
      {getFormFields().map((field: IFormField) => {
        const fieldValue =
          state?.formData?.get(field.name) ?? formData.get(field.name);
        return (
          <div key={field.name} className="mb-4">
            <FormFields
              {...field}
              error={state.error}
              defaultValue={fieldValue as string}
            />
          </div>
        );
      })}
      <Button type={"submit"} disabled={pending} className="w-full">
        {pending ? <LoaderIcon className="animate-spin w-4 h-4" /> : "Submit"}
      </Button>
    </form>
  );
}
