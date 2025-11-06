"use client";
import { supabase } from "../../lib/subabase";

export default function GoogleLogin() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button
      className="cursor-pointer flex flex-row items-center justify-center gap-2 bg-[#3711b350] border-2 border-[#4006FF] p-7 w-full h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
      onClick={signInWithGoogle}
    >
      <img className="w-5 " src="/google.jpg" alt="google logo" />
      Continue with Google
    </button>
  );
}
