"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen p-4 gap-8">
      <section className="text-center w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-4 ml-auto mr-auto rounded-xl">
        <h1 className="text-4xl font-bold">Welcome to Cura</h1>
        <Image
          src="/logo.svg"
          alt="cura logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="text-xl">Your innovative health care app</p>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto flex justify-center">
        <Button
          onClick={() => router.push("/dashboard")}
          className="text-2xl font-bold cursor-pointer"
          variant="default"
        >
          Get Started
        </Button>
      </section>
    </main>
  );
}
