
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLearningDropdownOpen, setIsLearningDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" }
  ];

  const learningItems = [
    { name: "Events & Courses", href: "/events" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Student Forums", href: "/forums" }
  ];

  const careerItems = [
    { name: "Interview Q&A", href: "/interview-qa" },
    { name: "CV Templates", href: "/cv-templates" },
    { name: "Cover Letter Templates", href: "/cover-letter-templates" }
  ];

  const profileItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile Settings", href: "/profile-settings" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TW</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tech-text-gradient">Tech Wadda</h1>
              <p className="text-xs text-gray-600">A SolanaIT Company</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Learning Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLearningDropdownOpen(!isLearningDropdownOpen)}
                className="flex items-center text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium"
              >
                Learning
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isLearningDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {learningItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-tech-dark hover:bg-gray-50 hover:text-tech-blue transition-colors"
                      onClick={() => setIsLearningDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Career Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
                className="flex items-center text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium"
              >
                Career
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isCareerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {careerItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-tech-dark hover:bg-gray-50 hover:text-tech-blue transition-colors"
                      onClick={() => setIsCareerDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Auth & Profile Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sign In / Sign Up Buttons */}
            <Link to="/signin">
              <Button variant="outline" size="sm" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                Sign Up
              </Button>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium p-2 rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5" />
              </button>
              
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {profileItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-tech-dark hover:bg-gray-50 hover:text-tech-blue transition-colors"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-2 border-gray-200" />
                  <button className="block w-full text-left px-4 py-2 text-tech-dark hover:bg-gray-50 hover:text-tech-blue transition-colors">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-tech-dark hover:text-tech-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Learning</p>
              {learningItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Career</p>
              {careerItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Profile</p>
              {profileItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-tech-dark hover:text-tech-blue transition-colors duration-300 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-2">
              <Link to="/signin">
                <Button variant="outline" size="sm" className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
