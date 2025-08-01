import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">TechSolutions</h3>
            <p className="text-primary-foreground/80 text-sm">
              Innovative technology solutions for students, businesses, and organizations. 
              We transform ideas into reality with cutting-edge development.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-primary-foreground/80 text-sm">University Assignments</span>
              <span className="text-primary-foreground/80 text-sm">Web Development</span>
              <span className="text-primary-foreground/80 text-sm">Website Design</span>
              <span className="text-primary-foreground/80 text-sm">Mobile Apps</span>
              <span className="text-primary-foreground/80 text-sm">Backend Solutions</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">hello@techsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 TechSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;