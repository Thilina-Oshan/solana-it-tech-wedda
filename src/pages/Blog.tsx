
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Top 10 Final Year Project Ideas for Computer Science Students in 2024",
    excerpt: "Discover the most innovative and industry-relevant project ideas that will impress your professors and potential employers.",
    author: "Raj Patel",
    date: "December 1, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "Project Ideas",
    featured: true
  };

  const blogPosts = [
    {
      title: "How to Choose the Right Technology Stack for Your Final Year Project",
      excerpt: "A comprehensive guide to selecting technologies that align with your project goals and career aspirations.",
      author: "Priya Sharma",
      date: "November 28, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Technology Guide"
    },
    {
      title: "Machine Learning Project Ideas That Stand Out",
      excerpt: "Explore cutting-edge ML project concepts that showcase your skills and understanding of artificial intelligence.",
      author: "Arjun Kumar",
      date: "November 25, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg",
      category: "Project Ideas"
    },
    {
      title: "Student Success Story: From Project to Placement at Google",
      excerpt: "Read how Rahul's innovative blockchain project helped him secure a software engineer position at Google.",
      author: "Tech Wadda Team",
      date: "November 22, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg",
      category: "Success Stories"
    },
    {
      title: "Best Practices for Project Documentation and Presentation",
      excerpt: "Learn how to create compelling project documentation and deliver impressive presentations to your evaluation committee.",
      author: "Priya Sharma",
      date: "November 20, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg",
      category: "Tips & Best Practices"
    },
    {
      title: "Latest Trends in Web Development for Student Projects",
      excerpt: "Stay updated with the newest web development technologies and frameworks that are perfect for academic projects.",
      author: "Raj Patel",
      date: "November 18, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg",
      category: "Industry News"
    },
    {
      title: "Building Your First Full-Stack Application: A Step-by-Step Guide",
      excerpt: "Complete tutorial on creating a full-stack application from planning to deployment, perfect for beginners.",
      author: "Arjun Kumar",
      date: "November 15, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg",
      category: "Tutorials"
    }
  ];

  const categories = [
    "All Posts",
    "Project Ideas",
    "Technology Guide", 
    "Success Stories",
    "Tips & Best Practices",
    "Industry News",
    "Tutorials"
  ];

  const trendingTopics = [
    "AI & Machine Learning",
    "Blockchain Projects",
    "Full Stack Development",
    "Mobile App Development",
    "Cloud Computing",
    "Cybersecurity",
    "IoT Projects",
    "Data Science"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Tech Wadda Blog</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Stay updated with the latest project ideas, coding tips, industry news, 
              and student success stories to fuel your IT journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="text" 
                placeholder="Search blog posts..."
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

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 tech-text-gradient">Featured Post</h2>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-tech-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {featuredPost.category}
                    </span>
                    <span className="bg-tech-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-tech-dark">{featuredPost.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 ? "bg-tech-blue hover:bg-tech-blue/90" : "hover:bg-tech-blue hover:text-white"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-tech-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-tech-dark">{post.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{post.readTime}</span>
                      <Button variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3"
              >
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-tech-blue to-tech-green text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-4">Get the latest blog posts and project ideas delivered to your inbox.</p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                />
                <Button className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-5 h-5 text-tech-orange mr-2" />
                <h3 className="text-xl font-bold text-tech-dark">Trending Topics</h3>
              </div>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-tech-grey rounded cursor-pointer transition-colors">
                    <span className="text-gray-700">{topic}</span>
                    <Tag className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-tech-dark">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-tech-dark mb-2 hover:text-tech-blue cursor-pointer transition-colors">
                      {post.title.substring(0, 60)}...
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
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

export default Blog;
