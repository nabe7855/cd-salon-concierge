"use client";

import Layout from "@/components/Layout";
import {
  DETAILED_FREE_SERVICES,
  DETAILED_FREE_SYSTEMS,
  DETAILED_PAID_SERVICES,
} from "@/constants";
import { Leaf, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#f0f4f0] min-h-screen pb-20 font-sans">
        {/* Breadcrumbs */}
        <div className="bg-white/50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt;{" "}
            <span className="text-gray-600 font-bold">サービス詳細・料金</span>
          </div>
        </div>

        {/* Hero Section - Ornate Title and Ellipse Image */}
        <section className="pt-12 pb-20 overflow-hidden text-center">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Ornate Title Box */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="bg-salon-gold text-white px-20 py-2 text-2xl font-bold flex items-center justify-center border-[3px] border-white outline outline-1 outline-salon-gold rounded-sm shadow-lg">
                  サービス詳細・料金
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-salon-gold bg-[#f0f4f0]"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-salon-gold bg-[#f0f4f0]"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-salon-gold bg-[#f0f4f0]"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-salon-gold bg-[#f0f4f0]"></div>
              </div>
            </div>

            {/* Ellipse Hero Image */}
            <div className="relative mx-auto max-w-3xl">
              <div className="rounded-[100%] overflow-hidden border-8 border-white shadow-2xl aspect-[1.8/1] relative">
                <img
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1200"
                  alt="Operators"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-salon-blue/5"></div>
              </div>
              {/* Sparkles Decoration */}
              <div className="absolute -top-4 -right-4 text-salon-gold animate-pulse">
                <Sparkles size={40} />
              </div>
              <div className="absolute -bottom-4 -left-4 text-salon-pink animate-pulse delay-700">
                <Sparkles size={32} />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 max-w-5xl">
          {/* FREE SERVICES SECTION */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-block bg-salon-gold text-white px-24 py-2 rounded-lg text-xl font-bold shadow-md border-b-4 border-salon-gold/50">
                無料サービス
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DETAILED_FREE_SERVICES.map((service, idx) => (
                <ServiceBox key={idx} item={service} themeColor="salon-gold" />
              ))}
            </div>
          </section>

          {/* FREE SYSTEMS SECTION */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-block bg-salon-gold text-white px-24 py-2 rounded-lg text-xl font-bold shadow-md border-b-4 border-salon-gold/50">
                無料システム
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DETAILED_FREE_SYSTEMS.map((system, idx) => (
                <ServiceBox key={idx} item={system} themeColor="salon-gold" />
              ))}
            </div>
          </section>

          {/* PAID SERVICES SECTION */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-block bg-[#f69494] text-white px-24 py-2 rounded-lg text-xl font-bold shadow-md border-b-4 border-red-200">
                有料サービス
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DETAILED_PAID_SERVICES.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  item={service}
                  themeColor="#f69494"
                  isPaid
                />
              ))}
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="mb-20 py-20 relative text-center">
            {/* Leaf Decoration Top */}
            <div className="flex justify-center mb-8">
              <Leaf className="text-salon-gold/40 w-16 h-16 transform rotate-[-45deg]" />
            </div>

            <div className="relative inline-block mb-12">
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-px bg-red-400 rotate-[-45deg]"></div>
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-px bg-red-400 rotate-[-45deg]"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-red-400 tracking-wider">
                成約報酬制 この内容で業界最安級
              </h2>
              <div className="flex justify-center gap-1 mt-1">
                <div className="w-10 h-px bg-red-300"></div>
                <div className="w-10 h-px bg-red-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {/* Box 1 */}
              <div className="bg-white border-2 border-red-400 p-6 rounded-lg shadow-md flex flex-col justify-center min-h-[160px]">
                <p className="text-red-400 font-bold text-xl mb-1">
                  初期費用5万円
                </p>
                <p className="text-[10px] text-red-300">
                  通常10万円のところ
                  <br />
                  期間限定特別価格実施中
                </p>
              </div>
              {/* Box 2 */}
              <div className="bg-white border-2 border-salon-gold p-6 rounded-lg shadow-md flex flex-col justify-center min-h-[160px]">
                <p className="text-gray-700 font-bold text-lg mb-1">
                  月額基本料金3万円
                </p>
                <p className="text-[10px] text-gray-400">
                  上記無料サービス・システムを
                  <br />
                  全て含みます
                  <br />
                  ルーム数等による変動なし
                </p>
              </div>
              {/* Box 3 */}
              <div className="bg-white border-2 border-salon-blue p-6 rounded-lg shadow-md flex flex-col justify-center min-h-[160px]">
                <p className="text-salon-blue font-bold text-xl mb-1">
                  1成約：1,000円
                </p>
                <p className="text-[10px] text-salon-blue/60">
                  問合せ・キャンセルは
                  <br />
                  含みません
                </p>
              </div>
            </div>

            <div className="text-red-400 text-xs font-bold space-y-1 mb-16">
              <p>※別途消費税10%</p>
              <p>
                ※月間予約数500件以上で成約単価100円、1000件以上で単価200円の割引をさせていただきます。
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[40px] shadow-xl border border-salon-tan max-w-2xl mx-auto">
              <p className="text-red-400 font-bold text-lg mb-8 tracking-widest">
                ご相談・お見積りはこちら
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:050-5443-1770"
                  className="bg-[#f69494] text-white py-4 rounded-xl flex flex-col items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Phone size={20} /> 050-5443-1770
                  </div>
                  <span className="text-[10px] opacity-90 mt-1">
                    受付時間 9:30 - 翌4:00
                  </span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="bg-white border-2 border-[#f69494] text-[#f69494] py-3 rounded-xl flex flex-col items-center justify-center hover:bg-red-50 transition-colors"
                  >
                    <div className="bg-[#f69494] text-white px-2 rounded-full text-[10px] font-bold h-5 flex items-center mb-1">
                      LINE
                    </div>
                    <span className="text-[10px] font-bold">24時間受付</span>
                  </a>
                  <Link
                    href="/contact"
                    className="bg-[#f69494] text-white py-3 rounded-xl flex flex-col items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <span className="text-[11px] font-bold leading-tight">
                      お問い合わせフォーム
                    </span>
                    <span className="text-[10px] opacity-90 mt-1">
                      24時間受付
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Leaf Bottom */}
            <div className="mt-20 flex justify-center opacity-40">
              <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-salon-gold to-transparent"></div>
            </div>
          </section>
        </div>

        {/* Footer Nav Links Breadcrumb */}
        <div className="container mx-auto px-4 max-w-5xl mt-12 pb-12">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">サービス詳細・料金</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

// Sub-component for Service Cards
const ServiceBox: React.FC<{
  item: any;
  themeColor: string;
  isPaid?: boolean;
}> = ({ item, themeColor, isPaid }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow h-full">
      <div className="mb-4 relative">
        <div className="text-salon-gold/20 absolute -top-1 -left-1">
          <Sparkles size={16} />
        </div>
        <div className="text-salon-gold/20 absolute -bottom-1 -right-1">
          <Sparkles size={16} />
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`p-2 rounded-full mb-1 ${
              isPaid ? "text-[#f69494]" : "text-salon-gold"
            }`}
          >
            {item.icon}
          </div>
          <h3
            className={`font-bold text-sm tracking-tight ${
              isPaid ? "text-[#f69494]" : "text-salon-gold"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>
      <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
    </div>
  );
};

export default ServicesPage;
