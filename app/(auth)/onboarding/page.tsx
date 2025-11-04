"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center h-screen gap-y-10">
        <div className="flex flex-col items-center">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
          <h1 className="text-white font-[Nunito Sans]">
            What would you want to use CURA for ?
          </h1>
        </div>
        <div className="w-full px-4 gap-y-5 flex flex-col">
          <button
            onClick={() => router.push("/treatment")}
            className="text-white bg-[#D9D9D921] px-6 w-full border font-[bold] text-[16px] border-[#4006FF] py-4 rounded-2xl "
          >
            Treatment
          </button>
          <button
            onClick={() => router.push("/precaution")}
            className="text-white bg-[#D9D9D921] px-6 w-full border font-[bold] text-[16px] border-[#4006FF] py-4 rounded-2xl "
          >
            Precaution
          </button>
        </div>
      </div>
    </section>
  );
}
