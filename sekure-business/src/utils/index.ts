import { stepsProps } from "@/components/SignUp/Steps";
import { IError, signUpResponse } from "./types/SignupTypes";
import { signInReturnType } from "@/_validation/SignIn";
import { ICreatedCard } from "@/_data/card";

export const changeStatus = (steps: stepsProps, idx: number) => {
  return steps.steps.map((step) => {
    if (step.number === idx) {
      return {
        ...step,
        completed: true,
      };
    }
  });
};

export const transformedErrorObject = (originalErrorObject: IError) => {
  return Object.fromEntries(
    Object.entries(originalErrorObject["error : "]).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join(" ") : value,
    ])
  );
};

export const transformedSignInErrorObject = (
  originalErrorObject: Partial<signInReturnType>
) => {
  if (!originalErrorObject.errors) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(originalErrorObject.errors).map(([key, value]) => [
      key,
      value.join(" "),
    ])
  );
};

export const transformedSignUpErrorObject = (
  originalErrorObject: Partial<signUpResponse>
) => {
  if (!originalErrorObject.errors) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(originalErrorObject).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join(" ") : value,
    ])
  );
};

export const transformedGenericErrorObject = (
  originalErrorObject: Partial<ICreatedCard>
) => {
  if (!originalErrorObject.error) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(originalErrorObject).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join(" ") : value,
    ])
  );
};

export const generateRandomCode = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
};

export function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

export const convertFileToBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const formatDate = (date: string) => {
  const day = new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
  });
  const month = new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
  });
  const year = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
  });

  const time = new Date(date).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} / ${month} / ${year}, - ${time}`;
};
