export default function Realisation() {
  return (
    <div>
      <h1 id="chronologie" className="font-bold sm:text-3xl text-xl uppercase">
        Chronologie de mes projets
      </h1>
      <div className="overflow-x-auto ">
        <div className="w-[850px] flex gap-5 relative  border mt-4 border-solid border-opacity-20 border-stone-300 px-4 py-1 rounded-md">
          <div className=" w-[800px] grid grid-cols-12 pb-3">
            {[
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
            ].map((mois, index) => (
              <section key={index} className="col-span-1">
                {mois}
              </section>
            ))}
            {/* 2023 -------------------------------------------------------------------------*/}
            {/* BLOG-NOTE */}
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 4 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-purple-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 4 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-purple-500 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 5 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-purple-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 4 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-purple-500 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 10 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-yellow-400 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            {/* POSTYEEAH */}
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 10 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-lime-500 w-3 h-3 mb-1"
                  ></section>
                ))}{" "}
                <section className="col-span-1 bg-slate-800 w-3 h-3 mb-1"></section>
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-lime-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>
            <div className="col-span-3 mb-5">
              <div className="grid grid-cols-12">
                {Array.from({ length: 10 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-500 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 2 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-yellow-400 w-3 h-3 mb-1"
                  ></section>
                ))}
              </div>
            </div>

            {/* 2024 ------------------------------------------------------------------------*/}
            <div className="col-span-3">
              <div className="grid grid-cols-12">
                {Array.from({ length: 3 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-yellow-400 w-3 h-3 mb-1"
                  ></section>
                ))}
                {Array.from({ length: 9 }).map((_, index: number) => (
                  <section
                    key={index}
                    className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
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
                      className="col-span-1 bg-slate-800 w-3 h-3 mb-1"
                    ></section>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-[50px] flex-col mt-5 gap-8 text-sm  opacity-60">
            <span>2023</span>
            <span>2024</span>
          </div>
        </div>
      </div>
      <div className="my-4 text-sm">
        <div className="flex gap-2 items-center text-sm">
          <section className="bg-purple-500 sm:h-4 sm:w-6 h-2 w-2 rounded-lg"></section>
          BLOG-NOTE
        </div>
        <div className="flex gap-2 items-center text-sm">
          <section className="bg-lime-500 sm:h-4 sm:w-6 h-2 w-2 rounded-lg"></section>
          PostYeah
        </div>
        <div className="flex gap-2 items-center text-sm">
          <section className="bg-yellow-400 sm:h-4 sm:w-6 h-2 w-2 rounded-full"></section>
          Threads-clone-yeah
        </div>
        <div className="flex gap-2 items-center text-sm">
          <section className="bg-slate-500 sm:h-4 sm:w-6 h-2 w-2 rounded-lg"></section>
          Projets variés et formation continue.
        </div>
      </div>
    </div>
  );
}
