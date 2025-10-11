import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface Paper {
  id: string;
  title: string;
  subject: string;
  year: string;
  semester: string;
  department: string;
  fileUrl: string;
}

interface PapersSectionProps {
  searchQuery: string;
}

const PapersSection = ({ searchQuery }: PapersSectionProps) => {
  const papers: Paper[] = [
    {
      id: "1",
      title: "BTech 1st Year 1st Sem",
      subject: "All Papers",
      year: "2024",
      semester: "Full Semester",
      department: "CSE",
      fileUrl: "/papers/CT's-1st-Sem-FaizTurkey.pdf"
    },
    {
      id: "2",
      title: "BTech 2nd Year 3rd Sem",
      subject: "All Papers",
      year: "2025",
      semester: "3rd Semester",
      department: "CSE",
      fileUrl: "/papers/BTech-3rd.pdf"
    },
    // {
    //   id: "3",
    //   title: "Engineering Mathematics II",
    //   subject: "Mathematics",
    //   year: "2022",
    //   semester: "2nd Semester",
    //   department: "All Branches",
    //   fileUrl: "/papers/math-2022.pdf"
    // },
    // {
    //   id: "4",
    //   title: "Digital Electronics",
    //   subject: "Digital Electronics",
    //   year: "2024",
    //   semester: "4th Semester",
    //   department: "ECE",
    //   fileUrl: "/papers/ece-de-2024.pdf"
    // },
    // {
    //   id: "5",
    //   title: "Physics I Final Exam",
    //   subject: "Physics",
    //   year: "2024",
    //   semester: "1st Semester",
    //   department: "All Branches",
    //   fileUrl: "/papers/physics-2024.pdf"
    // },
    // {
    //   id: "6",
    //   title: "Operating Systems",
    //   subject: "Operating Systems",
    //   year: "2023",
    //   semester: "5th Semester",
    //   department: "CSE",
    //   fileUrl: "/papers/cse-os-2023.pdf"
    // }
  ];

  const filteredPapers = papers.filter(paper => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      paper.title.toLowerCase().includes(query) ||
      paper.subject.toLowerCase().includes(query) ||
      paper.year.includes(query) ||
      paper.department.toLowerCase().includes(query)
    );
  });

  const handleDownload = (fileUrl:string , title:string) =>{
    const link = document.createElement("a");
    const filePath = fileUrl.startsWith("/") ? fileUrl : `/papers/${fileUrl}`;
    link.href = filePath;
    link.setAttribute("download",title || "paper.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Question Papers
          </h2>
          <p className="text-muted-foreground text-lg">
            {searchQuery 
              ? `Showing results for "${searchQuery}"`
              : "Browse our collection of previous year papers"
            }
          </p>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No papers found for "{searchQuery}"</p>
            <p className="text-muted-foreground mt-2">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper, index) => (
              <Card 
                key={paper.id} 
                className="gradient-card border border-border shadow-soft hover:shadow-hover transition-smooth group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-smooth">
                        {paper.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {paper.department}
                      </CardDescription>
                    </div>
                    <FileText className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-smooth" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{paper.year} • {paper.semester}</span>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {paper.subject}
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleDownload(paper.fileUrl,paper.title)}
                    className="w-full gradient-hero text-primary-foreground font-medium group/btn"
                  >
                    <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PapersSection;
