"use client";

import Layout from "@/components/Layout";
import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  JapaneseYen,
  Leaf,
  MapPin,
  Send,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const RecruitmentPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="bg-[#fff9fa] border-b border-salon-pink/10">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt;{" "}
            <span className="text-gray-600 font-bold">採用情報（求人）</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-16 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-salon-pink/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 text-salon-pink font-bold text-xs tracking-widest mb-4 bg-salon-pink/5 px-4 py-1 rounded-full uppercase">
              Join our team
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-8">
              オペレーター募集
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto border-t border-salon-tan pt-8">
              サロンコンシェルジュでは、明るく前向きに業務に取り組んでいただける
              <br className="hidden md:block" />
              電話応対オペレーターを随時募集しています。
              <br />
              業界未経験の方でも充実したレクチャーがありますので安心してご応募ください。
            </p>
          </div>
        </section>

        {/* Features Row */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <Clock size={24} />,
                  label: "シフト自由",
                  sub: "週2〜OK",
                },
                {
                  icon: <JapaneseYen size={24} />,
                  label: "高時給",
                  sub: "随時昇給あり",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "駅チカ",
                  sub: "アクセス抜群",
                },
                {
                  icon: <CheckCircle2 size={24} />,
                  label: "未経験歓迎",
                  sub: "研修制度充実",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-salon-light p-6 rounded-3xl text-center border border-salon-tan shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-salon-pink mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="font-bold text-sm text-gray-700">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Details Card */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[40px] shadow-2xl border border-salon-tan/30 overflow-hidden">
              <div className="bg-salon-pink px-8 py-6 text-white flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  募集要項 <ClipboardCheck size={20} />
                </h2>
                <Leaf size={24} className="opacity-50" />
              </div>

              <div className="p-8 md:p-12 space-y-0">
                {[
                  {
                    label: "職種",
                    val: "電話応対オペレーター（メンズエステの予約受付業務）",
                  },
                  {
                    label: "仕事内容",
                    val: "メンズエステサロンの予約受付、問い合わせ対応、セラピストへの連絡業務等。",
                  },
                  {
                    label: "時給",
                    val: "1,400円 〜 2,000円（随時昇給あり・深夜割増あり）",
                  },
                  {
                    label: "勤務時間",
                    val: "9:30 〜 翌4:00（シフト制：週2回〜/1日5時間〜）",
                  },
                  {
                    label: "待遇・福利厚生",
                    val: "交通費支給・雇用保険・社会保険完備・扶養控除内相談可・丁寧なレクチャー研修あり",
                  },
                  {
                    label: "求める人物像",
                    val: "明るく丁寧な対応ができる方、責任感を持ってお仕事に取り組める方、未経験でもPCの基本操作ができる方。",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row py-6 border-b border-gray-100 last:border-0 hover:bg-salon-light/30 transition-colors"
                  >
                    <div className="md:w-1/3 font-bold text-gray-700 text-sm mb-2 md:mb-0 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-salon-pink rounded-full"></div>
                      {row.label}
                    </div>
                    <div className="md:w-2/3 text-gray-600 text-sm leading-relaxed">
                      {row.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider with Star */}
        <div className="flex justify-center py-10">
          <Star
            className="text-salon-gold fill-salon-gold opacity-50"
            size={16}
          />
        </div>

        {/* Application Form */}
        <section className="pb-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800">
                エントリーフォーム
              </h2>
              <p className="text-xs text-gray-400 mt-2">
                採用をご希望の方は下記より必要事項をご入力ください
              </p>
            </div>

            <form className="bg-salon-tan/20 p-8 md:p-12 rounded-[40px] border border-salon-tan/50 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 ml-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-salon-tan rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    placeholder="姓名"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 ml-1">
                    フリガナ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-salon-tan rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    placeholder="セイメイ"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 ml-1">
                    年齢 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full bg-white border border-salon-tan rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    placeholder="例：24"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 ml-1">
                    最寄り駅 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-salon-tan rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    placeholder="例：新宿駅"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-600 ml-1">
                  メッセージ（志望動機など）
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-salon-tan rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 resize-none"
                  placeholder="こちらにご記入ください"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button className="bg-salon-pink text-white px-20 py-4 rounded-full font-bold shadow-xl hover:bg-salon-blue transition-all flex items-center gap-2 group">
                  送信する{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-5xl mt-20 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">採用情報（求人）</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default RecruitmentPage;
