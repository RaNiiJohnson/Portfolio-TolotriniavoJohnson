import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import Link from "next/link";
import Presenation from "../Presentation/page";
import { Contact, Facebook, Github, Linkedin, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <section className="sm:col-span-3 flex flex-col items-center sm:items-stretch col-span-12">
        <Image
          src={avatar}
          alt="Johnson's avatar"
          className="rounded-full sm:w-auto w-60 pb-4"
        />
        <h2 className="text-2xl font-bold">Johnson Tolotriniavo</h2>
        <p className="opacity-50">Développeur ReactJS/NextJS</p>
        <Link
          href="mailto:Johnsontolotriniavo@gmail.com"
          className="bg-blue-700 hover:bg-blue-600 transition-all sm:px-2 p-2  my-3 px-10 rounded-lg text-center  max-w-[444px]"
        >
          Me contacter
        </Link>
        <div className="flex sm:flex-col text-sm gap-6 sm:gap-0 sm:text-lg">
          <Link
            href="https://github.com/RaNiiJohnson"
            className="flex gap-2 mt-2"
          >
            <Github />
            <span className="border-b border-solid border-slate-50 hover:border-blue-600  transition-all hover:text-slate-400 hidden sm:block">
              Github
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b"
            className="flex gap-2 mt-2"
          >
            <Linkedin />
            <span className="border-b border-solid border-slate-50 hover:border-blue-600  transition-all hover:text-slate-400 hidden sm:block">
              Linkedin
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/rvnii.johnson"
            className="flex gap-2 mt-2"
          >
            <Facebook />
            <span className="border-b border-solid border-slate-50 hover:border-blue-600  transition-all hover:text-slate-400 hidden sm:block">
              Facebook
            </span>
          </Link>
          <Link href="tel:0323833306" className="flex gap-2 mt-2">
            <Phone />
            <span className="border-b border-solid border-slate-50 hover:border-blue-600  transition-all hover:text-slate-400 hidden sm:block">
              0323833306
            </span>
          </Link>
        </div>
      </section>
      <section className="sm:col-span-9  col-span-12">
        <Presenation />
      </section>
    </div>
  );
}
