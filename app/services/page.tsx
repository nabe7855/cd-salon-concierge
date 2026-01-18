"use client";

import Layout from "@/components/Layout";
import {
  DETAILED_FREE_SERVICES,
  DETAILED_FREE_SYSTEMS,
  DETAILED_PAID_SERVICES,
} from "@/constants";
import { CheckCircle2, ChevronRight, Phone, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"support" | "system" | "option">(
    "support"
  );

  return (
    <Layout>
      <div className="bg-salon-light/30 min-h-screen font-sans">
        {/* Breadcrumbs */}

        {/* --- Hero Section: Story-Led with Integrated Pricing --- */}
        <section className="relative overflow-hidden bg-botanical-primary pt-24 pb-20 md:pt-32 md:pb-24">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-8 leading-tight tracking-wide flex flex-col items-center">
              <span className="whitespace-nowrap">
                最高水準の品質のサービスを
              </span>
              <span className="whitespace-nowrap">
                <span className="text-salon-gold">業界最安値</span>
                でお届けします。
              </span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed text-sm md:text-base font-light">
              メンズエステ経営の課題を、運営サポートとITシステムの力で包括的に解決。
              <br className="hidden md:block" />
              オーナー様は、本来の「経営」と「キャストマネジメント」に集中してください。
            </p>

            {/* Pricing Cards Integrated into Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-20">
              {/* Plan 1: Initial */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative group hover:bg-white/20 transition-all text-white">
                <span className="block text-white/60 text-xs font-bold tracking-widest mb-2">
                  STEP 1
                </span>
                <h3 className="text-lg font-bold mb-2">初期費用</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold font-heading">5</span>
                  <span className="text-sm opacity-80 pb-1">万円</span>
                </div>
                <div className="inline-block bg-white text-botanical-primary text-[10px] px-2 py-1 rounded-full font-bold mb-4">
                  期間限定 (通常10万円)
                </div>
                <p className="text-[11px] opacity-70 leading-relaxed border-t border-white/20 pt-3">
                  システム設定、HP調整、導入研修など、開始に必要な準備をすべて含みます。
                </p>
              </div>

              {/* Plan 2: Monthly */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative group hover:bg-white/20 transition-all text-white">
                <span className="block text-white/60 text-xs font-bold tracking-widest mb-2">
                  STEP 2
                </span>
                <h3 className="text-lg font-bold mb-2">月額基本料金</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold font-heading">3</span>
                  <span className="text-sm opacity-80 pb-1">万円</span>
                </div>
                <ul className="text-xs opacity-80 space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-salon-gold" />
                    全部屋数・キャスト数 無制限
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-salon-gold" />
                    システム利用料込み
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-salon-gold" />
                    24時間365日サポート
                  </li>
                </ul>
              </div>

              {/* Plan 3: Commission */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative group hover:bg-white/20 transition-all text-white">
                <span className="block text-white/60 text-xs font-bold tracking-widest mb-2">
                  STEP 3
                </span>
                <h3 className="text-lg font-bold mb-2">成約報酬</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold font-heading">1,000</span>
                  <span className="text-sm opacity-80 pb-1">円/件</span>
                </div>
                <p className="text-[11px] opacity-70 leading-relaxed border-t border-white/20 pt-3">
                  成果が出た分だけのお支払い。
                  <br />
                  問合せやキャンセルは含みません。
                  <br />
                  <span className="text-salon-gold font-bold mt-1 block">
                    ※月間500件以上で割引あり
                  </span>
                </p>
              </div>
            </div>

            <p className="text-white/60 text-[10px] mt-8 text-right px-4">
              ※価格はすべて税抜き表示です。
            </p>
          </div>
        </section>

        {/* --- Service Details: Tabbed UI --- */}
        <section className="py-20 bg-salon-light/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl text-botanical-primary font-bold font-heading mb-4">
                サービス詳細
              </h2>
              <p className="text-gray-500 text-sm">
                必要な機能はすべて揃っています。
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("support")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all shadow-md ${
                  activeTab === "support"
                    ? "bg-salon-gold text-white scale-105"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Phone size={18} />
                運営サポート(無料)
              </button>
              <button
                onClick={() => setActiveTab("system")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all shadow-md ${
                  activeTab === "system"
                    ? "bg-botanical-primary text-white scale-105"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Sparkles size={18} />
                ITシステム(無料)
              </button>
              <button
                onClick={() => setActiveTab("option")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all shadow-md ${
                  activeTab === "option"
                    ? "bg-gray-800 text-white scale-105"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Zap size={18} />
                オプション(有料)
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "support" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {DETAILED_FREE_SERVICES.map((item, idx) => (
                    <ServiceCardV2
                      key={idx}
                      item={item}
                      colorClassName="text-salon-gold"
                    />
                  ))}
                </div>
              )}
              {activeTab === "system" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {DETAILED_FREE_SYSTEMS.map((item, idx) => (
                    <ServiceCardV2
                      key={idx}
                      item={item}
                      colorClassName="text-botanical-primary"
                    />
                  ))}
                </div>
              )}
              {activeTab === "option" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {DETAILED_PAID_SERVICES.map((item, idx) => (
                    <ServiceCardV2
                      key={idx}
                      item={item}
                      colorClassName="text-gray-700"
                      isOption
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- Footer CTA: Flow & Contact --- */}
        <section className="bg-botanical-primary text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-salon-gold/20 rounded-full blur-[80px]"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">
              最短3日で導入スタート
            </h2>
            <p className="text-white/80 mb-12 max-w-xl mx-auto text-sm">
              お申込みから運用開始まで、専任のコンシェルジュがフルサポートいたします。
              まずは現在の状況をお聞かせください。
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-botanical-primary font-bold flex items-center justify-center mb-2">
                    1
                  </div>
                  <span>お問い合わせ</span>
                </div>
                <ChevronRight className="hidden md:block text-white/50" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-botanical-primary font-bold flex items-center justify-center mb-2">
                    2
                  </div>
                  <span>ヒアリング</span>
                </div>
                <ChevronRight className="hidden md:block text-white/50" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-botanical-primary font-bold flex items-center justify-center mb-2">
                    3
                  </div>
                  <span>システム設定</span>
                </div>
                <ChevronRight className="hidden md:block text-white/50" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salon-gold text-white font-bold flex items-center justify-center mb-2 shadow-lg scale-110">
                    4
                  </div>
                  <span className="font-bold text-salon-gold">運用開始</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="tel:050-5443-1770"
                className="bg-white text-botanical-primary py-4 px-10 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                050-5443-1770
              </a>
              <Link
                href="/contact"
                className="bg-salon-gold text-white py-4 px-10 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-yellow-600 transition-all"
              >
                無料相談・お見積り
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// --- Sub-components for V2 ---

const ServiceCardV2: React.FC<{
  item: any; // Using any to match existing constants structure without defining full type here
  colorClassName: string;
  isOption?: boolean;
}> = ({ item, colorClassName, isOption }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start text-left group hover:shadow-md transition-shadow h-full hoverborder-salon-gold/30">
      <div
        className={`bg-gray-50 p-3 rounded-xl mb-4 ${colorClassName} group-hover:bg-opacity-80 transition-colors`}
      >
        {/* Lucide icons need simple casting if coming from a mixed source, or just render */}
        {React.isValidElement(item.icon) ? (
          React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })
        ) : (
          <Sparkles size={24} />
        )}
      </div>
      <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
        {item.title}
        {isOption && (
          <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded">
            Option
          </span>
        )}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
    </div>
  );
};

export default ServicesPage;
