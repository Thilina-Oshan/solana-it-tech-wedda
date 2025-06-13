import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Code } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  rating: number;
  testimonial: string;
  student: string;
  demoUrl: string;
  codeUrl: string;
}

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      rating: 5,
      testimonial: "Outstanding work! The project exceeded my expectations and helped me graduate with honors.",
      student: "Priya Singh",
      demoUrl: " https://solana-it.github.io/shophub-ecom-site",
      codeUrl: "https://github.com/solana-it/shophub-ecom-site.git"
    },
    {
      title: "Finacial Management System",
      description: "A Financial Management System tracks, manages, and analyzes financial activities like budgeting, expenses, income, and reporting efficiently.",
      image: "/src/img/finacial.jpeg",
      technologies: ["React", "Node.js", "Stripe"],
      rating: 5,
      testimonial: "Professional quality code and excellent documentation. Highly recommended!",
      student: "Amisha Silva",
      demoUrl: "https://solana-it.github.io/lanka-finance-hub/",
      codeUrl: "https://github.com/solana-it/lanka-finance-hub.git"
    },
    {
      title: "AI Language Learn Application",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js"],
      rating: 5,
      testimonial: "Cutting-edge technology implementation. Perfect for my AI specialization project.",
      student: "Sneha Sharma",
      demoUrl: " https://solana-it.github.io/language-learning-assistant/",
      codeUrl: "https://github.com/solana-it/language-learning-assistant.git"
    },
    {
      title: "Social Media Analytics",
      description: "Real-time social media monitoring and analytics dashboard with sentiment analysis.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      rating: 5,
      testimonial: "Amazing visualization and data processing. Got me placed in a top tech company!",
      student: "Rohit Kumar",
      demoUrl: "https://example.com/analytics-demo",
      codeUrl: "https://github.com/your-user/analytics-dashboard"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      rating: 5,
      testimonial: "Revolutionary project that showcased the latest blockchain technology perfectly.",
      student: "Kavya Reddy",
      demoUrl: "https://example.com/blockchain-vote",
      codeUrl: "https://github.com/your-user/blockchain-voting"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Our <span className="tech-text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative projects we've delivered to help students achieve academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-tech-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Code className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-tech-dark">{project.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tech-orange text-tech-orange" />
                    ))}
                  </div>
                </div>
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

                <div className="bg-tech-grey rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 italic mb-2">"{project.testimonial}"</p>
                  <p className="text-sm font-semibold text-tech-blue">- {project.student}</p>
                </div>

               {/*  <Link to="/portfolio">
                  <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                    View More
                  </Button>
                </Link> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/ViewMore">
            <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-6">
              View More
            </Button>
          </Link>
        </div>

<br />

       {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.slice(3, 5).map((project, index) => (
            <Card key={index + 3} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden h-48 md:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-tech-dark">{project.title}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-tech-orange text-tech-orange" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-tech-grey text-tech-dark">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-tech-grey rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600 italic">"{project.testimonial}"</p>
                      <p className="text-sm font-semibold text-tech-blue mt-1">- {project.student}</p>
                    </div>
                  </div>
                  <Link to="/ViewMore">
                    <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                      View More
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-tech-blue to-tech-green rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to See Your Project Here?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Join hundreds of successful students who've achieved their academic goals with our projects.
            </p>
            <Link to="/project-quote">
              <Button
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
