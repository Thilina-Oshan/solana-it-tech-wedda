import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const TimelineSection = () => {
  const timelineSteps = [
    {
      icon: CheckCircle,
      title: "Consultation",
      description: "We understand your requirements, discuss project scope, and provide detailed timeline.",
      duration: "1-2 Days",
      color: "bg-tech-blue"
    },
    {
      icon: Code,
      title: "Development",
      description: "Our expert developers build your project using latest technologies and best practices.",
      duration: "5-15 Days",
      color: "bg-tech-green"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Comprehensive testing to ensure your project works flawlessly across all scenarios.",
      duration: "2-3 Days",
      color: "bg-tech-orange"
    },
    {
      icon: Rocket,
      title: "Delivery",
      description: "Complete project delivery with source code, documentation, and deployment guide.",
      duration: "1 Day",
      color: "bg-purple-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Post-launch Support",
      description: "Ongoing support for bug fixes, feature updates, and technical assistance.",
      duration: "Lifetime",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tech-blue/5 via-white to-tech-green/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Project <span className="tech-text-gradient">Delivery Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures timely delivery without compromising quality
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-tech-blue via-tech-green to-tech-orange rounded-full hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} rounded-lg mb-4 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} mx-auto`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-tech-dark mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <div className="inline-flex items-center space-x-2 bg-tech-grey rounded-full px-4 py-2">
                        <Clock className="w-4 h-4 text-tech-blue" />
                        <span className="text-sm font-semibold text-tech-dark">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 ${step.color} rounded-full border-4 border-white shadow-lg z-10 relative`}>
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ad Placement */}
        <div className="mt-16 mb-8">
          <div className="bg-gray-200 rounded-lg p-6 text-center text-gray-500 max-w-md mx-auto">
            [Sidebar Ad Placement - 300x600]
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-tech-dark mb-4">
              Fast, Reliable, and Professional
            </h3>
            <p className="text-gray-600 mb-6">
              Experience our proven process that has delivered success to hundreds of students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/project-quote">
                <button className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Get Your Project Quote
                </button>
              </Link>
              <Link to="/consultation">
                <button className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
