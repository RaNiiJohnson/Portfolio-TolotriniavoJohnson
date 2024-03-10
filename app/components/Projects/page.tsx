import { Code2, Link2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="py-16" id="projets">
      <h1 className="text-xl font-bold uppercase sm:text-3xl">
        Projets séléctionnés
      </h1>
      <div className="flex items-center justify-between p-4 mt-4 rounded-lg bg-slate-800 sm:flex-row">
        <section>
          <h1 className="mb-1 text-base font-semibold sm:text-xl">
            DevDialogue
            <span className="text-xs font-thin opacity-80">(2024)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            C&apos; est un projet inspiré de Stack Overflow où les utilisateurs
            peuvent poser des questions, répondre à celles des autres, voter
            pour les meilleures réponses.
          </div>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-5">
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              Next.js
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 bg-blue-600 rounded-full "></span>
              <span>TypeScript</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              TailwindCSS
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>Prisma</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Shadcn/ui</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              <span>Postgres</span>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href="https://devdialogue-project.vercel.app/"
            className="px-2 py-1 ml-1 transition-all rounded-lg cursor-pointer bg-slate-700 sm:py-2 sm:px-4 hover:bg-cyan-700"
          >
            <Link2 />
          </Link>
          <Link
            href="https://github.com/RaNiiJohnson/DevDialogue-NextJS-Project"
            target="_blank"
            className="px-2 py-1 ml-1 transition-all rounded-lg cursor-pointer bg-slate-700 sm:py-2 sm:px-4 hover:bg-blue-600"
          >
            <Code2 />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 mt-4 rounded-lg bg-slate-800 sm:flex-row">
        <section>
          <h1 className="mb-1 text-base font-semibold sm:text-xl">
            Threads-clone-yeah
            <span className="text-xs font-thin opacity-80 ">(2024)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            Clone de Threads
          </div>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-5">
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              Next.js
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 bg-blue-600 rounded-full "></span>
              <span>TypeScript</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              TailwindCSS
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>Prisma</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              <span>Postgres</span>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href="https://threads-clone-yeah.vercel.app/"
            className="px-2 py-1 ml-1 transition-all rounded-lg cursor-pointer bg-slate-700 sm:py-2 sm:px-4 hover:bg-cyan-700"
          >
            <Link2 />
          </Link>
          <Link
            href="https://github.com/RaNiiJohnson/threads-clone-yeah"
            className="px-2 py-1 ml-1 transition-all rounded-lg cursor-pointer bg-slate-700 sm:py-2 sm:px-4 hover:bg-blue-600"
          >
            <Code2 />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 mt-4 rounded-lg bg-slate-800 sm:flex-row">
        <section>
          <h1 className="mb-1 text-base font-semibold sm:text-xl">
            BLOG-NOTE
            <span className="text-xs font-thin opacity-80 ">(2023)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            Un mini reseau social qui permet aux utilisateurs de partager divers
            contenus, agrémentés de photos, on peut le liker, commenter, on peut
            suivre les autres utilisateurs.
          </div>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-5">
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>React
            </div>
            <div className="flex flex-row items-center gap-1 text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>NodeJS
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>ExpressJS</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-xs ">
              <span className="w-2 h-2 bg-green-300 rounded-full "></span>
              <span>MongoDB</span>
            </div>
          </div>
        </section>
        <Link
          href="https://github.com/RaNiiJohnson/MERN-Blog-Note"
          target="_blank"
          className="px-2 py-1 transition-all rounded-lg cursor-pointer bg-slate-700 sm:py-2 sm:px-4 hover:bg-blue-600"
        >
          <Code2 />
        </Link>
      </div>
    </div>
  );
}
