import { Pages } from "@/constants/enums";
import { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const blogFields = (): IFormField[] => [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Type your blog title here",
      required: true,
      autoFocus: true,
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      placeholder: "Type your blog description here",
      required: true,
    },
    {
      label: "Marker",
      name: "marker",
      type: "textarea",
      placeholder: "Type your blog description here",
      required: true,
    },
    {
      label: "Link",
      name: "link",
      type: "text",
      placeholder: "/blogs/link",
      required: true,
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.Blogs:
        return blogFields();

      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
