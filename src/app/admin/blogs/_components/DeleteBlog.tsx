"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { deleteBlog } from "../_actions/blogs";
import { toast } from "sonner";

export default function DeleteBlog({ blogId }: { blogId: string }) {
  const [state, setState] = useState<{
    pending: boolean;
    status: null | number;
    message: string;
  }>({
    pending: false,
    status: null,
    message: "",
  });

  const handleDelete = async (id: string) => {
    try {
      setState((prev) => {
        return { ...prev, pending: true };
      });
      const res = await deleteBlog(id);
      setState((prev) => {
        return { ...prev, status: res.status, message: res.message };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setState((prev) => {
        return { ...prev, pending: false };
      });
    }
  };

  useEffect(() => {
    if (state.message && state.status && !state.pending) {
      toast(state.message);
    }
  }, [state.pending, state.message, state.status]);
  return (
    <Button
      variant={"destructive"}
      type="button"
      onClick={() => handleDelete(blogId)}
    >
      <TrashIcon />
    </Button>
  );
}
