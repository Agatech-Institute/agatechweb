import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const programs = [
    {
      title: "Web development",
      description: "Build modern digital products from the first line of code to launch day.",
      image: "/WEB.png",
      accent: "bg-amber-50",
    },
    {
      title: "Data & AI",
      description: "Turn complex questions into useful insights, intelligent tools, and better decisions.",
      image: "/AI.png",
      accent: "bg-amber-50",
    },
    {
      title: "Product design",
      description: "Shape clear, human experiences that people enjoy using and remember.",
      image: "/UI.png",
      accent: "bg-amber-50",
    },
  ];

  return (
    <main className="overflow-hidden bg-slate-50">
      <section className="relative isolate min-h-620px overflow-hidden bg-slate-950">
        <Image
          src="/classroom.jpg"
          alt="Students learning together in an Agatech classroom"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/75 to-slate-950/15" />
        <div className="relative mx-auto flex min-h-620px max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              <span className="h-px w-10 bg-amber-300" /> Learn what is next
            </p>
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Skills that move your future forward.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Learn practical technology skills with mentors, real projects, and a community that keeps you moving.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/courses"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Explore programs 
              </Link>
              <Link
                href="/auth/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Meet Agatech
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-sm text-slate-300">
              <span><strong className="text-white">5+</strong> career paths</span>
              <span><strong className="text-white">100%</strong> practical learning</span>
               <span><strong className="text-white">100%</strong> real life projects</span>
              <span><strong className="text-white">1</strong> community</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-agatech-primarybg">Choose your direction</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Learn skills with momentum.</h2>
          </div>
          <Link href="/auth/courses" className="text-sm font-bold text-slate-700 transition hover:text-agatech-primarybg">View all programs</Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Link key={program.title} href="/auth/courses" className={`group overflow-hidden rounded-2xl ${program.accent} shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
              <div className="relative aspect-4/3 overflow-hidden bg-white">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-agatech-primarybg">Explore path </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Your next chapter starts here</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950">Turn curiosity into a career you can be proud of.</h2>
          </div>
          <Link href="/auth/coursereg" className="inline-flex w-fit items-center rounded-lg bg-agatech-primarybg px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-800">Start learning today </Link>
        </div>
      </section>
    </main>
  );
}
