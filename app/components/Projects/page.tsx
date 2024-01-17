import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="py-16" id="projets">
      <h1 className="font-bold sm:text-3xl text-xl uppercase">
        Projets séléctionnés
      </h1>
      <div className="bg-slate-800 flex  sm:flex-row justify-between items-center mt-4 p-4 rounded-lg">
        <section>
          <h1 className="font-semibold sm:text-xl mb-1 text-base">
            BLOG-NOTE
            <span className="font-thin text-xs opacity-80 ">(2023)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            Un mini reseau social qui permet aux utilisateurs de partager divers
            contenus, agrémentés de photos, on peut le liker, commenter, on peut
            suivre les autres utilisateurs.
          </div>
          <div className="flex flex-row flex-wrap sm:gap-5 gap-3">
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-blue-400 rounded-full"></span> React
            </div>
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span> NodeJS
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-slate-500 rounded-full"></span>
              <span> ExpressJS</span>
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-green-300 rounded-full"></span>
              <span> MongoDB</span>
            </div>
          </div>
        </section>
        <Link
          href="https://github.com/RaNiiJohnson/MERN-Blog-Note"
          className="bg-slate-700 sm:py-2 sm:px-4 py-1 px-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
        >
          <Code2 />
        </Link>
      </div>
      <div className="bg-slate-800 flex  sm:flex-row justify-between items-center mt-4 p-4 rounded-lg">
        <section>
          <h1 className="font-semibold sm:text-xl mb-1 text-base">
            PostYeaah
            <span className="font-thin text-xs opacity-80">(2023)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            un espace en ligne dedié pour les publication sans images ni
            mentions &quot; jaime &quot;, favorisant en revanche les
            commentaires.
          </div>
          <div className="flex flex-row flex-wrap sm:gap-5 gap-3">
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-blue-400 rounded-full"></span> React
            </div>
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span> NodeJS
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-slate-500 rounded-full"></span>
              <span> ExpressJS</span>
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-green-300 rounded-full"></span>
              <span> MongoDB</span>
            </div>
          </div>
        </section>
        <Link
          href="https://github.com/RaNiiJohnson/MERN-PostYeaah"
          className="bg-slate-700  sm:py-2 sm:px-4 py-1 px-2 ml-1 rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
        >
          <Code2 />
        </Link>
      </div>
      <div className="bg-slate-800 flex  sm:flex-row justify-between items-center mt-4 p-4 rounded-lg">
        <section>
          <h1 className="font-semibold sm:text-xl mb-1 text-base">
            Threads-clone-yeah
            <span className="font-thin text-xs opacity-80 ">(2024)</span>
          </h1>
          <div className="text-xs opacity-65 mb-4 mt-1 max-w-[500px] ml-1 sm:block hidden">
            Clone de Threads
          </div>
          <div className="flex flex-row flex-wrap sm:gap-5 gap-3">
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-slate-300 rounded-full"></span>
              Next.js
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-blue-600 rounded-full"></span>
              <span> TypeScript</span>
            </div>
            <div className="text-xs flex flex-row items-center gap-1">
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              TailwindCSS
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-slate-500 rounded-full"></span>
              <span> Prisma</span>
            </div>
            <div className="text-xs flex flex-row items-center gap-1 ">
              <span className=" h-2 w-2 bg-violet-500 rounded-full"></span>
              <span> Postgres</span>
            </div>
          </div>
        </section>
        <Link
          href="https://github.com/RaNiiJohnson/threads-clone-yeah"
          className="bg-slate-700 sm:py-2 sm:px-4 py-1 px-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
        >
          <Code2 />
        </Link>
      </div>
    </div>
  );
}
