"use client";

import { ExternalLink, Github, Calendar } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function ProjectsModern() {
  const projects = [
    {
      title: "DevDialogue",
      description:
        "Q&A platform inspired by Stack Overflow. Developers can ask questions, share their knowledge and vote for the best answers.",
      year: "2024",
      status: "Production",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Shadcn/ui",
      ],
      links: {
        demo: "https://devdialogue-project.vercel.app/",
        github: "https://github.com/RaNiiJohnson/DevDialogue-NextJS-Project",
      },
      highlights: [
        "Complete authentication",
        "Voting system",
        "Advanced search",
        "Responsive interface",
      ],
    },
    {
      title: "Threads Clone",
      description:
        "Modern clone of the Threads application with all main features: posts, comments, likes and following system.",
      year: "2024",
      status: "Production",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      links: {
        demo: "https://threads-clone-yeah.vercel.app/",
        github: "https://github.com/RaNiiJohnson/threads-clone-yeah",
      },
      highlights: [
        "Modern interface",
        "Real-time",
        "Following system",
        "Media management",
      ],
    },
    {
      title: "BLOG-NOTE",
      description:
        "Complete social network allowing users to share content, interact via likes and comments, and follow other users.",
      year: "2023",
      status: "Archived",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/RaNiiJohnson/MERN-Blog-Note",
      },
      highlights: [
        "Complete CRUD",
        "Image upload",
        "Friends system",
        "Personalized feed",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
        <p className="text-secondary-foreground">
          A selection of my most significant and recent projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 group backdrop-blur-sm bg-background/60 border-border/50 hover:bg-background/80 hover:border-border/80 h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={getStatusColor(project.status)}
                      >
                        {project.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={project.links.github}
                      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-secondary-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-primary font-medium mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
