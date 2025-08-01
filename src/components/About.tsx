import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional technology solutions that drive real business results."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you every step of the way."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to create forward-thinking solutions."
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality assurance processes."
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">TechSolutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are a passionate team of technology professionals dedicated to providing 
                innovative solutions for students, businesses, and organizations. Our expertise 
                spans across web development, academic support, and digital transformation.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded with the vision to bridge the gap between complex technology and 
                practical solutions, we've helped countless clients achieve their goals through 
                our comprehensive range of services.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Our Expertise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines technical excellence with creative problem-solving to deliver 
              solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Expert Team</h4>
              <p className="text-muted-foreground">
                Skilled developers, designers, and consultants with years of industry experience.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Proven Process</h4>
              <p className="text-muted-foreground">
                Time-tested methodologies ensuring project success and timely delivery.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Fast Delivery</h4>
              <p className="text-muted-foreground">
                Efficient workflows and agile practices for rapid project completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;