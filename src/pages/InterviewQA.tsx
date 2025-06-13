
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronDown, Code, Database, Globe, Smartphone } from "lucide-react";

const InterviewQA = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Categories", icon: Globe },
    { id: "frontend", name: "Frontend", icon: Code },
    { id: "backend", name: "Backend", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone },
  ];

  const questions = [
    {
      id: 1,
      category: "frontend",
      question: "What is the difference between let, const, and var in JavaScript?",
      answer: "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned but not redeclared, const is block-scoped and cannot be reassigned or redeclared after initialization.",
      difficulty: "Beginner"
    },
    {
      id: 2,
      category: "frontend",
      question: "Explain the concept of Virtual DOM in React.",
      answer: "Virtual DOM is a programming concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM. It allows React to efficiently update the UI by comparing the virtual DOM tree with the previous version and only updating the parts that have changed.",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      category: "backend",
      question: "What is REST API and what are its principles?",
      answer: "REST (Representational State Transfer) is an architectural style for designing networked applications. Its principles include: stateless communication, uniform interface, cacheable responses, client-server architecture, and layered system.",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      category: "mobile",
      question: "What is the difference between React Native and Flutter?",
      answer: "React Native uses JavaScript and renders native components, while Flutter uses Dart and renders custom widgets. React Native has better third-party library support, while Flutter offers more consistent UI across platforms and better performance.",
      difficulty: "Advanced"
    }
  ];

  const filteredQuestions = questions.filter(q => 
    (selectedCategory === "all" || q.category === selectedCategory) &&
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">Interview Questions & Answers</h1>
            <p className="text-xl text-gray-700">Prepare for your tech interviews with our comprehensive Q&A collection.</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.map((qa) => (
              <div key={qa.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedQuestion(expandedQuestion === qa.id ? null : qa.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(qa.difficulty)}`}>
                          {qa.difficulty}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-tech-blue text-white capitalize">
                          {qa.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-tech-dark mb-2">{qa.question}</h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedQuestion === qa.id ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                
                {expandedQuestion === qa.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <h4 className="font-semibold text-tech-dark mb-2">Answer:</h4>
                      <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No questions found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InterviewQA;
