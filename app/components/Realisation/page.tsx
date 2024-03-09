import { LastSection, Section } from "./Section";

export default function Realisation() {
  const mois = [
    "Jan.",
    "Fev.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Aout",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  return (
    <div>
      <h1 id="chronologie" className="text-xl font-bold uppercase sm:text-3xl">
        Chronologie de mes projets
      </h1>
      <div className="overflow-x-auto ">
        <div className="w-[850px] flex gap-5 relative  border mt-4 border-solid border-opacity-20 border-stone-300 px-4 py-1 rounded-md">
          <div className=" w-[800px] grid grid-cols-12 pb-3">
            {mois.map((mois, index) => (
              <section key={index} className="col-span-1">
                {mois}
              </section>
            ))}
            {/* 2023 -------------------------------------------------------------------------*/}
            {/* BLOG-NOTE */}
            <Section
              firstClassName="col-span-1 mb-1 size-3 bg-slate-500"
              SecondClassName="col-span-1 mb-1 bg-purple-500 size-3"
              firstLength={8}
              secondLength={4}
            />
            <Section
              firstClassName="col-span-1 mb-1 bg-purple-500 size-3"
              SecondClassName="col-span-1 mb-1 size-3 bg-slate-500"
              firstLength={5}
              secondLength={7}
            />
            <Section
              firstClassName="col-span-1 mb-1 size-3 bg-slate-500"
              SecondClassName="col-span-1 mb-1 size-3 bg-slate-500"
              firstLength={4}
              secondLength={8}
            />
            <Section
              firstClassName="col-span-1 mb-1 size-3 bg-slate-500"
              SecondClassName="col-span-1 mb-1 bg-yellow-400 size-3"
              firstLength={10}
              secondLength={2}
            />

            {/* 2024 ------------------------------------------------------------------------*/}
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 mb-1 bg-yellow-400 size-3"
                  ></section>
                ))}
                {Array.from({ length: 1 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 mb-1 size-3 bg-slate-500"
                  ></section>
                ))}
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 mb-1 bg-blue-600 size-3"
                  ></section>
                ))}
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 mb-1 size-3 bg-slate-500"
                  ></section>
                ))}
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 mb-1 size-3 bg-slate-800"
                  ></section>
                ))}
              </div>
            </div>
            {Array.from({ length: 3 }).map((_, index: number) => (
              <div key={index} className="col-span-3">
                <div className="grid grid-cols-12">
                  {Array.from({ length: 12 }).map((_, index: number) => (
                    <section
                      key={index}
                      className="col-span-1 mb-1 size-3 bg-slate-800"
                    ></section>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-[50px] flex-col mt-4 text-sm  opacity-60">
            <span>2023</span>
            <span>2024</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1 text-sm">
        <LastSection
          className="bg-purple-500 rounded-lg size-2 sm:h-4 sm:w-6"
          name="BLOG-NOTE"
        />
        <LastSection
          className="bg-yellow-400 rounded-lg size-2 sm:h-4 sm:w-6"
          name="Threads-clone-yeah"
        />
        <LastSection
          className="bg-blue-600 rounded-lg size-2 sm:h-4 sm:w-6"
          name="DevDialogue"
        />
        <LastSection
          className="rounded-lg size-2 bg-slate-500 sm:h-4 sm:w-6"
          name="Projets variés et formation continue."
        />
      </div>
    </div>
  );
}
