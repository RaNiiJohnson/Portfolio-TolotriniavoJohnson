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
        <div className="flex flex-col lg:flex-row items-start md:gap-8 gap-7">
          <div className="flex lg:flex-col sm:flex-row gap-3 lg:gap-1 items-center ">
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

            <div className="md:text-left">
              <h1 className="md:text-3xl text-2xl font-bold text-foreground">
                Johnson Tolotriniavo
              </h1>
              <p className="md:text-lg text-muted-foreground mt-1">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6 md:space-y-7">
            <div>
              <p className="text-foreground leading-relaxed">
                Passionate about web development since 2021, I specialize in
                creating modern applications with <strong>React</strong>,{" "}
                <strong>Next.js</strong> and <strong>TypeScript</strong>. I
                transform ideas into elegant and performant digital solutions.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                MAIN TECHNOLOGIES
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
                className="inline-flex items-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="size-3 sm:size-4" />
                Contact me
              </Link>

              <Link
                href="https://github.com/RaNiiJohnson"
                className="inline-flex items-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="size-3 sm:size-4" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b"
                className="inline-flex items-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="size-3 sm:size-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
