import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">FizzyVault</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your one-stop destination for previous year CT's papers and study materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                About
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact
              </a>
            </div>
          </div>      
        </div>

      
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Faiz Turkey. All rights reserved. Made with ❤️ for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
