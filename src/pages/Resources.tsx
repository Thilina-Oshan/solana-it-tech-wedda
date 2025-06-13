
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, BookOpen, Users, Code, Search, Filter, Star } from "lucide-react";

const Resources = () => {
  const freeProjects = [
    {
      title: "Student Management System",
      description: "Complete student management system with PHP and MySQL",
      technology: "PHP, MySQL, Bootstrap",
      downloads: "2.5k",
      rating: 4.8,
      category: "Web Development"
    },
    {
      title: "E-commerce Website",
      description: "Full-featured e-commerce platform with shopping cart",
      technology: "React, Node.js, MongoDB",
      downloads: "1.8k",
      rating: 4.6,
      category: "Full Stack"
    },
    {
      title: "Library Management System",
      description: "Digital library management with book tracking",
      technology: "Java, Spring Boot, MySQL",
      downloads: "3.2k",
      rating: 4.9,
      category: "Java"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive hospital management solution",
      technology: "Python, Django, PostgreSQL",
      downloads: "2.1k",
      rating: 4.7,
      category: "Python"
    },
    {
      title: "Banking System",
      description: "Secure banking application with transaction management",
      technology: "C#, ASP.NET, SQL Server",
      downloads: "1.5k",
      rating: 4.5,
      category: ".NET"
    },
    {
      title: "Inventory Management",
      description: "Stock and inventory tracking system",
      technology: "Vue.js, Express.js, MongoDB",
      downloads: "1.9k",
      rating: 4.6,
      category: "Vue.js"
    }
  ];

  const techGuides = [
    {
      title: "Project Planning for IT Students",
      description: "Complete guide to planning your final year project",
      readTime: "15 min read",
      category: "Planning"
    },
    {
      title: "Choosing the Right Technology Stack",
      description: "How to select technologies for your project",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      title: "Database Design Best Practices",
      description: "Essential database design principles",
      readTime: "20 min read",
      category: "Database"
    },
    {
      title: "API Development Guidelines",
      description: "Building robust and scalable APIs",
      readTime: "18 min read",
      category: "Backend"
    }
  ];

  const codingTips = [
    {
      title: "Clean Code Principles",
      description: "Write maintainable and readable code",
      tips: ["Use meaningful variable names", "Keep functions small", "Write comments for complex logic"]
    },
    {
      title: "Version Control with Git",
      description: "Master Git for project management",
      tips: ["Commit frequently", "Use meaningful commit messages", "Learn branching strategies"]
    },
    {
      title: "Testing Best Practices",
      description: "Ensure your code works correctly",
      tips: ["Write unit tests", "Test edge cases", "Use automated testing tools"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Free Resources</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Access our comprehensive library of free project codes, tutorials, guides, 
              and coding best practices to accelerate your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="text" 
                placeholder="Search resources..."
                className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 flex-1"
              />
              <Button 
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-6 py-2 font-semibold w-full sm:w-auto"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Project Codes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Free Project Codes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Download complete project source code with documentation and setup instructions. 
              Perfect for learning or as a starting point for your own projects.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center space-x-4 mb-8">
              <Button variant="outline" className="mb-2">
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" className="mb-2">Web Development</Button>
              <Button variant="outline" className="mb-2">Full Stack</Button>
              <Button variant="outline" className="mb-2">Java</Button>
              <Button variant="outline" className="mb-2">Python</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-tech-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-600">{project.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-tech-dark">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Technologies:</p>
                  <p className="text-tech-blue font-semibold">{project.technology}</p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">{project.downloads} downloads</span>
                  </div>
                </div>

                <Button className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Project
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Guides */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Tech Guides</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive guides covering project planning, technology selection, 
              and development best practices for IT students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-tech-green mr-4" />
                  <div>
                    <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {guide.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-tech-dark">{guide.title}</h3>
                <p className="text-gray-700 mb-4">{guide.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{guide.readTime}</span>
                  <Button variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-white">
                    Read Guide
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Best Practices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Coding Best Practices</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Essential coding principles and practices that every IT student should know 
              to write better, more maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-tech-orange rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-tech-dark">{tip.title}</h3>
                <p className="text-gray-700 mb-4">{tip.description}</p>
                
                <ul className="space-y-2">
                  {tip.tips.map((tipItem, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-tech-green rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{tipItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Forums CTA */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join Our Student Community</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Connect with fellow students, ask questions, share ideas, and collaborate 
              on projects in our active student forums.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Join Forums
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-tech-blue px-8 py-3 text-lg font-semibold"
              >
                Browse Discussions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
