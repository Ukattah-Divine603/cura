"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <section className="lg:mx-100  flex flex-col justify-center lg:h-screen ">
      <header className="relative flex items-center py-4 text-white px-4">
        <button onClick={() => router.back()} className="absolute left-4">
          <ArrowLeft className="h-10 w-10 p-2 bg-[#4006FF] rounded-full" />
        </button>
        <h1 className="mx-auto text-2xl font-bold text-center">Treatment</h1>
      </header>

      <h1 className="p-5 my-6 px-6 outline outline-[#4006FF]  mx-4 rounded-2xl  text-white text-center">
        Please Fill In Your Details Here
      </h1>
      <fieldset>
        <form className="flex flex-col gap-y-4 px-4 text-white relative">
          <label className="pl-2">Name</label>
          <input
            className="py-4 px-4 bg-[#D9D9D921] rounded-2xl outline outline-[#4006FF] onfocus:outline-none "
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          <label className="pl-2">Email</label>
          <input
            className="py-4 px-4 bg-[#D9D9D921] rounded-2xl outline outline-[#4006FF] "
            type="email"
            id="email"
            placeholder="Enter your email"
          />
          <label className="pl-2">Password</label>
          <input
            className="py-4 px-4 bg-[#D9D9D921] rounded-2xl outline outline-[#4006FF] "
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-[#4006FF] text-white px-6 py-5 rounded-2xl"
          />
        </form>
      </fieldset>
    </section>
  );
}
