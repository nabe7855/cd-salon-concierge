"use client";

import Layout from "@/components/Layout";
import {
  BarChart3,
  CalendarCheck,
  Clock,
  FileText,
  Globe,
  Mic,
  Monitor,
  PhoneCall,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SystemPage: React.FC = () => {
  const [activeCrmIndex, setActiveCrmIndex] = React.useState(0);
  const [activeCtiIndex, setActiveCtiIndex] = React.useState(0);

  const ctiFeatures = [
    {
      title: "ポップアップ表示",
      desc: "受電と同時に顧客カルテをPC画面に自動表示。お名前を呼ぶ「おもてなし」を、着信の瞬間からスタートできます。",
      icon: <Monitor size={20} />,
      img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "全通話 常時録音",
      desc: "全ての通話をクラウドに自動記録。「言った・言わない」のトラブルを未然に防ぎ、応対品質の改善にも活用します。",
      icon: <Mic size={20} />,
      img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "セキュリティ連携",
      desc: "大切な顧客情報は、堅牢なセキュリティ下で管理。CTI連携により、手動検索の手間とミスを同時に削減します。",
      icon: <ShieldCheck size={20} />,
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "複数回線の同時通話",
      desc: "お客様からのご予約のお電話が重なっても問題ありません。各クライアント様に合った回線数を用意し、オペレーターがチームとなって対応致します。1日のご予約数が多い店舗様でもご予約のお電話を取りこぼすことはありません。",
      icon: <PhoneCall size={20} />,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "月度報告書の送付",
      desc: "各月ごとの総受電本数や総通話時間、予約件数やその経路別の内訳等をリスト化し、月度報告書としてクライアント様に送付しています。電話代行業務を安心してお任せいただけるように営業の透明化を図り、健全な運営を心がけております。",
      icon: <FileText size={20} />,
      img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const crmFeatures = [
    {
      title: "予約状況の確認",
      desc: "全店舗の空き枠をリアルタイムで一元管理。複雑なシフトも直感的なUIで瞬時に把握し、予約の取りこぼしを防ぎます。",
      icon: <Clock size={20} />,
      img: "/booking_management_jp_luxury_1768682865590.png",
    },
    {
      title: "顧客情報の管理",
      desc: "来店履歴や好みの詳細までをデジタルカルテ化。過去のデータを武器に、一人ひとりに寄り添った個別の「おもてなし」を実現します。",
      icon: <Users size={20} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "セラピストの登録",
      desc: "スタッフのスキルや稼働状況をきめ細かく設定可能。現場の負担を最小限に抑えつつ、最適な人員配置と効率的な運営をサポートします。",
      icon: <Zap size={20} />,
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "売上レポート",
      desc: "経営数値は全て自動集計。分析ダッシュボードが店舗の「今」を可視化。データに基づいた確信ある意思決定を加速させ、売上の最大化に貢献します。",
      icon: <BarChart3 size={20} />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen font-sans selection:bg-salon-gold selection:text-white">
        {/* --- Hero Section: Outcome Focused --- */}
        <section className="relative bg-botanical-primary text-white py-32 overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-salon-gold rounded-full blur-[120px]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8">
                <span className="text-salon-gold">取りこぼしゼロ</span>と
                <br />
                <span className="text-salon-gold">顧客満足度</span>を両立する、
                <br />
                高機能な受電インフラ。
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                機会損失を防ぎ、売上を最大化する。
                <br />
                徹底的に磨き上げられた2つの独自システムが、
                <br />
                貴社の店舗運営を劇的に進化させます。
              </p>
            </div>
          </div>
        </section>

        {/* --- Logic Section: Why High Quality? --- */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-salon-light rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-salon-gold/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
                    <img
                      src="/4.jpg"
                      alt="Dashboard"
                      className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold font-heading text-botanical-primary mb-6">
                  なぜ、高品質な
                  <br />
                  代行ができるのか？
                </h2>
                <div className="w-20 h-1 bg-salon-gold mb-8"></div>
                <p className="text-gray-600 leading-loose mb-8">
                  それは、オペレーターのスキルだけに頼らない
                  <br />
                  <strong className="text-botanical-primary border-b border-salon-gold/50">
                    「仕組み」があるから
                  </strong>
                  です。
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  弊社は独自の<strong>CTIシステム（電話統合）</strong>と
                  <strong>CRMシステム（顧客管理）</strong>
                  をシームレスに連携。
                  <br />
                  着信と同時にお客様情報を表示し、過去の履歴に基づいた
                  「個客」対応を実現します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Text Area */}
              <div className="md:w-1/2">
                <span className="text-salon-gold font-bold tracking-widest text-sm block mb-2">
                  SYSTEM 01
                </span>
                <h2 className="text-3xl font-bold font-heading text-botanical-primary mb-6">
                  CTIシステム
                  <span className="block text-xs font-normal text-gray-400 mt-2 tracking-wider uppercase">
                    Computer Telephony Integration
                  </span>
                </h2>
                <div className="w-20 h-1 bg-salon-gold mb-8"></div>

                <div className="space-y-4">
                  {ctiFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer group/item border ${
                        activeCtiIndex === idx
                          ? "bg-salon-light border-salon-gold/20 shadow-md translate-x-2"
                          : "hover:bg-gray-50 border-transparent"
                      }`}
                      onMouseEnter={() => setActiveCtiIndex(idx)}
                      onClick={() => setActiveCtiIndex(idx)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                          activeCtiIndex === idx
                            ? "bg-botanical-primary text-white rotate-[360deg] scale-110"
                            : "bg-gray-100 text-botanical-primary group-hover/item:bg-gray-200"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`text-lg font-bold transition-colors duration-300 ${
                              activeCtiIndex === idx
                                ? "text-botanical-primary"
                                : "text-gray-700 group-hover/item:text-botanical-primary"
                            }`}
                          >
                            {feature.title}
                          </h3>
                        </div>
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            activeCtiIndex === idx
                              ? "grid-rows-[1fr] opacity-100 mt-2"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <p className="overflow-hidden text-gray-500 text-sm leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image / Mockup Area */}
              <div className="md:w-1/2">
                <div className="relative group">
                  {/* Decorative Blob */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-botanical-primary/5 rounded-full blur-[80px]"></div>

                  {/* Mockup Frame */}
                  <div className="relative bg-gray-900 p-4 rounded-3xl shadow-2xl overflow-hidden aspect-[16/10] border-4 border-gray-800">
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-800/50 backdrop-blur-sm z-10 flex items-center px-4 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>

                    {/* Active Image Content */}
                    <div className="relative w-full h-full pt-6">
                      {ctiFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            activeCtiIndex === idx
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-110 pointer-events-none"
                          }`}
                        >
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex items-end p-8">
                            <div className="text-white">
                              <span className="text-salon-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
                                CTI Connectivity
                              </span>
                              <h4 className="text-xl font-bold">
                                {feature.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- System 02: CRM (Left/Right Asymmetric) --- */}
        <section className="py-24 bg-botanical-primary text-white overflow-hidden relative">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              {/* Image / Mockup Area */}
              <div className="md:w-1/2">
                <div className="relative group">
                  {/* Decorative Blob */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-salon-gold/30 rounded-full blur-[80px]"></div>

                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl shadow-2xl overflow-hidden aspect-[16/10]">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Active Image with Fade-in Effect */}
                    <div className="relative w-full h-full">
                      {crmFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            activeCrmIndex === idx
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-105 translate-y-4 pointer-events-none"
                          }`}
                        >
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-full object-cover rounded-xl shadow-inner"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-botanical-primary/40 to-transparent flex items-end p-6">
                            <span className="text-white text-xs font-bold tracking-widest bg-salon-gold/80 px-3 py-1 rounded backdrop-blur-sm">
                              {feature.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Area */}
              <div className="md:w-1/2">
                <span className="text-salon-gold font-bold tracking-widest text-sm block mb-2">
                  SYSTEM 02
                </span>
                <h2 className="text-3xl font-bold font-heading mb-6">
                  CRMシステム
                  <span className="block text-xs font-normal text-gray-400 mt-2 tracking-wider">
                    Customer Relationship Management
                  </span>
                </h2>
                <div className="w-20 h-1 bg-salon-gold mb-8"></div>

                <div className="space-y-4">
                  {crmFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer group/item border ${
                        activeCrmIndex === idx
                          ? "bg-white/10 border-white/20 shadow-xl translate-x-2"
                          : "hover:bg-white/5 border-transparent"
                      }`}
                      onMouseEnter={() => setActiveCrmIndex(idx)}
                      onClick={() => setActiveCrmIndex(idx)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                          activeCrmIndex === idx
                            ? "bg-salon-gold text-botanical-primary rotate-[360deg] scale-110"
                            : "bg-white/10 text-salon-gold group-hover/item:bg-white/20"
                        }`}
                      >
                        {feature.icon || <Zap size={20} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`text-lg font-bold transition-colors duration-300 ${
                              activeCrmIndex === idx
                                ? "text-salon-gold"
                                : "text-white/80 group-hover/item:text-white"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          {activeCrmIndex === idx && (
                            <Zap
                              size={14}
                              className="text-salon-gold animate-pulse"
                            />
                          )}
                        </div>
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            activeCrmIndex === idx
                              ? "grid-rows-[1fr] opacity-100 mt-2"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <p className="overflow-hidden text-gray-300 text-sm leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-gray-500 mt-8 italic">
                  ※こちらのCRMシステムはMr.Venryのサポート対象です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- System 03: Web & Design --- */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading text-botanical-primary">
                店舗運営を加速させる
                <br />
                ウェブソリューション
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Web Booking System */}
              <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative">
                  <img
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000"
                    alt="Web Booking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50">
                    <CalendarCheck
                      className="text-botanical-primary"
                      size={24}
                    />
                  </div>
                </div>
                <div className="px-8 pb-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    WEB予約システム
                  </h3>
                  <p className="text-gray-600 text-sm leading-loose mb-6">
                    メンズエステに特化した直感的な予約インターフェースを無料で提供。
                    CRMシステムと完全同期するため、Webからの予約も電話窓口と同じ顧客データで一元管理。
                    現場のダブルブッキングを防ぎ、24時間365日、予約の自動受付を可能にします。
                  </p>
                </div>
              </div>

              {/* Website Production */}
              <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                    alt="Website Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50">
                    <Globe className="text-botanical-primary" size={24} />
                  </div>
                </div>
                <div className="px-8 pb-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    独自ホームページ制作
                  </h3>
                  <p className="text-gray-600 text-sm leading-loose mb-6">
                    最新のデザイントレンドを抑えつつ、集客に特化したサイトを低価格で制作。
                    CRMや予約システムとシームレスに連携。単なる紹介サイトではなく、
                    お店の「売上を創る窓口」として、立ち上げ後の運用まで考慮した高品質なサイトをご提供します。
                  </p>

                  {/* Pricing Box */}
                  <div className="bg-botanical-primary/5 rounded-2xl p-6 border border-botanical-primary/10">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xs text-gray-400">初期費用</span>
                      <span className="text-xl font-bold text-gray-800 font-heading">
                        ¥20,000
                      </span>
                      <span className="text-xs text-gray-400 ml-2">月額</span>
                      <span className="text-xl font-bold text-salon-gold font-heading">
                        ¥10,000〜
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400">
                      ※ロゴ・バナー製作等のオプションも柔軟に対応可能です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Closing Section --- */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-8">
              システムがあるからこそ、
              <br />
              <span className="text-botanical-primary">人間味のある対応</span>
              ができる。
            </h2>
            <p className="text-gray-500 leading-loose mb-12">
              私たちはテクノロジーを「効率化」のためだけには使いません。
              <br />
              面倒な作業をシステムに任せることで、
              <br />
              生まれた時間と心の余裕を、お客様への「おもてなし」に注ぐために使うのです。
              <br />
              それが、Salon Conciergeの流儀です。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-salon-pink text-white px-12 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              導入のご相談はこちら
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SystemPage;
