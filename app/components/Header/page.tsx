import {
  CalendarCheck2,
  KanbanSquare,
  Notebook,
  PanelsTopLeft,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="py-3 md:px-5 px-1 bg-slate-950 text-slate-50 border-b border-solid border-opacity-20 border-stone-300">
      <section className="pb-3 flex flex-row md:gap-6 gap-1 text-center items-center">
        <span className="py-1 px-2 bg-slate-400 rounded-full font-burtons text-center text-2xl">
          Jt
        </span>
        <h1 className="md:text-2xl sm:text-xl text-lg">Johnson Tolotriniavo</h1>
      </section>
      <section className="px-3 py-1 flex flex-row gap-8 justify-between sm:justify-normal">
        <Link
          href="#presentation"
          className="flex gap-1 items-center checked:text-purple-600"
        >
          <Notebook size={22} />
          <div className="hidden sm:block md:text-base text-xs">
            Présentation
          </div>
        </Link>
        <Link href="#projets" className="flex gap-1 items-center">
          <PanelsTopLeft size={22} />
          <div className="hidden sm:block md:text-base text-xs">
            Projets séléctionnés
          </div>
        </Link>
        <Link href="#chronologie" className="flex gap-1 items-center">
          <CalendarCheck2 size={22} />
          <div className="hidden sm:block md:text-base text-xs">
            Chronologie de mes projets
          </div>
        </Link>
      </section>
    </nav>
  );
}
