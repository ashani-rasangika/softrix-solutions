import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, GraduationCap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Innovative </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Tech Solutions
                </span>
                <br />
                <span className="text-foreground">for Your Success</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We provide cutting-edge technology services including university assignments, 
                professional websites, and robust web applications. Transform your ideas into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={scrollToContact}
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToServices}
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-card animate-float">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-primary rounded-lg text-white">
                  <Code className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Web Development</h3>
                    <p className="text-sm opacity-90">Modern, responsive solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <Globe className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Website Design</h3>
                    <p className="text-sm text-muted-foreground">Beautiful, professional sites</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Academic Support</h3>
                    <p className="text-sm text-muted-foreground">University assignments & projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;