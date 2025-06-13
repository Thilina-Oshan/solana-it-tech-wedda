
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Custom Projects", href: "/services" },
        { name: "Pre-built Solutions", href: "/services" },
        { name: "Consulting", href: "/services" },
        { name: "Support", href: "/services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Free Code Library", href: "/resources" },
        { name: "Student Forums", href: "/resources" },
        { name: "Tech Guides", href: "/resources" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/legal" },
        { name: "Terms & Conditions", href: "/legal" },
        { name: "Refund Policy", href: "/legal" },
        { name: "FAQ", href: "/legal" }
      ]
    }
  ];

  return (
    <footer className="bg-tech-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-tech-blue to-tech-green py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Tech Wadda</h3>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest project ideas, coding tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 flex-1"
              />
              <Button 
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-6 py-2 font-semibold w-full sm:w-auto"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TW</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tech-text-gradient">Tech Wadda</h2>
                  <p className="text-sm text-gray-400">A SolanaIT Company</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering final-year students with innovative IT projects and expert guidance. 
                Your success is our mission.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-tech-green" />
                  <span className="text-gray-300">contact@techwadda.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-tech-green" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-tech-green" />
                  <span className="text-gray-300">Bangalore, Karnataka, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tech-blue transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tech-blue transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tech-blue transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-tech-green transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Tech Wadda. All rights reserved. A SolanaIT Company.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/legal" className="text-gray-400 hover:text-tech-green transition-colors duration-300">Privacy Policy</Link>
              <Link to="/legal" className="text-gray-400 hover:text-tech-green transition-colors duration-300">Terms of Service</Link>
              <Link to="/legal" className="text-gray-400 hover:text-tech-green transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
