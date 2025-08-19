import { Code2, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function About() {
  const values = [
    {
      icon: Code2,
      title: "Code de qualité",
      description:
        "J'écris du code propre, maintenable et bien documenté en suivant les meilleures pratiques.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Toujours à l'affût des nouvelles technologies pour créer des solutions modernes.",
    },
    {
      icon: Target,
      title: "Orienté résultats",
      description:
        "Focus sur la livraison de projets qui répondent aux besoins réels des utilisateurs.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Travail d'équipe efficace et communication claire pour des projets réussis.",
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h3 className="text-3xl font-semibold mb-6">Mes valeurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
