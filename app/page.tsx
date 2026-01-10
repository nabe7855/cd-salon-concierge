"use client";

import Layout from "@/components/Layout";
import ColumnDetailPage from "@/pages/ColumnDetailPage";
import ColumnListPage from "@/pages/ColumnListPage";
import CompanyPage from "@/pages/CompanyPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import PartnersPage from "@/pages/PartnersPage";
import RecruitmentPage from "@/pages/RecruitmentPage";
import ServicesPage from "@/pages/ServicesPage";
import SystemPage from "@/pages/SystemPage";
import TopPage from "@/pages/TopPage";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const AppContent: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/system" element={<SystemPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/jobs" element={<RecruitmentPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/column" element={<ColumnListPage />} />
        <Route path="/column/:id" element={<ColumnDetailPage />} />
        <Route path="*" element={<TopPage />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
