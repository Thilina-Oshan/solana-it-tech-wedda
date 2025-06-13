
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Clock, Star, CheckCircle } from "lucide-react";

const ProjectQuote = () => {
  const projectTypes = [
    { name: "Web Application", basePrice: 299, complexity: "Medium", duration: "7-14 days" },
    { name: "Mobile App", basePrice: 399, complexity: "High", duration: "10-20 days" },
    { name: "Desktop Software", basePrice: 349, complexity: "Medium", duration: "8-16 days" },
    { name: "AI/ML Project", basePrice: 499, complexity: "High", duration: "15-25 days" },
    { name: "Blockchain Project", basePrice: 599, complexity: "Very High", duration: "20-30 days" },
    { name: "IoT System", basePrice: 449, complexity: "High", duration: "12-22 days" }
  ];

  const features = [
    "Complete source code",
    "Detailed documentation",
    "Implementation guide",
    "Free revisions",
    "24/7 support",
    "Deployment assistance"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-tech-blue via-blue-800 to-tech-green">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Your <span className="bg-gradient-to-r from-tech-orange to-tech-green bg-clip-text text-transparent">Project Quote</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get an instant estimate for your project and start your journey to academic success
          </p>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-tech-dark mb-4">Choose Your Project Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the type of project you need and get an instant quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 hover:border-tech-blue">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-tech-dark">{project.name}</CardTitle>
                  <div className="text-3xl font-bold text-tech-orange">${project.basePrice}</div>
                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <Badge variant={project.complexity === "Very High" ? "destructive" : project.complexity === "High" ? "default" : "secondary"}>
                      {project.complexity}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                    Select This Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-tech-dark flex items-center">
                    <Calculator className="w-6 h-6 mr-2" />
                    Project Details
                  </CardTitle>
                  <CardDescription>Tell us about your project requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                    <Input placeholder="Enter your project title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technology Preference</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select Technology</option>
                      <option>React/Node.js</option>
                      <option>Python/Django</option>
                      <option>Java/Spring</option>
                      <option>PHP/Laravel</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Complexity</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Basic (Simple functionality)</option>
                      <option>Intermediate (Multiple features)</option>
                      <option>Advanced (Complex algorithms)</option>
                      <option>Expert (Research-level)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Describe your project requirements in detail"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <Button className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                    Get Instant Quote
                  </Button>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-tech-dark">What's Included</CardTitle>
                  <CardDescription>Everything you need for project success</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-tech-green mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 p-6 bg-tech-blue/10 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-tech-orange mr-2" />
                      <span className="font-semibold text-tech-dark">Premium Support</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Get priority support, faster delivery, and additional revisions with our premium packages.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-tech-green/10 rounded-lg">
                    <h4 className="font-semibold text-tech-dark mb-2">Money-Back Guarantee</h4>
                    <p className="text-sm text-gray-600">
                      100% satisfaction guaranteed or your money back within 7 days of delivery.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectQuote;
