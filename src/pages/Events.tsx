
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, MapPin, Star, Play, BookOpen } from "lucide-react";

const Events = () => {
  const [upcomingCourses] = useState([
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      instructor: "Dr. Rajesh Kumar",
      duration: "12 weeks",
      startDate: "July 15, 2024",
      price: "₹15,999",
      rating: 4.8,
      students: 234,
      level: "Beginner to Advanced",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Machine Learning & AI Fundamentals",
      instructor: "Dr. Priya Sharma",
      duration: "8 weeks",
      startDate: "August 1, 2024",
      price: "₹12,999",
      rating: 4.9,
      students: 189,
      level: "Intermediate",
      description: "Learn ML algorithms, deep learning, and practical AI applications",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      instructor: "Amit Patel",
      duration: "10 weeks",
      startDate: "July 22, 2024",
      price: "₹13,999",
      rating: 4.7,
      students: 156,
      level: "Intermediate",
      description: "Build cross-platform mobile apps for iOS and Android",
      image: "/placeholder.svg"
    }
  ]);

  const [upcomingWebinars] = useState([
    {
      id: 1,
      title: "Career Opportunities in AI & Data Science",
      speaker: "Dr. Vikash Singh",
      date: "June 15, 2024",
      time: "6:00 PM IST",
      duration: "1 hour",
      attendees: 450,
      type: "Live Webinar",
      description: "Explore the latest career trends and opportunities in AI and Data Science"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      speaker: "Neha Gupta",
      date: "June 20, 2024",
      time: "7:00 PM IST",
      duration: "1.5 hours",
      attendees: 320,
      type: "Workshop",
      description: "Learn best practices for building and scaling modern web applications"
    },
    {
      id: 3,
      title: "Final Year Project Ideas & Implementation",
      speaker: "Tech Wadda Team",
      date: "June 25, 2024",
      time: "5:00 PM IST",
      duration: "2 hours",
      attendees: 280,
      type: "Interactive Session",
      description: "Get expert guidance on choosing and implementing final year projects"
    }
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Events & Learning</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Join our comprehensive courses and live webinars to enhance your skills 
              and stay updated with the latest technology trends.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Browse Courses
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-tech-blue px-8 py-3 text-lg font-semibold"
              >
                View Webinars
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="courses" className="text-lg">Courses</TabsTrigger>
              <TabsTrigger value="webinars" className="text-lg">Webinars</TabsTrigger>
            </TabsList>

            <TabsContent value="courses">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Professional Courses</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Comprehensive courses designed to take you from beginner to professional level 
                  in cutting-edge technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {upcomingCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-tech-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {course.level}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-tech-dark">{course.title}</h3>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Duration: {course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Starts: {course.startDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{course.students} students enrolled</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-tech-blue">{course.price}</span>
                        <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webinars">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Live Webinars & Workshops</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Join our expert-led webinars and interactive workshops to stay updated 
                  with industry trends and best practices.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {webinar.type}
                      </span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        Free
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-tech-dark">{webinar.title}</h3>
                    <p className="text-gray-700 mb-4">{webinar.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="text-gray-700">Speaker: {webinar.speaker}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="text-gray-700">{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="text-gray-700">{webinar.time} ({webinar.duration})</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="text-gray-700">{webinar.attendees} registered</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-tech-green hover:bg-tech-green/90 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
