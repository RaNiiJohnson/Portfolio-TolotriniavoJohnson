import About from "./components/Portfolio/About";
import Hero from "./components/Portfolio/Hero";
import Navigation from "./components/Portfolio/Navigation";
import ProjectsModern from "./components/Portfolio/ProjectsModern";
import { Card } from "./components/ui/Card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-16">
        {/* Hero Section */}
        <section>
          <Card>
            <Hero />
          </Card>
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsModern />
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4">Travaillons ensemble</h2>
            <p className="text-secondary-foreground mb-8 max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouveaux défis et opportunités.
              N&apos;hésitez pas à me contacter pour discuter de vos projets !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Johnsontolotriniavo@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Envoyer un email
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
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-secondary-foreground">
            <p>
              &copy; {new Date().getFullYear()} Tolotriniavo Henintsoa
              Rajaonson.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
