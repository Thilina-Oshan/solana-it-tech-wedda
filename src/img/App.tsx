import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import LiveChat from "@/components/LiveChat";

import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Legal from "./pages/Legal";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Forums from "./pages/Forums";
import Events from "./pages/Events";
import Tutorials from "./pages/Tutorials";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProfileSettings from "./pages/ProfileSettings";
/* import InterviewQA from "./pages/InterviewQA";
import CVTemplates from "./pages/CVTemplates";
import CoverLetterTemplates from "./pages/CoverLetterTemplates"; */
import Portfolio from "./pages/Portfolio";
import ViewMore from "./pages/ViewMore"; // ✅ New Page
import Aichatbot from "./pages/aichatbot";
import Ecommerce from "./pages/eCommerse";
import Consultation from "./pages/Consultation";
import ProjectQuote from "./pages/ProjectQuote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
         {/*  <Route path="/interview-qa" element={<InterviewQA />} />
          <Route path="/cv-templates" element={<CVTemplates />} />
          <Route path="/cover-letter-templates" element={<CoverLetterTemplates />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/viewMore" element={<ViewMore />} /> {/* ✅ Added */}
          <Route path="/viewmore/aichatbot" element={<Aichatbot />} />
         <Route path="/viewmore/ecommerce" element={<Ecommerce />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/project-quote" element={<ProjectQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChat />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
