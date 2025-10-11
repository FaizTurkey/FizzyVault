import { GraduationCap, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empowering students with quality study resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group">
            <div className="inline-flex items-center justify-center w-[120px] h-[120px] rounded-full gradient-hero mb-4 group-hover:scale-110 transition-smooth">
              <img className="rounded-full" src="Faiz.jpeg" alt="me" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Muhammad Faiz</h3>
            <p className="text-muted-foreground">
              To Provide Easy Access To Previous Year Question Papers for Students.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Muhammad Faiz
            a passionate student dedicated to helping fellow students. This platform was created
            to provide previous years question papers for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
