import { stepsProps } from "@/components/SignUp/Steps";
import { IError } from "./types/SignupTypes";
import { signInReturnType } from "@/_validation/SignIn";

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
      value.join(" "),
    ])
  );
};

export const transformedSignInErrorObject = (
  originalErrorObject: signInReturnType
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

// export const completeUserSignUp = (data: signInReturnType) => {

// switch (data.user?.[0]?.step) {
//           case "information":
//             dispatch(jumpStep(1));
//             router.push("/signup/business");
//             break;
//           case "adresse":
//             dispatch(jumpStep(2));
//             router.push("/signup/business");
//             break;
//           case "actionnaire":
//             dispatch(jumpStep(3));
//             router.push("/signup/business");
//             break;
//           case "legal":
//             dispatch(jumpStep(4));
//             router.push("/signup/business");
//             break;
//           case "valide":
//             dispatch(jumpStep(5));
//             router.push("/signup/business");
//             break;
//           default:
//             router.push("/signin/get-otp");
//         }
//       }
