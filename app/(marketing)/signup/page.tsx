"use client";

import MyContainer from "../components/share/MyContainer";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleSignIn = async (role: string) => {
    // Store role in cookie before signing in
    document.cookie = `pendingUserRole=${role}; path=/; max-age=300`;

    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <MyContainer className="flex gap-10 p-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Student</h2>
        <button
          onClick={() => handleGoogleSignIn("student")}
          className="bg-amber-500 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-amber-600 transition"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Tutor</h2>
        <button
          onClick={() => handleGoogleSignIn("tutor")}
          className="bg-green-500 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-green-600 transition"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
    </MyContainer>
  );
}