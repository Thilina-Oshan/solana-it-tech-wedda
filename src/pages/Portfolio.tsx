
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Code, Calendar, User } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      rating: 5,
      testimonial: "Outstanding work! The project exceeded my expectations and helped me graduate with honors.",
      student: "Priya Singh",
      date: "March 2024",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "Comprehensive healthcare management solution with patient records, appointment scheduling, and billing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
      rating: 5,
      testimonial: "Professional quality code and excellent documentation. Highly recommended!",
      student: "Arjun Patel",
      date: "February 2024",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "AI Chatbot Application",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      rating: 5,
      testimonial: "Cutting-edge technology implementation. Perfect for my AI specialization project.",
      student: "Sneha Sharma",
      date: "January 2024",
      category: "Artificial Intelligence"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Real-time social media monitoring and analytics dashboard with sentiment analysis.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      rating: 5,
      testimonial: "Amazing visualization and data processing. Got me placed in a top tech company!",
      student: "Rohit Kumar",
      date: "December 2023",
      category: "Data Analytics"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      rating: 5,
      testimonial: "Revolutionary project that showcased the latest blockchain technology perfectly.",
      student: "Kavya Reddy",
      date: "November 2023",
      category: "Blockchain"
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      description: "Complete IoT solution for home automation with mobile app and web dashboard.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Arduino", "React Native", "Firebase", "IoT"],
      rating: 5,
      testimonial: "Innovative IoT implementation with seamless connectivity.",
      student: "Amit Singh",
      date: "October 2023",
      category: "IoT"
    }
  ];

  const categories = ["All", "Web Development", "Healthcare", "Artificial Intelligence", "Data Analytics", "Blockchain", "IoT"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-tech-blue via-blue-800 to-tech-green">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-tech-orange to-tech-green bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our collection of successful projects that have helped students achieve their academic goals
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-tech-blue hover:bg-tech-blue/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-tech-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Code className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-tech-orange/10 text-tech-orange">
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-tech-orange text-tech-orange" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-tech-dark">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-tech-grey text-tech-dark">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                    <User className="w-4 h-4 ml-4 mr-2" />
                    {project.student}
                  </div>

                  <div className="bg-tech-grey rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 italic mb-2">"{project.testimonial}"</p>
                    <p className="text-sm font-semibold text-tech-blue">- {project.student}</p>
                  </div>

                  <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
