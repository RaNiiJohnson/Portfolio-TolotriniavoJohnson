import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/avatar.jpg";
import { Badge } from "../ui/Badge";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />

      <div className="relative md:p-8 p-3">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex md:flex-col sm:flex-row gap-3 md:gap-1 md:items-center ">
            <div className="relative">
              <Image
                src={avatar}
                alt="Johnson Tolotriniavo"
                className="md:size-32 size-20 rounded-full border-4 border-border shadow-lg"
              />
              <div className="absolute md:-bottom-1 bottom-0 md:-right-2 right-0 md:size-8 size-5 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="mt-3 md:text-left">
              <h1 className="md:text-3xl text-2xl font-bold text-foreground">
                Johnson Tolotriniavo
              </h1>
              <p className="md:text-lg text-muted-foreground mt-1">
                Développeur Full Stack
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-5">
            <div>
              <p className="text-foreground leading-relaxed">
                Passionné par le développement web depuis 2021, je me spécialise
                dans la création d&apos;applications modernes avec{" "}
                <strong>React</strong>, <strong>Next.js</strong> et{" "}
                <strong>TypeScript</strong>. Je transforme des idées en
                solutions digitales élégantes et performantes.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                TECHNOLOGIES PRINCIPALES
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-cyan-500 text-white">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-gray-900 text-white">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-green-600 text-white">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-cyan-500 text-white">
                  Tailwind
                </Badge>
                <Badge variant="secondary" className="bg-indigo-700 text-white">
                  Postgres
                </Badge>
                <Badge variant="secondary" className="bg-green-500 text-white">
                  MongoDB
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-white">
                  Prisma
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:Johnsontolotriniavo@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Me contacter
              </Link>

              <Link
                href="https://github.com/RaNiiJohnson"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
