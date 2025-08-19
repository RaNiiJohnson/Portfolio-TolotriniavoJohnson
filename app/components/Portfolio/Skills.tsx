import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-black" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "HTML/CSS", color: "bg-orange-500" },
        { name: "JavaScript", color: "bg-yellow-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", color: "bg-green-600" },
        { name: "Express.js", color: "bg-gray-600" },
        { name: "Prisma", color: "bg-indigo-600" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "REST APIs", color: "bg-purple-600" },
      ],
    },
    {
      title: "Outils & Autres",
      skills: [
        { name: "Git", color: "bg-orange-600" },
        { name: "Vercel", color: "bg-black" },
        { name: "Figma", color: "bg-purple-500" },
        { name: "VS Code", color: "bg-blue-500" },
        { name: "Postman", color: "bg-orange-500" },
        { name: "Shadcn/ui", color: "bg-gray-800" },
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Compétences</h2>
        <p className="text-muted-foreground">
          Technologies et outils que j&apos;utilise pour créer des applications
          modernes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
