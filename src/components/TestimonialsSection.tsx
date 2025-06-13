import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Singh",
      university: "IIT Delhi",
      course: "Computer Science",
      rating: 5,
      text: "Tech Wadda delivered an exceptional e-commerce platform that exceeded all my expectations. The code quality was outstanding and helped me graduate with honors!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "E-Commerce Platform"
    },
    {
      name: "Arjun Patel",
      university: "VIT University",
      course: "Information Technology",
      rating: 5,
      text: "The hospital management system was perfectly documented and implemented. Professional quality work that impressed my professors and helped me land a great job!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Hospital Management System"
    },
    {
      name: "Sneha Sharma",
      university: "NIT Trichy",
      course: "AI & Machine Learning",
      rating: 5,
      text: "Amazing AI chatbot implementation with cutting-edge technology. The team understood my requirements perfectly and delivered exactly what I needed for my specialization.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "AI Chatbot Application"
    },
    {
      name: "Rohit Kumar",
      university: "BITS Pilani",
      course: "Data Science",
      rating: 5,
      text: "The social media analytics dashboard was incredible! Amazing data visualization and processing capabilities. It showcased exactly what I learned and got me placed in a top tech company.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Social Media Analytics"
    },
    {
      name: "Kavya Reddy",
      university: "IIIT Hyderabad",
      course: "Blockchain Technology",
      rating: 5,
      text: "Revolutionary blockchain voting system that perfectly demonstrated the latest technology. The smart contracts were flawlessly implemented and the documentation was comprehensive.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Blockchain Voting System"
    },
    {
      name: "Amit Singh",
      university: "DTU Delhi",
      course: "Electronics & Communication",
      rating: 5,
      text: "The IoT smart home system was innovative and perfectly integrated. Seamless connectivity between all components and an intuitive mobile app. Excellent work!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "IoT Smart Home System"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tech-blue/5 via-white to-tech-green/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Student <span className="tech-text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who achieved their academic goals with our help
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-tech-orange" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-tech-orange text-tech-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-tech-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                    <p className="text-sm text-tech-blue">{testimonial.university}</p>
                  </div>
                </div>

                {/* Project Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-block bg-tech-grey text-tech-dark text-xs px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-tech-dark mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your project today and become our next success story.
            </p>
            <Link to="/project-quote">
              <button className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
