import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PapersSection from "@/components/PapersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to papers section
    const papersSection = document.querySelector('section');
    if (papersSection) {
      const offset = papersSection.offsetTop - 80; // Account for navbar height
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      <PapersSection searchQuery={searchQuery} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
