"use client";

import Layout from "@/components/Layout";
import {
  CUSTOMER_VOICES,
  FAQS,
  PROBLEMS_BOXES,
  SIX_STRENGTHS,
  STATS,
  VOICE_SAMPLES,
} from "@/constants";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Phone,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const TopPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div className="bg-salon-bg text-slate-700 font-sans selection:bg-salon-navy-light selection:text-white">
        {/* Hero Section - Botanical Healing */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Decor */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-salon-navy-light rounded-full blur-[100px] animate-float"></div>
            <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-salon-gold-light rounded-full blur-[80px] animate-float animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-salon-navy-light/20 px-4 py-2 rounded-full">
                  <Leaf size={16} className="text-salon-navy-light" />
                  <span className="text-salon-navy font-medium text-sm tracking-widest uppercase">
                    メンズエステ専門 電話代行
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-salon-navy leading-tight font-feature-settings-palt">
                  <span className="block text-2xl lg:text-3xl font-normal mb-4 text-slate-600">
                    サロン運営に、
                  </span>
                  心安らぐ
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">確かな対応</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-salon-gold-light/40 -z-0 rounded-full"></span>
                  </span>
                  を。
                </h1>

                <p className="text-lg text-slate-600 leading-loose max-w-lg">
                  まるで森林浴のような安心感を、貴店のお客様へ。
                  <br />
                  24時間365日、プロのオペレーターが丁寧に対応し、サロン様の成長を優しくサポートいたします。
                </p>

                <div className="flex flex-col sm:flex-row gap-5 pt-2">
                  <Link
                    href="/contact"
                    className="salon-btn-accent flex items-center justify-center gap-3 group text-lg shadow-lg hover:shadow-xl"
                  >
                    <Phone size={20} />
                    <span>無料相談をはじめる</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 rounded-full font-bold text-salon-navy bg-white border border-salon-gold-light hover:bg-salon-bg transition-all text-center shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <span>サービス詳細</span>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-salon-gold-light/30">
                  <p className="text-xs font-bold text-salon-gold mb-3 tracking-widest uppercase">
                    TRUSTED BY 500+ SALONS
                  </p>
                  <div className="flex gap-6 grayscale opacity-60">
                    {/* Placeholder for logos or trust marks */}
                    <div className="flex items-center gap-2">
                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-salon-navy"
                      />
                      <span className="font-bold">顧客満足度 No.1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-salon-navy" />
                      <span className="font-bold">24時間対応</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000"
                    alt="Relaxing Atmosphere"
                    className="object-cover h-[650px] w-full transform hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-salon-navy/40 to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <div className="absolute top-10 -left-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white z-20 max-w-xs animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-salon-gray rounded-full flex items-center justify-center text-salon-navy-light">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-salon-navy text-lg">
                        予約率UP
                      </p>
                      <p className="text-xs text-slate-500">
                        心地よい対応で成約へ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section - Gentle Checklist */}
        <section className="salon-section bg-white rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-navy-light font-bold tracking-widest text-sm uppercase mb-3 block">
                PROBLEMS
              </span>
              <h2 className="salon-heading-primary text-salon-navy">
                サロン運営の
                <br className="md:hidden" />
                お悩みはありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {PROBLEMS_BOXES.map((problem, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-5 bg-salon-gray p-6 rounded-2xl transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-salon-gold-light"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-salon-coral shadow-sm group-hover:scale-110 transition-transform">
                    <Leaf size={20} />
                  </div>
                  <p className="font-bold text-slate-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Clean & Organic */}
        <section className="salon-section bg-salon-bg">
          <div className="salon-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-3 block">
                  ACHIEVEMENTS
                </span>
                <h2 className="salon-heading-primary mb-6">
                  数字で見る、
                  <br />
                  信頼の証。
                </h2>
                <p className="text-slate-600 leading-loose mb-8">
                  多くのサロン様と共に歩み、成長してきました。
                  <br />
                  確かな実績が、私たちの誇りです。
                </p>
                <Link
                  href="/company"
                  className="font-bold text-salon-navy border-b border-salon-navy pb-1 hover:text-salon-coral hover:border-salon-coral transition-colors"
                >
                  会社概要を見る
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-salon-gold-light/30 flex flex-col items-center justify-center text-center aspect-square hover:-translate-y-1 transition-transform"
                  >
                    <p className="text-4xl lg:text-5xl font-bold text-salon-navy mb-2 font-mono">
                      {stat.value}
                    </p>
                    <p className="text-sm font-bold text-salon-gold">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strengths - Organic Cards */}
        <section className="salon-section bg-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          <div className="salon-container">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-salon-navy-light font-bold tracking-widest text-sm uppercase mb-3 block">
                OUR STRENGTHS
              </span>
              <h2 className="salon-heading-primary">選ばれる6つの理由</h2>
              <p className="text-slate-600">
                他社にはない、SalonConciergeだけのこだわり。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SIX_STRENGTHS.map((strength, idx) => (
                <div
                  key={idx}
                  className="group bg-salon-bg rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-salon-gold-light"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={strength.img}
                      alt={strength.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl text-salon-navy shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-salon-navy mb-4 leading-tight">
                      {strength.title.replace(/。/g, "")}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Samples - Elegant */}
        <section className="salon-section bg-salon-navy text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="salon-container relative z-10">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-3 block">
                VOICE SAMPLE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-feature-settings-palt">
                実際の音声を、
                <br />
                ご確認ください。
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {VOICE_SAMPLES.map((sample, idx) => (
                <div
                  key={idx}
                  className="bg-salon-navy-light/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors"
                >
                  <button className="w-14 h-14 rounded-full bg-salon-coral flex items-center justify-center text-white shadow-lg flex-shrink-0 hover:scale-105 transition-transform">
                    <Play size={24} className="ml-1 fill-current" />
                  </button>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{sample.title}</h3>
                    <p className="text-xs text-salon-gold-light opacity-80">
                      再生時間: {sample.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Voices - Simple Cards */}
        <section className="salon-section bg-salon-bg">
          <div className="salon-container">
            <div className="text-center mb-16">
              <span className="text-salon-navy-light font-bold tracking-widest text-sm uppercase mb-3 block">
                VOICES
              </span>
              <h2 className="salon-heading-primary">お客様の声</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CUSTOMER_VOICES.map((voice, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-[2rem] shadow-sm relative"
                >
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-salon-gold rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-md border-4 border-salon-bg">
                    "
                  </div>
                  <p className="text-slate-600 leading-loose italic mb-8">
                    {voice.comment}
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <img
                      src={`https://i.pravatar.cc/150?u=${idx + 20}`}
                      alt="Owner"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-salon-navy text-sm">
                        {voice.storeName}
                      </p>
                      <p className="text-xs text-slate-500">
                        {voice.ownerInfo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Accordion */}
        <section className="salon-section bg-white">
          <div className="salon-container max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-sm uppercase mb-3 block">
                FAQ
              </span>
              <h2 className="salon-heading-primary">よくあるご質問</h2>
            </div>

            <div className="space-y-4">
              {FAQS.slice(0, 5).map((faq, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-bold text-salon-navy group-hover:text-salon-navy-light transition-colors text-lg">
                      Q. {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-salon-gold transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === idx
                        ? "max-h-40 opacity-100 mb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed pl-6 border-l-2 border-salon-gold-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-salon-navy font-bold border-b border-salon-navy hover:text-salon-coral hover:border-salon-coral transition-colors pb-1"
              >
                <span>すべての質問を見る</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA - Organic Curved */}
        <section className="py-32 bg-salon-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px] fill-white"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="salon-container relative z-20 text-center text-white pt-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-feature-settings-palt">
              まずは、無料相談から。
            </h2>
            <p className="text-salon-gold-light text-lg mb-12 max-w-2xl mx-auto">
              サロン様の現状や課題をお聞かせください。
              <br />
              最適なプランをご提案させていただきます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="salon-btn-accent text-white flex items-center justify-center gap-3 text-lg"
              >
                <Phone size={22} />
                <span>無料相談を予約する</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
