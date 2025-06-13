
import { Button } from "@/components/ui/button";
import { Code, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tech-blue via-blue-800 to-tech-green">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-tech-orange/20 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-tech-green/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-slide-up">
            <Star className="w-4 h-4 text-tech-orange" />
            <span className="text-sm font-medium">Trusted by 500+ Students</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Start Your <span className="bg-gradient-to-r from-tech-orange to-tech-green bg-clip-text text-transparent">IT Journey</span> Today with Tech Wadda!
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Custom coding, pre-built projects, and expert guidance for your final year success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/project-quote">
              <Button 
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white bg-tech-orange hover:bg-green hover:text-tech-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Code className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-orange mb-2">500+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-orange mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
