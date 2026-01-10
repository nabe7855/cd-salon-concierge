"use client";

import Layout from "@/components/Layout";
import {
  CUSTOMER_VOICES,
  FAQS,
  FLOW_STEPS_LIST,
  NECESSARY_ITEMS,
  PROBLEMS_BOXES,
  SERVICE_FEATURES,
  SIX_STRENGTHS,
  STATS,
  VOICE_SAMPLES,
} from "@/constants";
import { ArrowRight, CheckCircle2, Leaf, Play, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center pt-8">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920"
              alt="Botanical Hero"
              className="w-full h-full object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="mb-6">
              <p className="text-salon-pink font-bold text-sm tracking-widest mb-2">
                メンズエステサロン専門の総合電話代行
              </p>
              <div className="flex justify-center items-center gap-2">
                <Leaf className="text-salon-pink w-10 h-10 animate-pulse" />
                <span className="text-salon-pink text-5xl font-bold tracking-tighter">
                  SalonConcierge
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-8">
              貴店の予約受付はサロンコンシェルジュに
              <br />
              全てお任せください
            </h1>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
              {[
                { label: "電話予約", sub: "対応" },
                { label: "WEB", sub: "予約" },
                { label: "LINE", sub: "対応" },
                { label: "SMS", sub: "対応" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-salon-tan rounded-full flex flex-col items-center justify-center text-salon-pink border border-salon-pink/30 shadow-sm animate-float">
                    <span className="text-xs font-bold leading-none">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold leading-none">
                      {item.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-salon-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-center md:text-left">
                <p className="text-salon-pink font-bold text-lg mb-1">
                  メンズエステ電話代行
                </p>
                <div className="flex items-end gap-2 text-salon-pink font-bold mb-4">
                  <span className="text-sm">顧客満足度</span>
                  <span className="text-6xl font-serif italic leading-none">
                    No.1
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-salon-pink flex-shrink-0" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-lg text-gray-700">
                        {stat.label}
                      </span>
                      <span className="text-2xl font-bold text-salon-blue">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {stat.note}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="pt-4 text-[10px] text-gray-400 space-y-1">
                  <p>
                    ※1 調査期間：2022年〜2024年
                    調査方法：店舗閉鎖のため解約は含まない
                  </p>
                  <p>※2 調査期間：2022年〜2024年 調査方法：折返し架電含む</p>
                  <p>
                    ※3
                    別途：初期費用5万円、月額基本料金3万円、消費税がかかります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Samples Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                電話対応音声サンプル
              </h2>
              <Play className="w-8 h-8 text-salon-pink" />
            </div>
            <p className="text-gray-500 mb-12">
              弊社オペレーターの受付音声サンプルです。
              <br />
              サービス利用時のご参考になさってください
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=400"
                  alt="Operator"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl ring-4 ring-salon-tan"
                />
              </div>
              <div className="lg:w-2/3 space-y-8 w-full max-w-md">
                {VOICE_SAMPLES.map((sample, idx) => (
                  <div
                    key={idx}
                    className="bg-salon-light p-6 rounded-3xl border border-salon-tan"
                  >
                    <p className="text-sm font-bold text-gray-700 mb-4">
                      {sample.title}
                    </p>
                    <div className="flex items-center gap-4 bg-white p-2 rounded-full border border-gray-100">
                      <button className="bg-salon-pink p-2 rounded-full text-white hover:opacity-90 transition-opacity">
                        <Play size={16} fill="white" />
                      </button>
                      <div className="flex-1 h-1 bg-gray-100 rounded-full">
                        <div className="w-1/3 h-full bg-salon-pink rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-400">
                        0:00 / {sample.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Banner Strip */}
        <section className="bg-salon-pink py-4">
          <div className="container mx-auto px-4 flex justify-between items-center text-white font-bold text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <Leaf size={24} className="opacity-80" />
              <span>SalonConcierge</span>
              <span className="text-sm font-normal">なら</span>
            </div>
            <div className="flex gap-4 md:gap-12">
              <span className="hidden sm:inline">応対品質を徹底</span>
              <span className="hidden sm:inline">優れたシステム</span>
              <span className="hidden sm:inline">コスト削減</span>
            </div>
          </div>
        </section>
        <div className="py-8 bg-white text-center">
          <h3 className="text-xl font-bold text-salon-pink mb-4">
            メンズエステサロン特有の対応に特化し、貴店のお仕事をお支えします
          </h3>
          <div className="inline-flex flex-col items-center">
            <span className="text-xs text-red-500 font-bold mb-1 underline">
              注意喚起
            </span>
            <p className="text-xs text-gray-500">
              こちらの当店公式ホームページの内容を無断転載している業者にご注意下さい。
            </p>
          </div>
        </div>

        {/* Problems Section */}
        <section className="relative py-20 bg-salon-light">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920"
              alt="Problem BG"
              className="w-full h-full object-cover opacity-5"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="inline-block bg-salon-gold text-white px-10 py-2 rounded-full text-2xl font-bold mb-6 shadow-md">
                こんなことでお困りの方へ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {PROBLEMS_BOXES.map((problem, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm border border-salon-gold/20"
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six Strengths Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="inline-block bg-salon-pink text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
                サロンコンシェルジュ 6つの強み
              </h2>
            </div>
            <div className="space-y-16">
              {SIX_STRENGTHS.map((strength, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative">
                      <span className="absolute -top-4 -left-4 w-10 h-10 bg-salon-pink text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                        {idx + 1}
                      </span>
                      <img
                        src={strength.img}
                        alt={strength.title}
                        className="w-full h-56 object-cover rounded-xl shadow-md border-4 border-white"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-salon-pink pb-2 inline-block">
                      {idx + 1}. {strength.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features Section */}
        <section className="py-20 bg-salon-tan">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="inline-block bg-salon-gold text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
                サービスの特徴
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-2/3 order-2 lg:order-1">
                {SERVICE_FEATURES.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-salon-gold/30"
                  >
                    <h3 className="text-salon-pink font-bold mb-2 text-center border-b border-salon-gold pb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
                <div className="md:col-span-2 text-center pt-8">
                  <Link
                    href="/services"
                    className="inline-block bg-salon-pink text-white px-12 py-4 rounded-full font-bold shadow-xl hover:bg-salon-blue transition-all text-lg"
                  >
                    サービスの詳細、料金はこちら ≫
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/3 order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                  alt="Features"
                  className="rounded-[40px] shadow-2xl border-8 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* System Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center bg-salon-light rounded-3xl p-8 lg:p-16 border border-salon-tan relative overflow-hidden">
              <div className="md:w-1/2 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                  alt="System"
                  className="rounded-3xl shadow-xl border-4 border-white"
                />
              </div>
              <div className="md:w-1/2 relative z-10 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  <div className="w-8 h-8 bg-salon-gold rounded-full flex items-center justify-center shadow-sm">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    システムの特徴
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  弊社は独自のCTIシステムとCRMシステム（顧客管理システム）を導入しているので、常に効率的で安定した電話代行が可能です。そして今も店舗様のご要望に応じてシステムをブラッシュアップさせています。
                </p>
                <Link
                  href="/system"
                  className="inline-block bg-salon-gold text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-salon-pink transition-all"
                >
                  システム詳細はこちら ≫
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Necessary Items Section */}
        <section className="py-20 bg-salon-tan">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="mb-12">
              <h2 className="inline-block bg-salon-blue text-white px-10 py-2 rounded-full text-2xl font-bold mb-6 shadow-lg">
                代行業務スタートに必要なもの
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NECESSARY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl text-gray-800 text-left flex gap-6 border border-salon-blue/20 shadow-sm"
                >
                  <div className="flex-shrink-0 pt-2 text-salon-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 border-b border-salon-blue/20 pb-1 text-salon-blue">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section className="py-20 bg-salon-light">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="mb-12">
              <h2 className="inline-block bg-white text-salon-pink px-12 py-3 rounded-full text-2xl font-bold shadow-md border border-salon-pink/20">
                ご利用の流れ
              </h2>
            </div>
            <div className="space-y-4">
              {FLOW_STEPS_LIST.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white w-full p-4 rounded-full shadow-sm flex items-center gap-4 border border-salon-tan">
                    <span className="w-8 h-8 bg-salon-pink text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-gray-700 font-medium text-left flex-1">
                      {step}
                    </p>
                  </div>
                  {idx < FLOW_STEPS_LIST.length - 1 && (
                    <div className="text-salon-gold py-1">▼</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Voices Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="inline-block bg-salon-pink text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
                お客様の声
              </h2>
            </div>
            <div className="space-y-12">
              {CUSTOMER_VOICES.map((voice, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-4 border-salon-tan shadow-md">
                    <img
                      src={`https://i.pravatar.cc/150?u=${idx + 10}`}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 bg-salon-light p-6 rounded-3xl relative border border-salon-tan shadow-sm">
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-salon-light border-l border-b border-salon-tan rotate-45 hidden md:block ${
                        idx % 2 === 1 ? "-right-2" : "-left-2"
                      }`}
                    ></div>
                    <p className="text-sm text-gray-700 leading-relaxed italic mb-4">
                      "{voice.comment}"
                    </p>
                    <div className="text-right">
                      <p className="text-xs font-bold text-salon-pink">
                        {voice.storeName} {voice.ownerInfo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Snippet Section */}
        <section className="py-20 bg-salon-tan">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="inline-block bg-salon-gold text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
                Q&A
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.slice(0, 4).map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-salon-gold/20"
                >
                  <div className="flex items-start gap-4 p-4 border-b border-gray-50 bg-salon-gold/5">
                    <span className="w-8 h-8 bg-salon-gold text-white rounded-full flex items-center justify-center font-serif italic text-xl flex-shrink-0 shadow-sm">
                      Q
                    </span>
                    <p className="text-sm font-bold text-gray-800 pt-1">
                      {faq.question}
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-4">
                    <span className="w-8 h-8 bg-salon-tan text-salon-gold rounded-full flex items-center justify-center font-serif italic text-xl flex-shrink-0 border border-salon-gold/20 shadow-inner">
                      A
                    </span>
                    <p className="text-sm text-gray-600 pt-1">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-block bg-salon-pink text-white px-12 py-3 rounded-full font-bold shadow-lg hover:bg-salon-blue transition-all"
              >
                Q&Aの続きを見る ≫
              </Link>
            </div>
          </div>
        </section>

        {/* Column Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-salon-pink inline-block pb-2 px-8">
                コラム
              </h2>
            </div>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start bg-salon-light p-6 rounded-2xl border border-salon-tan shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1573163231162-80111d4d41d9?auto=format&fit=crop&q=80&w=400"
                  alt="Column"
                  className="w-full md:w-64 h-48 object-cover rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    メンズエステの営業時間について
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    メンズエステを経営して「もう少し売上を伸ばしたい」と考えたとき、まず見直したいのが営業時間です。午前中や深夜早朝は集客が厳しいと思われがちであり、その時間に問い合わせを受けられる体制を整えるだけで、売上を大きく伸ばせる可能性があります。
                  </p>
                  <button className="text-salon-pink font-bold hover:underline flex items-center gap-1">
                    続きを読む <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start bg-salon-light p-6 rounded-2xl border border-salon-tan shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400"
                  alt="Column"
                  className="w-full md:w-64 h-48 object-cover rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    人気の高いセラピストさんの特徴とは？
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    メンズエステに訪れるお客様は「心も体も癒されたい」との思いから足を運ばれる方が多いと思います。マッサージ技術や高いセラピストさんに越したことはない心地よいものですが、実際に「何度も通いたい」と思う大人気セラピストさんには...
                  </p>
                  <button className="text-salon-pink font-bold hover:underline flex items-center gap-1">
                    続きを読む <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
