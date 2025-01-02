import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form";
import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../input";
import { Textarea } from "../../textarea";

interface ICustomInputProps<T extends z.ZodType<any, any>> {
  label: string;
  placeholder: string;
  type?: string;
  description?: string;
  field: ControllerRenderProps<z.infer<T>>;
  variant?: "default" | "textarea";
  row?: number;
  error: any;
}

const CustomInput = <T extends z.ZodType<any, any>>({
  label,
  placeholder,
  type = "text",
  description,
  field,
  row = 10,
  variant = "default",
  error: errorResponse,
}: ICustomInputProps<T>) => {
  return (
    <FormItem>
      <FormLabel className="text-[12px] leading-6">{label}</FormLabel>
      {description && (
        <FormDescription className="text-xs font-light tracking-wider leading-4">
          {description}
        </FormDescription>
      )}
      <FormControl>
        {variant === "textarea" ? (
          <Textarea
            placeholder={placeholder}
            rows={row}
            {...field}
            className="input pr-20"
          />
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
            {...field}
          />
        )}
      </FormControl>
      {field.name in errorResponse ? (
        <small className="text-xs text-red-600 align-right">
          {errorResponse[field.name] as string}
        </small>
      ) : (
        <FormMessage className="text-xs font-normal leading-6 text-red-700" />
      )}{" "}
    </FormItem>
  );
};

export default CustomInput;
