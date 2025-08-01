import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, GraduationCap, Smartphone, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Assignments",
      description: "Expert assistance with programming assignments, research projects, and academic coursework across various disciplines.",
      features: ["Programming Help", "Research Support", "Code Reviews", "Academic Writing"]
    },
    {
      icon: Globe,
      title: "Professional Websites",
      description: "Custom-designed, responsive websites that represent your brand professionally and drive business growth.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration", "E-commerce Ready"]
    },
    {
      icon: Code2,
      title: "Web Applications",
      description: "Robust, scalable web applications built with modern technologies to solve your business challenges.",
      features: ["Custom Development", "API Integration", "Real-time Features", "Cloud Deployment"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Ensure your digital presence looks perfect on all devices with our mobile-first approach.",
      features: ["Responsive Layout", "Touch Optimization", "Performance Focused", "Cross-Platform"]
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Powerful backend systems and databases to support your applications and business logic.",
      features: ["Database Design", "API Development", "Cloud Services", "Data Analytics"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your digital assets secure and running smoothly with our ongoing support services.",
      features: ["Security Audits", "Regular Updates", "Performance Monitoring", "24/7 Support"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions tailored to meet your specific needs, 
            from academic support to enterprise-level applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="gradient"
            onClick={scrollToContact}
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;