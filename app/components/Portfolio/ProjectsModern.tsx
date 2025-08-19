import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function ProjectsModern() {
  const projects = [
    {
      title: "DevDialogue",
      description:
        "Plateforme de questions-réponses inspirée de Stack Overflow. Les développeurs peuvent poser des questions, partager leurs connaissances et voter pour les meilleures réponses.",
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
        "Authentification complète",
        "Système de votes",
        "Recherche avancée",
        "Interface responsive",
      ],
    },
    {
      title: "Threads Clone",
      description:
        "Clone moderne de l'application Threads avec toutes les fonctionnalités principales : posts, commentaires, likes et système de suivi.",
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
        "Interface moderne",
        "Temps réel",
        "Système de suivi",
        "Gestion des médias",
      ],
    },
    {
      title: "BLOG-NOTE",
      description:
        "Réseau social complet permettant aux utilisateurs de partager du contenu, interagir via likes et commentaires, et suivre d'autres utilisateurs.",
      year: "2023",
      status: "Archivé",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/RaNiiJohnson/MERN-Blog-Note",
      },
      highlights: [
        "CRUD complet",
        "Upload d'images",
        "Système d'amis",
        "Feed personnalisé",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Développement":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Archivé":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Projets sélectionnés</h2>
        <p className="text-secondary-foreground">
          Une sélection de mes projets les plus significatifs et récents
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 group"
          >
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
                <h4 className="text-sm font-medium mb-2">
                  Fonctionnalités clés
                </h4>
                <div className="grid grid-cols-2 gap-1 text-sm text-secondary-foreground">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Technologies</h4>
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
        ))}
      </div>
    </section>
  );
}
