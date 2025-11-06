"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Precaution() {
  const router = useRouter();
  return (
    <section className="lg:mx-100  flex flex-col justify-center lg:h-fit p-4 ">
      <header className="relative flex items-center py-4 text-white px-4">
        <button onClick={() => router.back()} className="absolute left-4">
          <ArrowLeft className="h-10 w-10 p-2 bg-[#4006FF] rounded-full" />
        </button>
        <h1 className="mx-auto text-2xl font-bold text-center">Precaution</h1>
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

          <label className="pl-2">Age</label>
          <input
            className="py-4 px-4 bg-[#D9D9D921] rounded-2xl outline outline-[#4006FF] onfocus:outline-none "
            type="text"
            id="name"
            placeholder="Enter Your Age"
          />

          <label className="pl-2">Symptomps Experienced</label>
          <input
            className="py-4 px-4 bg-[#D9D9D921] rounded-2xl outline outline-[#4006FF] onfocus:outline-none "
            type="text"
            id="name"
            placeholder="Enter symptoms experienced"
          />

          <p className="pl-2">How Often Have You Noticed The Stated Symptoms</p>
          <label className="flex flex-col items-left justify-center gap-2 cursor-pointer pl-2">
            {/* --------------------------------------------------------------------------------------------------------- */}

            <div className="flex flex-row items-center justify-left gap-2">
              <input
                type="radio"
                name="frequency"
                className="appearance-none w-4 h-4 rounded-full border-2 border-[#4006FF] checked:bg-[#4006FF]"
              />
              <p className="text-white text-[1.5rem]">Daily</p>
            </div>

            {/* --------------------------------------------------------------------------------------------------------- */}

            <div className="flex flex-row items-center justify-left gap-2">
              <input
                type="radio"
                name="frequency"
                className="appearance-none w-4 h-4 rounded-full border-2 border-[#4006FF] checked:bg-[#4006FF]"
              />
              <p className="text-white text-[1.5rem]">Weekly</p>
            </div>

            {/* --------------------------------------------------------------------------------------------------------- */}

            <div className="flex flex-row items-center justify-left gap-2">
              <input
                type="radio"
                name="frequency"
                className="appearance-none w-4 h-4 rounded-full border-2 border-[#4006FF] checked:bg-[#4006FF]"
              />
              <p className="text-white text-[1.5rem]">Monthly</p>
            </div>

            {/* --------------------------------------------------------------------------------------------------------- */}

            <div className="flex flex-row items-center justify-left gap-2">
              <input
                type="radio"
                name="frequency"
                className="appearance-none w-4 h-4 rounded-full border-2 border-[#4006FF] checked:bg-[#4006FF]"
              />
              <p className="text-white text-[1.5rem]">Rarely</p>
            </div>
          </label>

          <input
            type="submit"
            value="Submit"
            className="bg-[#4006FF] text-white px-6 py-5 rounded-2xl cursor-pointer mt-3 mb-3"
          />
        </form>
      </fieldset>
    </section>
  );
}
