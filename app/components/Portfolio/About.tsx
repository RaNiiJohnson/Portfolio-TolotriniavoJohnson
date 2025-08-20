import { Code2, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function About() {
  const values = [
    {
      icon: Code2,
      title: "Quality Code",
      description:
        "I write clean, maintainable and well-documented code following best practices.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Always on the lookout for new technologies to create modern solutions.",
    },
    {
      icon: Target,
      title: "Results-oriented",
      description: "Focus on delivering projects that meet real user needs.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Effective teamwork and clear communication for successful projects.",
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h3 className="text-3xl font-semibold mb-6">My values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-background/60 border-border/50 hover:bg-background/80 hover:border-border/80"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
