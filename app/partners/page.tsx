"use client";

import Layout from "@/components/Layout";
import { Handshake, Leaf, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const PartnersPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="bg-salon-light border-b border-salon-tan/20">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600 font-bold">協力会社募集</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-20 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center justify-center bg-salon-blue/5 p-4 rounded-2xl mb-8">
              <Handshake size={48} className="text-salon-blue" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-wider mb-6">
              協力会社募集
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
              サロンコンシェルジュでは、更なるサービス向上と事業拡大に伴い、
              <br className="hidden md:block" />
              パートナーシップを築いていただける協力会社様を募集しております。
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "業務提携",
                  desc: "メンズエステ業界に特化した電話代行サービスの共同開発や提供。",
                },
                {
                  title: "顧客紹介",
                  desc: "貴社クライアント様への弊社サービスのご紹介。紹介手数料等のご相談も可能です。",
                },
                {
                  title: "共同企画",
                  desc: "業界を盛り上げるためのセミナー開催やメディア露出、新規事業の立案など。",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <h3 className="text-salon-blue font-bold text-lg mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form CTA with Leaf Decoration */}
        <section className="relative pb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Leaf size={120} className="text-salon-gold" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-salon-tan/10 rounded-[40px] p-8 md:p-16 border border-salon-tan/30">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  提携に関するお問い合わせ
                </h2>
                <p className="text-[10px] text-gray-400">
                  提携をご検討の企業様は下記よりご連絡ください
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="貴社名"
                    className="w-full bg-white border border-salon-tan/50 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-salon-blue/10"
                  />
                  <input
                    type="text"
                    placeholder="ご担当者名"
                    className="w-full bg-white border border-salon-tan/50 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-salon-blue/10"
                  />
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full bg-white border border-salon-tan/50 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-salon-blue/10"
                  />
                  <input
                    type="tel"
                    placeholder="電話番号"
                    className="w-full bg-white border border-salon-tan/50 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-salon-blue/10"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="提携内容等、具体的にご記入ください"
                  className="w-full bg-white border border-salon-tan/50 rounded-xl px-5 py-4 text-sm resize-none focus:ring-2 focus:ring-salon-blue/10"
                ></textarea>

                <div className="text-center pt-4">
                  <button className="bg-salon-blue text-white px-20 py-4 rounded-full font-bold shadow-xl hover:bg-salon-pink transition-all flex items-center gap-2 mx-auto">
                    お問い合わせを送信 <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-5xl mt-20 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">協力会社募集</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default PartnersPage;
