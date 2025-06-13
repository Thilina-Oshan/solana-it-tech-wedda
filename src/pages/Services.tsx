
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Package, Users, HeadphonesIcon, CheckCircle, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom IT Projects",
      description: "Tailored project development from idea to implementation",
      features: [
        "Complete project development",
        "Source code with documentation",
        "Technology consultation",
        "Academic requirement compliance",
        "Multiple technology stacks"
      ],
      price: "Starting from ₹15,000",
      timeline: "2-4 weeks"
    },
    {
      icon: Package,
      title: "Pre-built Projects",
      description: "Ready-made solutions that you can customize",
      features: [
        "Instant download available",
        "Complete source code",
        "Setup instructions",
        "Basic customization guide",
        "Popular technology stacks"
      ],
      price: "Starting from ₹5,000",
      timeline: "Immediate"
    },
    {
      icon: Users,
      title: "Project Consultation",
      description: "Expert guidance for your existing projects",
      features: [
        "Code review and optimization",
        "Architecture consultation",
        "Technology recommendations",
        "Performance improvements",
        "Best practices guidance"
      ],
      price: "₹2,000 per session",
      timeline: "1-2 hours"
    },
    {
      icon: HeadphonesIcon,
      title: "Maintenance & Support",
      description: "Ongoing support for your completed projects",
      features: [
        "Bug fixes and updates",
        "Performance monitoring",
        "Feature enhancements",
        "Technical support",
        "Documentation updates"
      ],
      price: "₹3,000 per month",
      timeline: "Ongoing"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your project requirements, timeline, and academic needs."
    },
    {
      step: 2,
      title: "Project Planning",
      description: "Our team creates a detailed project plan with milestones and deliverables."
    },
    {
      step: 3,
      title: "Development Phase",
      description: "Expert developers work on your project with regular progress updates."
    },
    {
      step: 4,
      title: "Testing & Review",
      description: "Comprehensive testing and quality assurance before delivery."
    },
    {
      step: 5,
      title: "Final Delivery",
      description: "Complete project delivery with documentation and support materials."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Comprehensive IT project solutions designed specifically for final-year students. 
              From custom development to ready-made solutions, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-tech-green rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tech-dark">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-tech-dark mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-tech-green mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-tech-orange mr-2" />
                    <span className="text-gray-700">{service.timeline}</span>
                  </div>
                  <div className="text-2xl font-bold text-tech-green">{service.price}</div>
                </div>

                <Button className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Our Development Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is delivered on time 
              and meets all your academic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-tech-dark">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tech-text-gradient">Why Choose Our Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tech-dark">Quality Guaranteed</h3>
                <p className="text-gray-700">
                  All projects undergo rigorous testing and quality checks before delivery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tech-dark">On-Time Delivery</h3>
                <p className="text-gray-700">
                  We understand your academic deadlines and ensure timely project completion.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tech-dark">24/7 Support</h3>
                <p className="text-gray-700">
                  Get help whenever you need it with our dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and let us help you create an outstanding final-year project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tech-blue px-8 py-3 text-lg font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
