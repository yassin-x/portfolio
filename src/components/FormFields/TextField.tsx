import { IFormField, ValidationErrors } from "@/types/app";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Props extends IFormField {
  error: ValidationErrors;
}

export default function TextField({
  label,
  name,
  type,
  placeholder,
  disabled,
  autoFocus,
  error,
  defaultValue,
  readOnly,
}: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize text-muted-foreground mb-2">
        {label}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        id={name}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className="focus:!ring-0"
      />
      {error && error[name] && (
        <p
          className={`text-muted-foreground mt-2 text-sm font-medium ${
            error[name] ? "text-destructive" : ""
          }`}
        >
          {error[name]}
        </p>
      )}
    
    </div>
  );
}
