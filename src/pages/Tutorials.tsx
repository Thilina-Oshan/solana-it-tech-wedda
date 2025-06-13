
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Play, Clock, Star, BookOpen, Code, Filter, Users } from "lucide-react";

const Tutorials = () => {
  const [tutorials] = useState([
    {
      id: 1,
      title: "JavaScript Fundamentals to Advanced",
      description: "Complete JavaScript course from basics to advanced concepts",
      language: "JavaScript",
      difficulty: "Beginner to Advanced",
      duration: "45 hours",
      lessons: 120,
      rating: 4.9,
      students: 5420,
      category: "Frontend",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Python Programming Complete Guide",
      description: "Learn Python from scratch with practical projects",
      language: "Python",
      difficulty: "Beginner",
      duration: "35 hours",
      lessons: 95,
      rating: 4.8,
      students: 4850,
      category: "Backend",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "React.js Development Masterclass",
      description: "Build modern web applications with React.js",
      language: "React",
      difficulty: "Intermediate",
      duration: "40 hours",
      lessons: 110,
      rating: 4.9,
      students: 3920,
      category: "Frontend",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Java Programming & Spring Framework",
      description: "Master Java and build enterprise applications",
      language: "Java",
      difficulty: "Intermediate",
      duration: "50 hours",
      lessons: 135,
      rating: 4.7,
      students: 3150,
      category: "Backend",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "C++ Programming for Beginners",
      description: "Learn C++ programming from fundamentals",
      language: "C++",
      difficulty: "Beginner",
      duration: "30 hours",
      lessons: 80,
      rating: 4.6,
      students: 2890,
      category: "Systems",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js",
      language: "Node.js",
      difficulty: "Intermediate",
      duration: "38 hours",
      lessons: 100,
      rating: 4.8,
      students: 2640,
      category: "Backend",
      image: "/placeholder.svg"
    }
  ]);

  const languages = [
    { name: "All", count: 156 },
    { name: "JavaScript", count: 45 },
    { name: "Python", count: 38 },
    { name: "Java", count: 32 },
    { name: "React", count: 28 },
    { name: "Node.js", count: 25 },
    { name: "C++", count: 22 },
    { name: "C#", count: 18 },
    { name: "PHP", count: 15 }
  ];

  const categories = ["All", "Frontend", "Backend", "Mobile", "Systems", "Data Science", "DevOps"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Programming Tutorials</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Master every programming language from A to Z with our comprehensive tutorials. 
              Learn at your own pace with hands-on projects and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="text" 
                placeholder="Search tutorials..."
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

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              {/* Programming Languages */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-tech-dark mb-4">Programming Languages</h3>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {lang.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-tech-dark mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="text-gray-700">{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difficulty Level */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-tech-dark mb-4">Difficulty Level</h3>
                <div className="space-y-2">
                  {["All Levels", "Beginner", "Intermediate", "Advanced"].map((level, index) => (
                    <div key={index} className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="text-gray-700">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-tech-dark">All Tutorials</h2>
                  <p className="text-gray-600">Showing {tutorials.length} tutorials</p>
                </div>
                <Button variant="outline" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {tutorial.language}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{tutorial.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-tech-dark">{tutorial.title}</h3>
                      <p className="text-gray-700 mb-4">{tutorial.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{tutorial.lessons} lessons</span>
                        </div>
                        <div className="flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          <span>{tutorial.difficulty}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{tutorial.students.toLocaleString()} students</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-tech-green hover:bg-tech-green/90 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tutorials;
