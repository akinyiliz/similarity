"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";
// import toast from "react-hot-toast";

interface SignInButtonProps {}

const SignInButton: React.FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try again later.",
      //   type: "error",
      // });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
