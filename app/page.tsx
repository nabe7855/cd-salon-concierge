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
import {
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Phone,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const TopPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStrength, setActiveStrength] = useState(0);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Hero Section - Modern Split Layout */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 opacity-5"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Sparkles size={16} />
                  <span>メンズエステサロン専門</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  予約受付を
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                    次のレベルへ
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  SalonConciergeは、メンズエステサロンに特化した総合電話代行サービスです。
                  <br />
                  24時間365日、プロのオペレーターが貴店の予約受付を完全サポート。
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
                  >
                    <Phone size={20} />
                    <span>無料相談を予約</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-blue-600"
                  >
                    <span>サービス詳細</span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {[
                    { icon: Users, label: "500+", sub: "導入実績" },
                    { icon: Star, label: "4.9/5", sub: "顧客満足度" },
                    { icon: TrendingUp, label: "98%", sub: "継続率" },
                  ].map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <badge.icon size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {badge.label}
                        </div>
                        <div className="text-xs text-gray-500">{badge.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                    alt="Professional Service"
                    className="rounded-3xl shadow-2xl"
                  />
                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        24
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">対応時間</div>
                        <div className="text-lg font-bold text-gray-900">
                          24時間365日
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Card Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-gray-500 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-xs text-gray-400 space-y-1">
              <p>
                ※1 調査期間：2022年〜2024年
                調査方法：店舗閉鎖のため解約は含まない
              </p>
              <p>※2 調査期間：2022年〜2024年 調査方法：折返し架電含む</p>
              <p>
                ※3 別途：初期費用5万円、月額基本料金3万円、消費税がかかります。
              </p>
            </div>
          </div>
        </section>

        {/* Voice Samples - Modern Cards */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <MessageSquare size={16} />
                <span>VOICE SAMPLES</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                電話対応音声サンプル
              </h2>
              <p className="text-gray-600">
                プロフェッショナルなオペレーターの対応をご確認ください
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {VOICE_SAMPLES.map((sample, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Play size={20} fill="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {sample.title}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {sample.duration}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                      <button className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Play size={14} fill="white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems Section - Timeline Style */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                こんなお悩み、
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  ありませんか？
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {PROBLEMS_BOXES.map((problem, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-500"
                >
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    !
                  </div>
                  <p className="text-gray-800 font-medium pt-1">{problem}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl">
                <Zap size={20} />
                <span>SalonConciergeが全て解決します</span>
              </div>
            </div>
          </div>
        </section>

        {/* Six Strengths - Tab Style */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Star size={16} />
                <span>OUR STRENGTHS</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900">
                選ばれる6つの理由
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {SIX_STRENGTHS.map((strength, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStrength(idx)}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeStrength === idx
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {idx + 1}. {strength.title.split("。")[0]}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img
                    src={SIX_STRENGTHS[activeStrength].img}
                    alt={SIX_STRENGTHS[activeStrength].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl">
                    {activeStrength + 1}
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-black text-gray-900 mb-6">
                    {SIX_STRENGTHS[activeStrength].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {SIX_STRENGTHS[activeStrength].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features - Accordion Style */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                サービスの特徴
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <span>サービス詳細・料金を見る</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* System Features */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Zap size={16} />
                  <span>ADVANCED SYSTEM</span>
                </div>
                <h2 className="text-4xl font-black mb-6">
                  最先端のシステムで
                  <br />
                  効率的な運用を実現
                </h2>
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                  独自開発のCTIシステムとCRMシステムにより、常に効率的で安定した電話代行サービスを提供。
                  お客様のご要望に応じて、システムを継続的にアップデートしています。
                </p>
                <Link
                  href="/system"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>システム詳細</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="System"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Necessary Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                導入に必要なもの
              </h2>
              <p className="text-gray-600">
                シンプルな準備で、すぐにサービスをご利用いただけます
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {NECESSARY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl border border-emerald-100"
                >
                  <div className="text-emerald-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                ご利用の流れ
              </h2>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-500 hidden md:block"></div>

              <div className="space-y-8">
                {FLOW_STEPS_LIST.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl flex-shrink-0 relative z-10">
                      {idx + 1}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Voices */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Star size={16} />
                <span>TESTIMONIALS</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900">お客様の声</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CUSTOMER_VOICES.map((voice, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={`https://i.pravatar.cc/150?u=${idx + 10}`}
                      alt="Customer"
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {voice.storeName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {voice.ownerInfo}
                      </div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{voice.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Accordion */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                よくあるご質問
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.slice(0, 6).map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        Q
                      </div>
                      <span className="font-bold text-gray-900 pt-2">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-gray-400 transition-transform flex-shrink-0 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <div className="flex items-start gap-4 pl-14">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          A
                        </div>
                        <p className="text-gray-600 pt-2 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-blue-600"
              >
                <span>すべてのQ&Aを見る</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMjRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTEyIDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <h2 className="text-5xl font-black mb-6">
              今すぐ無料相談を
              <br />
              ご予約ください
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              専門スタッフが貴店のニーズに合わせた最適なプランをご提案いたします
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all hover:scale-105"
              >
                <Phone size={24} />
                <span>無料相談を予約</span>
                <ArrowRight size={24} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-white hover:bg-white/20 transition-all"
              >
                <span>料金プランを見る</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
