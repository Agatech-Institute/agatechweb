import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { auth, signIn } from "@/auth";

export default async function Login() {
     const session = await auth();
      if(session?.user) {
        redirect("/auth/coursereg");
      };

  return (
    <main className="min-h-[calc(100vh-76px)] bg-slate-50 px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative hidden min-h-680px overflow-hidden bg-slate-950 lg:block">
          <Image
            src="/coding.jpg"
            alt="A student learning to code"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 0px"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950/65 to-teal-950/70" />
          <div className="relative flex h-full flex-col justify-between p-10 xl:p-12">
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-agatech-primarybg text-lg font-bold">A</span>
              <span className="text-xl font-bold tracking-tight">Agatech</span>
            </Link>
            <div>
              <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                <span className="h-px w-8 bg-amber-300" /> Welcome back
              </p>
              <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-white xl:text-5xl">
                Keep building the future.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                Continue your learning journey with practical skills, real projects, and a community that believes in your potential.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center p-7 sm:p-12 lg:p-14 xl:p-20">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-9 lg:hidden">
              <Link href="/" className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-slate-950">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-agatech-primarybg text-lg text-white">A</span>
                Agatech
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agatech-primarybg">Student portal</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Sign in to Agatech</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">Choose a provider to continue your learning journey.</p>
            </div>

           <form >
             <div className="mt-8 space-y-3">
              <button onClick={async () => {
            "use server"
            await signIn("google")
           }} type="button" className="inline-flex h-13 w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-agatech-primarybg hover:shadow-sm">
                <FaGoogle className="text-[#4285F4]" aria-hidden="true" />
                Continue with Google
              </button>
              {/* <button type="button" className="inline-flex h-13 w-full items-center justify-center gap-3 rounded-lg border border-slate-900 bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-agatech-primarybg hover:shadow-sm">
                <FaGithub className="text-lg" aria-hidden="true" />
                Continue with GitHub
              </button> */}
            </div>
           </form>
          </div>
        </section>
      </div>
    </main>
  );
  
}