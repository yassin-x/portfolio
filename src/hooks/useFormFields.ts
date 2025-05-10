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

  const projectFields = (): IFormField[] => [
    {
      label: "Id",
      name: "id",
      type: "text",
      readOnly: true,
    },
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
      label: "Website",
      name: "website",
      type: "text",
      placeholder: "Type your blog website here",
    },
    {
      label: "Github",
      name: "github",
      type: "text",
      placeholder: "Type your blog github here",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.Blogs:
        return blogFields();
      case Pages.Projects:
        return projectFields();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
