"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/avatar.jpg";
import { Badge } from "../ui/Badge";

export default function Hero() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />

      <div className="relative md:p-8 p-3">
        <div className="flex flex-col lg:flex-row items-start md:gap-8 gap-7">
          <motion.div
            className="flex lg:flex-col sm:flex-row gap-3 lg:gap-1 items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={avatar}
                alt="Johnson Tolotriniavo"
                className="md:size-32 size-20 rounded-full border-4 border-border shadow-lg"
              />
              <div className="absolute md:-bottom-1 bottom-0 md:-right-2 right-0 md:size-8 size-5 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              className="md:text-left"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="md:text-3xl text-2xl font-bold text-foreground">
                Johnson Tolotriniavo
              </h1>
              <p className="md:text-lg text-muted-foreground mt-1">
                Full Stack Developer
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 space-y-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-foreground leading-relaxed">
                Passionate about web development since 2021, I specialize in
                creating modern applications with <strong>React</strong>,{" "}
                <strong>Next.js</strong> and <strong>TypeScript</strong>. I
                transform ideas into elegant and performant digital solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                MAIN TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", color: "bg-cyan-500" },
                  { name: "Next.js", color: "bg-gray-900" },
                  { name: "TypeScript", color: "bg-blue-600" },
                  { name: "Node.js", color: "bg-green-600" },
                  { name: "Tailwind", color: "bg-cyan-500" },
                  { name: "Postgres", color: "bg-indigo-700" },
                  { name: "MongoDB", color: "bg-green-500" },
                  { name: "Prisma", color: "bg-gray-800" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className={`${tech.color} text-white`}
                    >
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {[
                {
                  href: "mailto:Johnsontolotriniavo@gmail.com",
                  icon: Mail,
                  text: "Contact me",
                  primary: true,
                },
                {
                  href: "https://github.com/RaNiiJohnson",
                  icon: Github,
                  text: "GitHub",
                  primary: false,
                },
                {
                  href: "https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b",
                  icon: Linkedin,
                  text: "LinkedIn",
                  primary: false,
                },
              ].map((link, index) => (
                <motion.div
                  key={link.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-2 rounded-lg transition-colors ${
                      link.primary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    <link.icon className="size-3 sm:size-4" />
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
