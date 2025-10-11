import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Have questions or want to contribute? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="faizturkey2019@gmail.com"
            className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group hover:-translate-y-1"
          >
            <Mail className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">faizturkey2019@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mohdfaiz12"
            className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group hover:-translate-y-1"
          >
            <Linkedin className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth"/>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Follow Me on LinkedIn</p>
          </a>

          <a
            href="https://github.com/FaizTurkey"
            className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-smooth group hover:-translate-y-1"
          >
            <Github className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
            <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">Contribute on GitHub</p>
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Want to contribute papers?
          </h3>
          <p className="text-muted-foreground mb-6">
            Help us grow our collection by sharing question papers Whatsapp Me.
          </p>
          <Button className="gradient-hero text-primary-foreground font-medium">
            7017433962
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
