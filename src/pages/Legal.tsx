import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="min-h-screen">
      {/* Simple header without full navbar */}
      <header className="bg-white shadow-sm border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-tech-blue hover:text-tech-blue/80 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TW</span>
              </div>
              <div>
                <h1 className="text-lg font-bold tech-text-gradient">Tech Wadda</h1>
                <p className="text-xs text-gray-600">Legal Information</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 tech-text-gradient">Legal Information</h1>
          
          {/* Privacy Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-tech-dark">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                At Tech Wadda, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
              <p className="mb-4">
                We collect information that you provide directly to us when you register for an account, 
                subscribe to our newsletter, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal information such as name, email address, and phone number</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Information about your device and internet connection</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages, updates, and security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Sharing Your Information</h3>
              <p className="mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Partners with whom we offer co-branded services or products</li>
                <li>As required by law or to protect our rights</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Terms & Conditions */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-tech-dark">Terms & Conditions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                By accessing or using Tech Wadda's website and services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Tech Wadda's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on Tech Wadda's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h3>
              <p className="mb-4">
                The materials on Tech Wadda's website are provided on an 'as is' basis. Tech Wadda makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Limitations</h3>
              <p className="mb-4">
                In no event shall Tech Wadda or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Tech Wadda's website, even if Tech Wadda or a Tech Wadda authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Refund Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-tech-dark">Refund Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                We want you to be completely satisfied with our services. If you're not satisfied with your purchase, 
                we have a 30-day refund policy for most of our products and services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility for Refunds</h3>
              <p className="mb-4">
                To be eligible for a refund, you must request it within 30 days of your purchase. Additionally:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>For digital products, you must not have downloaded or accessed more than 30% of the content</li>
                <li>For services, you must not have utilized more than one consultation session</li>
                <li>For subscription services, refunds are prorated based on usage</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">How to Request a Refund</h3>
              <p className="mb-4">
                To request a refund, please contact our support team at refunds@techwadda.com with your order number and reason for the refund. 
                We aim to process all refund requests within 5-7 business days.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Non-Refundable Items</h3>
              <p className="mb-4">
                The following items are non-refundable:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Custom development projects after work has begun</li>
                <li>Services that have been fully delivered</li>
                <li>Downloadable software that has been downloaded</li>
                <li>Gift cards or promotional credits</li>
              </ul>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-tech-dark">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I contact customer support?</h3>
                <p className="text-gray-700">
                  You can reach our customer support team by emailing support@techwadda.com or by using the live chat feature on our website. 
                  Our support hours are Monday to Friday, 9 AM to 6 PM IST.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept all major credit cards, debit cards, UPI, net banking, and select digital wallets. 
                  All payments are processed securely through our payment gateway.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer student discounts?</h3>
                <p className="text-gray-700">
                  Yes, we offer special discounts for students with valid ID. Please contact our support team with proof of your student status to receive your discount code.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I update my account information?</h3>
                <p className="text-gray-700">
                  You can update your account information by logging into your dashboard and navigating to the Profile section. 
                  From there, you can update your personal details, change your password, and manage your communication preferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">What is your data retention policy?</h3>
                <p className="text-gray-700">
                  We retain your personal data for as long as necessary to fulfill the purposes for which we collected it, 
                  including for the purposes of satisfying any legal, accounting, or reporting requirements. 
                  To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;
