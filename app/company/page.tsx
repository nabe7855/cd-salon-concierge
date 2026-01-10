"use client";

import Layout from "@/components/Layout";
import {
  Building2,
  Calendar,
  Globe,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const CompanyPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-salon-light min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600 font-bold">運営会社</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-20 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-block bg-white p-4 rounded-full shadow-sm mb-6 border border-salon-tan">
              <Building2 size={32} className="text-salon-pink" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-wider mb-8">
              運営会社
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
              サロンコンシェルジュは、メンズエステ業界の更なる発展と
              <br />
              健全な店舗運営を支えるために設立されました。
            </p>
          </div>
        </section>

        {/* Info Table Container */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[40px] shadow-2xl border border-salon-tan/30 overflow-hidden relative">
              {/* Decorative background leaf */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <Leaf size={300} className="text-salon-gold" />
              </div>

              <div className="p-8 md:p-16 space-y-0 relative z-10">
                {[
                  {
                    icon: <Globe size={18} />,
                    label: "屋号",
                    val: "サロンコンシェルジュ",
                  },
                  {
                    icon: <Building2 size={18} />,
                    label: "名称",
                    val: "サロコン株式会社",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "所在地",
                    val: "東京都港区北青山二丁目7番13号 プラセオ青山ビル3階",
                  },
                  {
                    icon: <Calendar size={18} />,
                    label: "設立",
                    val: "2022年4月1日",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "事業内容",
                    val: "メンズエステサロン向け電話代行サービス・マーケティング支援・コンサルティング業務",
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "連絡先",
                    val: "050-5443-1770",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row py-8 border-b border-salon-tan/20 last:border-0 group"
                  >
                    <div className="md:w-1/3 flex items-center gap-3 text-salon-pink font-bold text-sm mb-2 md:mb-0">
                      <span className="p-2 bg-salon-pink/5 rounded-lg group-hover:bg-salon-pink/10 transition-colors">
                        {row.icon}
                      </span>
                      {row.label}
                    </div>
                    <div className="md:w-2/3 text-gray-600 text-sm md:text-base leading-relaxed md:pt-1">
                      {row.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Block */}
            <div className="mt-16 bg-salon-pink/5 p-8 md:p-12 rounded-[40px] border border-salon-pink/10 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-6">ビジョン</h2>
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto italic">
                「最高の接客を、全ての店舗に。」
                <br />
                <br />
                私たちは、電話一本の対応から店舗のブランド価値を高め、リピーター獲得に貢献します。
                スタッフの皆様が現場のサービスに集中できるよう、予約受付という重要な役割を責任を持って代行いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-5xl mt-12 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">運営会社</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyPage;
