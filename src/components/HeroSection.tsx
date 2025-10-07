import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        {/* Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Download Previous Year
          <span className="block gradient-hero bg-clip-text text-transparent">
            Question Papers
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Access thousands of previous year question papers from top universities. 
          Prepare better, score higher.
        </p>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative group">
            <div className="relative flex items-center bg-card rounded-2xl shadow-soft hover:shadow-hover transition-smooth border border-border overflow-hidden">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search your subject or year (e.g. CSE 2023 Papers)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 h-14 border-0 bg-transparent text-base focus-visible:ring-0"
              />
              <Button 
                type="submit"
                className="absolute right-2 gradient-hero text-primary-foreground font-medium hover:opacity-90"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Quick Suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["CSE 2023", "Maths 2022", "Physics 2024", "ECE 2023"].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  onSearch(tag);
                }}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-smooth"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
