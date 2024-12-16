import { authenticateUser } from "@/_lib/actions";
import { signInDataType, signInReturnType } from "@/_validation/SignIn";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useSubmitSignInForm = () => {
  // init queryClient
  const queryClient = useQueryClient();

  // mutation to submit sign in form
  return useMutation({
    mutationKey: ["getAuthorizedUser"],
    mutationFn: (values: signInDataType) => {
      return authenticateUser(values);
    },
    onSuccess: (data) => {
      if ("user" in data && Array.isArray(data.user)) {
        queryClient.invalidateQueries({ queryKey: ["getAuthorizedUser"] });
      }
    },
  });
};
