
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const Consultation = () => {
  const consultationTypes = [
    {
      title: "Project Planning",
      description: "Get expert guidance on project scope, technology selection, and timeline planning.",
      duration: "60 minutes",
      price: "Free",
      features: ["Project scope analysis", "Technology recommendations", "Timeline planning", "Resource allocation"]
    },
    {
      title: "Technical Review",
      description: "Comprehensive review of your existing project with improvement suggestions.",
      duration: "45 minutes", 
      price: "$49",
      features: ["Code review", "Performance analysis", "Security assessment", "Best practices guidance"]
    },
    {
      title: "Career Guidance",
      description: "One-on-one career counseling and industry insights from our experts.",
      duration: "30 minutes",
      price: "$29",
      features: ["Resume review", "Interview preparation", "Career roadmap", "Industry insights"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-tech-blue via-blue-800 to-tech-green">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule a <span className="bg-gradient-to-r from-tech-orange to-tech-green bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get personalized guidance from our experts to accelerate your project success
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-tech-dark mb-4">Choose Your Consultation Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the consultation that best fits your needs and get expert guidance tailored to your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-tech-dark">{consultation.title}</CardTitle>
                  <CardDescription className="text-gray-600">{consultation.description}</CardDescription>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {consultation.duration}
                    </div>
                    <div className="text-2xl font-bold text-tech-orange">{consultation.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-tech-green mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-tech-dark">Book Your Consultation</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Tell us about your project or what you'd like to discuss"
                  ></textarea>
                </div>
                <Button className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
