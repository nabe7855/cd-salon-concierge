"use client";

import Layout from "@/components/Layout";
import {
  CUSTOMER_VOICES,
  FAQS,
  PROBLEMS_BOXES,
  SERVICE_FEATURES,
  SIX_STRENGTHS,
  STATS,
  VOICE_SAMPLES,
} from "@/constants";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  Play,
  Star,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const TopPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div className="bg-salon-bg text-slate-800 font-sans">
        {/* Hero Section - Clean & Trustworthy */}
        <section className="relative min-h-[85vh] flex items-center bg-white border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block border-b-2 border-salon-gold pb-1">
                  <p className="text-salon-gold font-bold text-sm tracking-widest uppercase">
                    メンズエステサロン専門 電話代行サービス
                  </p>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-salon-navy leading-tight font-feature-settings-palt">
                  貴店の予約受付を、
                  <br />
                  <span className="text-salon-coral">プロフェッショナル</span>
                  に
                  <br />
                  お任せください。
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  SalonConcierge（サロンコンシェルジュ）は、メンズエステサロンに特化した高品質な電話代行サービスです。24時間365日、機会損失を防ぎ、売上アップに貢献します。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="salon-btn-accent text-center flex items-center justify-center gap-2 group"
                  >
                    <Phone size={20} />
                    <span>無料相談を予約する</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 rounded-md font-bold text-salon-navy border-2 border-salon-navy hover:bg-salon-navy hover:text-white transition-all text-center"
                  >
                    サービス詳細
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                  <div>
                    <p className="text-3xl font-bold text-salon-navy">No.1</p>
                    <p className="text-xs text-slate-500 mt-1">顧客満足度</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-salon-navy">500+</p>
                    <p className="text-xs text-slate-500 mt-1">導入実績</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-salon-navy">24h</p>
                    <p className="text-xs text-slate-500 mt-1">対応可能</p>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional Operator"
                  className="rounded-lg shadow-2xl relative z-10 object-cover h-[600px] w-full"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-salon-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-salon-navy/5 rounded-full blur-3xl"></div>
                <div className="absolute top-10 -left-12 bg-white p-6 rounded-lg shadow-xl border border-gray-100 z-20 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-salon-navy">予約確定率UP</p>
                      <p className="text-xs text-slate-500">
                        プロの対応で成約率改善
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <div className="bg-salon-navy text-white py-6">
          <div className="salon-container flex flex-wrap justify-between items-center gap-4 text-sm font-medium opacity-80">
            <span>業界最高水準のセキュリティ</span>
            <span className="hidden md:inline">|</span>
            <span>独自のCTI/CRMシステム</span>
            <span className="hidden md:inline">|</span>
            <span>専任オペレーター制</span>
            <span className="hidden md:inline">|</span>
            <span>徹底した守秘義務管理</span>
          </div>
        </div>

        {/* Problems Section - Checklist Style */}
        <section className="salon-section bg-salon-bg">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-coral font-bold tracking-widest text-sm uppercase mb-2 block">
                PROBLEMS
              </span>
              <h2 className="salon-heading-primary mb-6">
                このようなお悩みは
                <br />
                ありませんか？
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                日々のサロン運営において、電話対応に関する課題は尽きません。
                <br />
                SalonConciergeは、そのすべてを解決します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {PROBLEMS_BOXES.map((problem, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-salon-gold/30 transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm">!</span>
                  </div>
                  <p className="font-bold text-slate-700">{problem}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg font-bold text-salon-navy mb-4">
                その課題、SalonConciergeが解決します。
              </p>
              <p className="text-slate-600">
                機会損失ゼロへ。プロフェッショナルな対応で、売上と顧客満足度を同時に向上させます。
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section - Flat Grid */}
        <section className="salon-section bg-white">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-2 block">
                ACHIEVEMENTS
              </span>
              <h2 className="salon-heading-primary">数字で見る実績</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 border-r last:border-r-0 border-gray-100"
                >
                  <p className="text-sm font-bold text-slate-500 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-4xl lg:text-5xl font-bold text-salon-navy mb-2 font-feature-settings-palt">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400">{stat.note}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xs text-slate-400 max-w-2xl mx-auto">
                ※1 調査期間：2022年〜2024年
                調査方法：店舗閉鎖のため解約は含まない
                <br />
                ※2 調査期間：2022年〜2024年 調査方法：折返し架電含む
              </p>
            </div>
          </div>
        </section>

        {/* Strengths - Zigzag Layout */}
        <section className="salon-section bg-salon-gray">
          <div className="salon-container">
            <div className="text-center mb-20">
              <span className="text-salon-coral font-bold tracking-widest text-sm uppercase mb-2 block">
                OUR STRENGTHS
              </span>
              <h2 className="salon-heading-primary">選ばれる6つの理由</h2>
            </div>

            <div className="space-y-24">
              {SIX_STRENGTHS.map((strength, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 relative group">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-salon-gold/30 rounded-lg -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <img
                      src={strength.img}
                      alt={strength.title}
                      className="w-full h-80 object-cover rounded-lg shadow-md grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -top-6 -left-6 bg-white p-4 shadow-lg rounded-sm border-t-4 border-salon-coral">
                      <span className="text-4xl font-bold text-salon-navy font-mono">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-salon-navy mb-6 leading-tight">
                      {strength.title.replace(/。/g, "")}
                    </h3>
                    <p className="text-slate-600 leading-loose">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Samples - Clean Player */}
        <section className="salon-section bg-salon-navy text-white">
          <div className="salon-container">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-2 block">
                  VOICE SAMPLES
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  実際の音声を
                  <br />
                  お聞きください
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  弊社オペレーターの対応品質をご確認いただけます。
                  <br />
                  丁寧かつスムーズな案内で、大切なお客様を逃しません。
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-salon-navy px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
                >
                  お問い合わせはこちら
                </Link>
              </div>

              <div className="lg:w-2/3 grid gap-6">
                {VOICE_SAMPLES.map((sample, idx) => (
                  <div
                    key={idx}
                    className="bg-salon-navy-light p-6 rounded-lg border border-slate-600 hover:border-salon-gold transition-colors flex items-center gap-6"
                  >
                    <button className="w-12 h-12 bg-salon-coral rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white hover:text-salon-coral transition-colors">
                      <Play size={20} className="ml-1 fill-current" />
                    </button>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{sample.title}</h3>
                      <div className="w-full h-1 bg-slate-600 rounded-full mt-2 overflow-hidden">
                        <div className="w-1/3 h-full bg-salon-gold"></div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-slate-400">
                      {sample.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Features - Accordion-like Grid */}
        <section className="salon-section bg-white">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-coral font-bold tracking-widest text-sm uppercase mb-2 block">
                FEATURES
              </span>
              <h2 className="salon-heading-primary">サービスの特徴</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-salon-bg p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <span className="text-salon-gold font-bold font-mono text-xl">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-salon-navy">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="salon-btn-primary inline-flex items-center gap-2"
              >
                サービス詳細・料金プランを見る <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Voices - Grid */}
        <section className="salon-section bg-salon-gray">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-2 block">
                TESTIMONIALS
              </span>
              <h2 className="salon-heading-primary">お客様の声</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CUSTOMER_VOICES.map((voice, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={`https://i.pravatar.cc/150?u=${idx + 10}`}
                      alt="Owner"
                      className="w-14 h-14 rounded-full object-cover border-2 border-salon-bg"
                    />
                    <div>
                      <h4 className="font-bold text-salon-navy">
                        {voice.storeName}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {voice.ownerInfo}
                      </p>
                      <div className="flex text-salon-gold gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">
                      "
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed relative z-10 px-2 italic">
                      {voice.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="salon-section bg-white">
          <div className="salon-container max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-2 block">
                FAQ
              </span>
              <h2 className="salon-heading-primary">よくあるご質問</h2>
            </div>

            <div className="space-y-4">
              {FAQS.slice(0, 5).map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-salon-navy pr-8">
                      Q. {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 bg-salon-bg border-t border-gray-100 text-sm text-slate-600 leading-relaxed">
                      <span className="font-bold text-salon-coral mr-2">
                        A.
                      </span>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="text-salon-navy font-bold hover:text-salon-coral transition-colors border-b-2 border-salon-navy hover:border-salon-coral pb-1"
              >
                すべての質問を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-salon-navy text-white text-center">
          <div className="salon-container">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              まずは無料相談から
              <br />
              始めませんか？
            </h2>
            <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
              導入前の疑問や不安な点など、どんなことでもお気軽にご相談ください。
              <br />
              専任のスタッフが変わって丁寧にご案内いたします。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="salon-btn-accent flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                <span>無料相談を予約する</span>
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-salon-navy transition-all"
              >
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
