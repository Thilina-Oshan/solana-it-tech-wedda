import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Banknote, Bot } from "lucide-react";

const ViewMore = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-tech-blue mb-12">
        Explore More Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* E-commerce Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="text-tech-blue w-6 h-6" />
            <h2 className="text-2xl font-semibold text-tech-dark">E-commerce</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Explore our full-featured e-commerce platforms with integrated payments.
          </p>
          <Link
            to="/viewmore/eCommerce"
            className="inline-block text-tech-blue font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>

        {/* Financial Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="text-tech-green w-6 h-6" />
            <h2 className="text-2xl font-semibold text-tech-dark">Financial</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Discover budgeting, expense tracking, and financial management tools.
          </p>
          <Link
            to="/viewmore/financial"
            className="inline-block text-tech-blue font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>

        {/* AI Chatbots Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-tech-orange w-6 h-6" />
            <h2 className="text-2xl font-semibold text-tech-dark">AI Chatbots</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Check out our advanced AI-powered chatbot solutions for smarter communication.
          </p>
          <Link
            to="/viewmore/aichatbot"
            className="inline-block text-tech-blue font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
