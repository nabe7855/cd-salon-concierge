"use client";

import Layout from "@/components/Layout";
import { FAQS } from "@/constants";
import { Leaf } from "lucide-react";
import Link from "next/link";
import React from "react";

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-salon-light min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="container mx-auto px-4 pt-4 pb-2 text-[10px] text-gray-400">
          <Link href="/" className="hover:text-salon-pink">
            トップ
          </Link>{" "}
          &gt; <span className="text-gray-500 font-bold">Q&A</span>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Ornate Header Title */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="bg-salon-pink text-white px-20 py-2 rounded-lg text-2xl font-bold shadow-lg flex items-center gap-3 border-2 border-white/30">
                <Leaf size={24} className="opacity-80" />
                Q&A
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-salon-pink/50 rounded-tl-sm"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-salon-pink/50 rounded-tr-sm"></div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-salon-gold/20 overflow-hidden group hover:border-salon-pink/30 transition-colors"
              >
                {/* Question Row */}
                <div className="flex items-start gap-4 p-5 md:p-6 border-b border-salon-tan/10 bg-salon-tan/10">
                  <div className="w-10 h-10 bg-salon-pink text-white rounded-full flex items-center justify-center font-serif italic text-2xl flex-shrink-0 shadow-sm border border-white/20">
                    Q
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-sm md:text-base font-bold text-gray-700 leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* Answer Row */}
                <div className="flex items-start gap-4 p-5 md:p-6">
                  <div className="w-10 h-10 bg-white text-salon-gold rounded-full flex items-center justify-center font-serif italic text-2xl flex-shrink-0 border-2 border-salon-gold/30 shadow-inner">
                    A
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Breadcrumb */}
          <div className="mt-12 py-4 border-t border-gray-100">
            <nav className="text-[10px] text-gray-400">
              <Link href="/" className="hover:text-salon-pink">
                トップ
              </Link>{" "}
              &gt; <span className="text-gray-500">Q&A</span>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
