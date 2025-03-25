import { useUser, useAuth } from "@clerk/clerk-react";

export const useAuthUser = () => {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  return {
    isSignedIn,
    user,
    getToken,
  };
};
