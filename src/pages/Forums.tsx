
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Users, ThumbsUp, Eye, Clock, Search, Plus } from "lucide-react";

const Forums = () => {
  const [forumPosts] = useState([
    {
      id: 1,
      title: "Need help with React project deployment",
      author: "Priya Sharma",
      category: "Help & Support",
      replies: 15,
      views: 234,
      lastActivity: "2 hours ago",
      excerpt: "I'm having trouble deploying my React application to Netlify. Getting build errors..."
    },
    {
      id: 2,
      title: "Best project ideas for AI/ML final year projects",
      author: "Rohit Kumar",
      category: "Project Ideas",
      replies: 28,
      views: 567,
      lastActivity: "4 hours ago",
      excerpt: "Looking for innovative AI/ML project ideas that are feasible for final year students..."
    },
    {
      id: 3,
      title: "Free resources for learning Node.js",
      author: "Anjali Patel",
      category: "Resources",
      replies: 42,
      views: 891,
      lastActivity: "1 day ago",
      excerpt: "Sharing some amazing free resources that helped me master Node.js development..."
    },
    {
      id: 4,
      title: "Looking for team members for hackathon",
      author: "Vikash Singh",
      category: "Student Networking",
      replies: 12,
      views: 156,
      lastActivity: "3 hours ago",
      excerpt: "We need 2 more developers for an upcoming hackathon. Skills needed: React, Python..."
    }
  ]);

  const categories = [
    { name: "All", count: 156, color: "bg-tech-blue" },
    { name: "Project Ideas", count: 45, color: "bg-tech-green" },
    { name: "Help & Support", count: 67, color: "bg-tech-orange" },
    { name: "Resources", count: 32, color: "bg-purple-500" },
    { name: "Student Networking", count: 12, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">Student Forums</h1>
            <p className="text-xl text-gray-700">Connect with fellow students, share ideas, and get help with your projects.</p>
          </div>

          {/* Search and Actions */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 w-full sm:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search forums..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                New Discussion
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-tech-dark mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mt-6">
                <h3 className="text-lg font-bold text-tech-dark mb-4">Forum Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-tech-blue" />
                      <span className="text-gray-700">Total Members</span>
                    </div>
                    <span className="font-semibold text-tech-dark">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-tech-green" />
                      <span className="text-gray-700">Total Posts</span>
                    </div>
                    <span className="font-semibold text-tech-dark">15,629</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-tech-orange" />
                      <span className="text-gray-700">Online Now</span>
                    </div>
                    <span className="font-semibold text-tech-dark">127</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Forum Posts */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-tech-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-tech-dark mb-2 hover:text-tech-blue transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-700 mb-3">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>by {post.author}</span>
                          <span>•</span>
                          <span>{post.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{post.views} views</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-white">
                        Join Discussion
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

export default Forums;
