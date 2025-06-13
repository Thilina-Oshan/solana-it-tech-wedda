
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Code } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Raj Patel",
      role: "Founder & CEO",
      bio: "10+ years in IT project development and student mentoring",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Sharma",
      role: "Technical Lead",
      bio: "Expert in full-stack development and project architecture",
      image: "/placeholder.svg"
    },
    {
      name: "Arjun Kumar",
      role: "Project Manager",
      bio: "Specializes in agile project delivery and student guidance",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Tech Wadda</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Empowering final-year students with innovative IT projects and expert guidance. 
              We're passionate about helping you succeed in your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tech-text-gradient">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To bridge the gap between academic learning and real-world application by providing 
                high-quality, innovative IT projects that help students excel in their final year and 
                prepare for successful careers in technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-tech-dark">500+ Students</h3>
                  <p className="text-gray-600">Successfully Served</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-tech-dark">95% Success Rate</h3>
                  <p className="text-gray-600">Project Completion</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 tech-text-gradient">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To become the leading platform for student IT project development, fostering innovation 
                and excellence in technology education across India and beyond.
              </p>
              <div className="bg-tech-grey rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-dark">Why Choose Tech Wadda?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Code className="w-5 h-5 text-tech-green mr-3" />
                    <span>Expert developers with industry experience</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-5 h-5 text-tech-green mr-3" />
                    <span>Tailored solutions for academic requirements</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-tech-green mr-3" />
                    <span>Proven track record of successful projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-tech-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tech-text-gradient">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our experienced team of developers, project managers, and educators are dedicated 
              to helping you succeed in your final year projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-tech-dark">{member.name}</h3>
                <p className="text-tech-green font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center tech-text-gradient">Our Story</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tech Wadda was born from a simple observation: final-year students needed better support 
                for their IT projects. As part of SolanaIT, we recognized the gap between academic theory 
                and practical implementation that many students faced.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2022, we started with a mission to provide high-quality, affordable IT project 
                solutions specifically designed for academic requirements. Our team of experienced developers 
                and educators understood the unique challenges students face and created a platform that 
                addresses these needs comprehensively.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Tech Wadda has helped hundreds of students successfully complete their final-year 
                projects, with many going on to secure excellent placements in top IT companies. We continue 
                to evolve our services based on student feedback and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have completed their final-year projects with Tech Wadda.
          </p>
          <Button 
            size="lg"
            className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
