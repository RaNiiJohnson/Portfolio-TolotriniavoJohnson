import Image from "next/image";
import Projects from "../Projects/page";
import Realisation from "../Realisation/page";
import nextjs from "../assets/Next.js.svg";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";

export default function Presenation() {
  return (
    <>
      <div
        id="presentaion"
        className="border border-solid rounded-md border-opacity-20 border-stone-300"
      >
        <section className="">
          <div className="px-4 pt-3 pb-1 text-sm bg-slate-800">
            Johnson Tolotriniavo / ReadMe.
            <span className="text-xs opacity-60">md</span>
          </div>
          <h1 className="px-4 py-3 text-xl font-bold sm:text-3xl">
            BIENVENUE SUR <span className="text-blue-700">MON PORTFOLIO</span>
          </h1>
          <p className="px-4">
            je m&apos;appelle Niavo,j&apos;ai décidé de me lancer à fond dans
            l&apos;apprentissage du code, depuis 2021, je me forme à temps plein
            en autodidacte en tant que développeur Javascript et ReactJS afin de
            devenir le plus rapidement possible développeur. Plus qu&apos;un
            avenir professionnel, je me suis découvert une passion, celle de
            coder,
          </p>
        </section>
        <section className="px-4 py-6">
          <h1 className="text-xl font-bold sm:text-3xl">STACK</h1>
          <div className="flex flex-wrap mt-2">
            <span className="flex items-center gap-1 px-4 py-2 my-2 mr-4 rounded-md bg-slate-800">
              <Image src={reactjs} alt="" className="w-6" />
              ReactJS
            </span>
            <span className="flex items-center py-2 pl-1 pr-4 my-2 mr-4 rounded-md bg-slate-800">
              <Image src={nextjs} alt="" className="w-11" />
              NextJS
            </span>
            <span className="flex items-center gap-1 px-4 py-2 my-2 mr-4 rounded-md bg-slate-800">
              <Image src={nodejs} alt="" className="w-6" />
              NodeJS
            </span>
            <span className="flex items-center gap-1 px-4 py-2 my-2 mr-4 rounded-md  bg-slate-800">
              <Image src={tailwind} alt="" className="w-6" />
              TailwindCSS
            </span>
            <span className="flex items-center gap-1 px-4 py-2 my-2 mr-4 rounded-md bg-slate-800">
              <Image src={express} alt="" className="w-6" />
              ExpressJS
            </span>
            <span className="flex items-center gap-1 px-4 py-2 my-2 mr-4 rounded-md bg-slate-800">
              <Image src={mongodb} alt="" className="w-6" />
              MongoDB
            </span>
          </div>
        </section>
      </div>
      <div className="projets">
        <Projects />
      </div>
      <div className="realisation">
        <Realisation />
      </div>
    </>
  );
}
