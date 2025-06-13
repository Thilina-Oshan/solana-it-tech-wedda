
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Eye, Star, FileText } from "lucide-react";

const CoverLetterTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Software Developer",
      description: "Professional cover letter template for software development positions",
      content: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Developer position...",
      rating: 4.8,
      downloads: "8.3k",
      category: "Development",
      featured: true
    },
    {
      id: 2,
      name: "Data Scientist",
      description: "Tailored template for data science and analytics roles",
      content: "Dear Data Science Team,\n\nI am excited to apply for the Data Scientist position...",
      rating: 4.7,
      downloads: "5.9k",
      category: "Data Science",
      featured: false
    },
    {
      id: 3,
      name: "DevOps Engineer",
      description: "Specialized template for DevOps and infrastructure roles",
      content: "Dear Technical Hiring Manager,\n\nI am writing to apply for the DevOps Engineer position...",
      rating: 4.6,
      downloads: "4.2k",
      category: "DevOps",
      featured: true
    },
    {
      id: 4,
      name: "UI/UX Designer",
      description: "Creative template for design and user experience positions",
      content: "Dear Design Team,\n\nI am thrilled to submit my application for the UI/UX Designer position...",
      rating: 4.9,
      downloads: "7.1k",
      category: "Design",
      featured: false
    },
    {
      id: 5,
      name: "Product Manager",
      description: "Strategic template for product management roles",
      content: "Dear Product Team,\n\nI am writing to express my interest in the Product Manager position...",
      rating: 4.5,
      downloads: "3.8k",
      category: "Management",
      featured: true
    },
    {
      id: 6,
      name: "Cybersecurity Analyst",
      description: "Security-focused template for cybersecurity positions",
      content: "Dear Security Team,\n\nI am excited to apply for the Cybersecurity Analyst position...",
      rating: 4.7,
      downloads: "2.9k",
      category: "Security",
      featured: false
    }
  ];

  const categories = ["All", "Development", "Data Science", "DevOps", "Design", "Management", "Security"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">Cover Letter Templates</h1>
            <p className="text-xl text-gray-700">Professional cover letter templates crafted for various tech positions.</p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="hover:bg-tech-blue hover:text-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Templates */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-tech-dark mb-6">Featured Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.filter(template => template.featured).map((template) => (
                <div key={template.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative bg-gradient-to-br from-tech-blue to-tech-purple p-8 text-white">
                    <FileText className="w-16 h-16 mb-4 opacity-80" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-tech-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-tech-dark">{template.name}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {template.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    
                    <div className="mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 italic">
                          "{template.content.substring(0, 100)}..."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{template.rating}</span>
                        </div>
                        <span>{template.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 bg-tech-orange hover:bg-tech-orange/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Templates */}
          <div>
            <h2 className="text-2xl font-bold text-tech-dark mb-6">All Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative bg-gradient-to-br from-tech-blue to-tech-purple p-8 text-white">
                    <FileText className="w-16 h-16 mb-4 opacity-80" />
                    {template.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-tech-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-tech-dark">{template.name}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {template.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    
                    <div className="mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 italic">
                          "{template.content.substring(0, 100)}..."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{template.rating}</span>
                        </div>
                        <span>{template.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 bg-tech-orange hover:bg-tech-orange/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoverLetterTemplates;
