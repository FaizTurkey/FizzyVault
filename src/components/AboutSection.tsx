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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-smooth">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Mission</h3>
            <p className="text-muted-foreground">
              To provide easy access to previous year question papers for students to excel in their exams.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-smooth">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Vision</h3>
            <p className="text-muted-foreground">
              Building the largest free repository of educational resources for college students.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-smooth">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
            <p className="text-muted-foreground">
              Join thousands of students who trust us for their exam preparation needs.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold gradient-hero bg-clip-text text-transparent">Faiz Turkey</span>, 
            a passionate student dedicated to helping fellow students ace their exams. This platform was created 
            to make quality study materials accessible to everyone, free of charge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
