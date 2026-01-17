"use client";

import Layout from "@/components/Layout";
import { FAQS } from "@/constants";
import Link from "next/link";
import React from "react";

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-botanical-bg/30 min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="container mx-auto px-4 pt-4 pb-12 text-[10px] text-gray-400">
          <Link href="/" className="hover:text-botanical-primary">
            トップ
          </Link>{" "}
          &gt; <span className="text-gray-500 font-bold">Q&A</span>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Title with Chat Bubbles Icon */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="relative">
              {/* Back bubble */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#D4A373] rounded-full rounded-tr-none transform -scale-x-100 border-2 border-white shadow-sm flex items-center justify-center"></div>
              {/* Front bubble */}
              <div className="relative w-12 h-12 bg-white rounded-full rounded-bl-none border-2 border-[#D4A373] shadow-md flex items-center justify-center z-10">
                <span className="text-xl font-bold text-gray-700">?</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 font-heading tracking-wide">
              サービスに関するよくある質問
            </h1>
          </div>

          {/* FAQ List - Chat Style */}
          <div className="space-y-8">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-6"
              >
                {/* Question */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6FA1F2] text-white rounded-xl rounded-br-none flex items-center justify-center font-bold text-xl shadow-sm mt-1">
                    Q
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-700 pt-2 leading-relaxed">
                    {faq.question}
                  </h3>
                </div>

                {/* Answer */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4266A4] text-white rounded-xl rounded-br-none flex items-center justify-center font-bold text-xl shadow-sm mt-1">
                    A
                  </div>
                  <div className="pt-2 flex-1">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    {idx === 0 && (
                      <Link
                        href="/contact"
                        className="inline-block mt-3 text-sm text-gray-500 underline hover:text-botanical-primary"
                      >
                        詳しくはお問い合わせください。
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Breadcrumb */}
          <div className="mt-16 py-4 border-t border-gray-200">
            <nav className="text-[10px] text-gray-400">
              <Link href="/" className="hover:text-botanical-primary">
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
