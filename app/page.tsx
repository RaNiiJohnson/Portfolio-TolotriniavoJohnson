import About from "./components/Portfolio/About";
import Hero from "./components/Portfolio/Hero";
import Navigation from "./components/Portfolio/Navigation";
import ProjectsModern from "./components/Portfolio/ProjectsModern";
import { Card } from "./components/ui/Card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/20 via-transparent to-blue-50/20 dark:from-violet-950/10 dark:via-transparent dark:to-blue-950/10 pointer-events-none" />
      <div className="relative">
        <Navigation />

        <div className="max-w-6xl mx-auto p-2 md:px-6 md:py-8 space-y-16">
          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-blue-500/5 dark:from-blue-500/10 dark:via-violet-500/10 dark:to-blue-500/10 rounded-xl blur-3xl" />
            <Card className="relative backdrop-blur-sm bg-background/80 border-border/50">
              <Hero />
            </Card>
          </section>

          {/* About Section */}
          <section id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-violet-500/5 to-transparent dark:from-violet-500/10 rounded-xl blur-2xl" />
            <div className="relative">
              <About />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 dark:from-blue-500/10 dark:to-violet-500/10 rounded-xl blur-2xl" />
            <div className="relative">
              <ProjectsModern />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-violet-500/10 dark:from-violet-500/20 dark:via-blue-500/10 dark:to-violet-500/20 rounded-xl blur-2xl" />
            <Card className="p-8 relative backdrop-blur-sm bg-background/90 border-border/50">
              <h2 className="text-3xl font-bold mb-4">
                Let&lsquo;s work together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I&lsquo;m always open to new challenges and opportunities. Feel
                free to contact me to discuss your projects!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:Johnsontolotriniavo@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/tolotriniavo-johnson-b9427b26b"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} Tolotriniavo Henintsoa
                Rajaonson.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
