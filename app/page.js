"use-client"
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/bg.png')] h-[40vh] bg-contain bg-no-repeat md:bg-[url('/bg.png')] md:bg-cover md:bg-center md:bg-no-repeat md:bg-fixed relative flex items-center justify-center min-h-96 md:min-h-[400px] lg:min-h-screen">
        <div className="bg-blue-950 bg-opacity-80 w-full py-16 px-4 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold">
            Empowering the Next Generation of Global Innovators
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-40 px-4 md:px-6 lg:px-24 mt-10 md:mt-16 lg:mt-20 mb-6">
        {/* <h1 className="text-center text-5xl text-blue-900">EXPLORE COURSES</h1> */}
        <Link href="/auth/courses">
          <Button title="EXPLORE PROGRAMS" />
        </Link>
        <Link href="/auth/careers">
          <Button  title="START A CAREER" />
        </Link>
        <Link href="/auth/careers">
          <Button title="VIRTUAL SCHOOL" />
        </Link>
      </div>
    </main>
  );
}
