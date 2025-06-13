
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Package, Users, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Projects",
      description: "Tailored IT project development designed specifically for your requirements and academic goals.",
      features: ["Full-stack development", "Modern technologies", "Academic standards", "Source code included"],
      color: "bg-blue-500"
    },
    {
      icon: Package,
      title: "Pre-built Projects",
      description: "Ready-made solutions for students who need high-quality projects with quick delivery.",
      features: ["Instant download", "Complete documentation", "Multiple technologies", "Free updates"],
      color: "bg-tech-green"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert guidance for project refinement, technology selection, and implementation strategies.",
      features: ["1-on-1 sessions", "Project planning", "Technical guidance", "Career advice"],
      color: "bg-tech-orange"
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "Ongoing maintenance and updates for projects with 24/7 technical support availability.",
      features: ["24/7 availability", "Bug fixes", "Feature updates", "Technical assistance"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-tech-grey">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Our <span className="tech-text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to help final-year students excel in their IT projects
          </p>
        </div>

        {/* Ad Placement */}
        <div className="mb-16">
          <div className="bg-gray-200 rounded-lg p-6 text-center text-gray-500">
            [In-content Ad Placement - 300x250]
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-tech-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-tech-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button 
                      variant="outline"
                      className="w-full group-hover:bg-tech-blue group-hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-tech-dark mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch with our team and let's discuss how we can help you succeed.
            </p>
            <Link to="/project-quote">
              <Button 
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
