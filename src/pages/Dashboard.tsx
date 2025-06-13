
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle, Clock, MessageSquare, User, BookOpen, Settings } from "lucide-react";

const Dashboard = () => {
  const [activeProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website",
      status: "In Progress",
      progress: 65,
      deadline: "2024-07-15",
      description: "Full-stack e-commerce platform with React and Node.js"
    },
    {
      id: 2,
      title: "Mobile App Development",
      status: "Planning",
      progress: 20,
      deadline: "2024-08-20",
      description: "Cross-platform mobile app using React Native"
    }
  ]);

  const [consultations] = useState([
    {
      id: 1,
      date: "2024-06-15",
      time: "10:00 AM",
      consultant: "Dr. Rahul Sharma",
      topic: "Project Architecture Review",
      status: "Confirmed"
    },
    {
      id: 2,
      date: "2024-06-20",
      time: "2:00 PM",
      consultant: "Ms. Priya Patel",
      topic: "Technology Stack Discussion",
      status: "Pending"
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      from: "Tech Wadda Team",
      subject: "Project Update Required",
      date: "2024-06-10",
      read: false
    },
    {
      id: 2,
      from: "Consultant",
      subject: "Meeting Scheduled",
      date: "2024-06-08",
      read: true
    }
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">Student Dashboard</h1>
            <p className="text-xl text-gray-700">Welcome back! Track your projects and manage your learning journey.</p>
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="projects">My Projects</TabsTrigger>
              <TabsTrigger value="consultations">Consultations</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-tech-dark">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'In Progress' ? 'bg-tech-blue text-white' : 'bg-tech-orange text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-semibold text-tech-blue">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-tech-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-sm text-gray-600">Due: {project.deadline}</span>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consultations" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-tech-dark">{consultation.topic}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        consultation.status === 'Confirmed' ? 'bg-tech-green text-white' : 'bg-tech-orange text-white'
                      }`}>
                        {consultation.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-gray-700">{consultation.date} at {consultation.time}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-gray-700">{consultation.consultant}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button size="sm" className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                        Join Meeting
                      </Button>
                      <Button size="sm" variant="outline">Reschedule</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`bg-white rounded-lg p-4 shadow-lg border border-gray-100 ${
                    !message.read ? 'border-l-4 border-l-tech-blue' : ''
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-tech-dark">{message.subject}</h3>
                          {!message.read && (
                            <span className="w-2 h-2 bg-tech-blue rounded-full"></span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">From: {message.from}</p>
                        <p className="text-sm text-gray-500">{message.date}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-tech-dark mb-6">Profile Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
                    <Input placeholder="Enter your institution" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                    <Input placeholder="Enter your course" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
