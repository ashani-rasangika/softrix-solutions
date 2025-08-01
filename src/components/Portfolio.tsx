import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and customer portal.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "University Portal System",
      description: "Academic management system for universities with student enrollment, course management, and grading.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Python", "Django", "MySQL"],
      category: "Academic Project",
      status: "Completed"
    },
    {
      title: "Corporate Website Redesign",
      description: "Modern, responsive website redesign for a Fortune 500 company with improved UX and performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      category: "Website",
      status: "Completed"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      category: "Mobile App",
      status: "In Progress"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts and reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "Student Assignment Portal",
      description: "Online platform for university students to submit assignments and receive feedback from professors.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "AWS"],
      category: "Academic Project",
      status: "Completed"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped clients across various 
            industries achieve their technology goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="bg-background/90 text-foreground"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our satisfied clients and let us help you bring your vision to life with 
            our expertise and dedication to excellence.
          </p>
          <Button 
            size="lg" 
            variant="gradient"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;