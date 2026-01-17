"use client";

import Layout from "@/components/Layout";
import { FAQS } from "@/constants";
import Link from "next/link";
import React from "react";

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-salon-light/20 min-h-screen pb-32 font-sans relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-botanical-primary/5 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-salon-gold/5 rounded-full blur-[120px] -ml-48 -mb-24 pointer-events-none"></div>

        {/* Header Title - Full Width Bar Section */}
        <section className="w-full bg-botanical-primary py-12 mb-20 shadow-lg text-center relative z-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold font-heading tracking-[0.3em]">
            よくあるご質問
          </h1>
        </section>

        {/* Main Container */}
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* FAQ List - Luxury Card Style */}
          <div className="space-y-12">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100/50 flex flex-col gap-10 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500"
              >
                {/* Question */}
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-14 h-14 bg-botanical-primary text-white rounded-[20px] rounded-br-none flex items-center justify-center font-bold text-2xl shadow-lg shadow-botanical-primary/20 mt-1 transform -rotate-3 group-hover:rotate-0 transition-transform">
                    Q
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 pt-2 leading-tight">
                    {faq.question}
                  </h3>
                </div>

                {/* Vertical Divider Line */}
                <div className="ml-7 md:ml-23 h-px bg-gray-100 w-full opacity-50"></div>

                {/* Answer */}
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-14 h-14 bg-salon-gold text-white rounded-[20px] rounded-br-none flex items-center justify-center font-bold text-2xl shadow-lg shadow-salon-gold/20 mt-1 transform rotate-3 group-hover:rotate-0 transition-transform">
                    A
                  </div>
                  <div className="pt-2 flex-1">
                    <p className="text-lg md:text-xl text-gray-600 leading-loose font-medium">
                      {faq.answer}
                    </p>
                    {idx === 0 && (
                      <div className="mt-8 pt-8 border-t border-gray-50">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm text-salon-gold font-bold bg-salon-gold/5 px-6 py-3 rounded-full border border-salon-gold/10 hover:bg-salon-gold hover:text-white transition-all duration-300"
                        >
                          詳しくはお問い合わせください ≫
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Breadcrumb */}
          <div className="mt-24 py-8 border-t border-gray-100 flex justify-center">
            <nav className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
              <Link
                href="/"
                className="hover:text-botanical-primary transition-colors"
              >
                Top
              </Link>{" "}
              &gt; <span className="text-gray-500 font-bold">Q&A</span>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
