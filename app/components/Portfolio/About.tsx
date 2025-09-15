"use client";

import { Code2, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "motion/react";
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
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div>
        <motion.h3
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My values
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-background/60 border-border/50 hover:bg-background/80 hover:border-border/80 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
