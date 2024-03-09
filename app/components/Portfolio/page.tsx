import { Facebook, Github, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/avatar.jpg";
import Presenation from "../Presentation/page";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <section className="flex flex-col items-center col-span-12 sm:col-span-3 sm:items-stretch">
        <Image
          src={avatar}
          alt="Johnson's avatar"
          className="pb-4 rounded-full sm:w-auto w-60"
        />
        <h2 className="text-2xl font-bold">Johnson Tolotriniavo</h2>
        <p className="opacity-50">Développeur ReactJS/NextJS</p>
        <Link
          href="mailto:Johnsontolotriniavo@gmail.com"
          className="bg-blue-700 hover:bg-blue-600 transition-all sm:px-2 p-2  my-3 px-10 rounded-lg text-center  max-w-[444px]"
        >
          Me contacter
        </Link>
        <div className="flex gap-6 text-sm sm:flex-col sm:gap-0 sm:text-lg">
          <Link
            href="https://github.com/RaNiiJohnson"
            className="flex gap-2 mt-2"
          >
            <Github />
            <span className="hidden transition-all border-b border-solid border-slate-50 hover:border-blue-600 hover:text-slate-400 sm:block">
              Github
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b"
            className="flex gap-2 mt-2"
          >
            <Linkedin />
            <span className="hidden transition-all border-b border-solid border-slate-50 hover:border-blue-600 hover:text-slate-400 sm:block">
              Linkedin
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/rvnii.johnson"
            className="flex gap-2 mt-2"
          >
            <Facebook />
            <span className="hidden transition-all border-b border-solid border-slate-50 hover:border-blue-600 hover:text-slate-400 sm:block">
              Facebook
            </span>
          </Link>
          <Link href="tel:0323833306" className="flex gap-2 mt-2">
            <Phone />
            <span className="hidden transition-all border-b border-solid border-slate-50 hover:border-blue-600 hover:text-slate-400 sm:block">
              0323833306
            </span>
          </Link>
        </div>
      </section>
      <section className="col-span-12 sm:col-span-9">
        <Presenation />
      </section>
    </div>
  );
}
