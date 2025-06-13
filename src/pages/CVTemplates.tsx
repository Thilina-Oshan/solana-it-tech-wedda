
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Eye, Star } from "lucide-react";

const CVTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Tech Professional",
      description: "Clean and modern template perfect for software developers and IT professionals",
      preview: "/placeholder.svg",
      rating: 4.8,
      downloads: "12.5k",
      category: "Technical",
      featured: true
    },
    {
      id: 2,
      name: "Creative Developer",
      description: "Colorful and creative design ideal for UI/UX designers and frontend developers",
      preview: "/placeholder.svg",
      rating: 4.6,
      downloads: "8.2k",
      category: "Creative",
      featured: false
    },
    {
      id: 3,
      name: "Data Scientist",
      description: "Professional template tailored for data scientists and analysts",
      preview: "/placeholder.svg",
      rating: 4.7,
      downloads: "6.8k",
      category: "Technical",
      featured: true
    },
    {
      id: 4,
      name: "Minimalist Pro",
      description: "Simple and elegant design that works for any tech role",
      preview: "/placeholder.svg",
      rating: 4.9,
      downloads: "15.3k",
      category: "Minimalist",
      featured: false
    },
    {
      id: 5,
      name: "Project Manager",
      description: "Professional template designed for technical project managers",
      preview: "/placeholder.svg",
      rating: 4.5,
      downloads: "5.7k",
      category: "Management",
      featured: false
    },
    {
      id: 6,
      name: "Mobile Developer",
      description: "Modern template specifically crafted for mobile app developers",
      preview: "/placeholder.svg",
      rating: 4.7,
      downloads: "7.9k",
      category: "Technical",
      featured: true
    }
  ];

  const categories = ["All", "Technical", "Creative", "Minimalist", "Management"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">CV Templates</h1>
            <p className="text-xl text-gray-700">Professional resume templates designed specifically for tech careers.</p>
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
                  <div className="relative">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-tech-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{template.rating}</span>
                        </div>
                        <span>{template.downloads} downloads</span>
                      </div>
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
                  <div className="relative">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-64 object-cover"
                    />
                    {template.featured && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-tech-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{template.rating}</span>
                        </div>
                        <span>{template.downloads} downloads</span>
                      </div>
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

export default CVTemplates;
