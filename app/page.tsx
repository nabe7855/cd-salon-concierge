"use client";

import Layout from "@/components/Layout";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Laptop,
  Leaf,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Content Data (Inline for specific design requirements)
const PROBLEMS = [
  { icon: Phone, text: "電話が多すぎて、施術中に予約を取りこぼしている…" },
  {
    icon: MessageSquare,
    text: "LINEやWEB予約の返信が遅れ、機会損失になっている…",
  },
  {
    icon: Clock,
    text: "深夜や早朝の問い合わせに対応できず、売上を逃している…",
  },
];

const FEATURES = [
  {
    title: "メンズエステ業界特化",
    desc: "業界経験豊富な専任オペレーターが対応。SMS案内やCRM入力など、特有の業務もスムーズにこなします。",
    icon: Sparkles,
  },
  {
    title: "予約チャネル全網羅",
    desc: "電話・LINE・WEB全ての予約を代行。オーナー様は施術と接客に集中でき、成約率が向上します。",
    icon: Smartphone,
  },
  {
    title: "24時間365日対応",
    desc: "朝9時から翌朝5時まで、年中無休で受付。深夜のゴールデンタイムも逃しません。",
    icon: Clock,
  },
  {
    title: "完全成果報酬型",
    desc: "初期費用0円、予約確定1件1,000円〜。固定費のリスクなく、安心して導入いただけます。",
    icon: BarChart3,
  },
  {
    title: "強力なシステム提供",
    desc: "CTI・WEB予約・顧客管理システムを無料で提供。データの一元管理で経営を効率化します。",
    icon: Laptop,
  },
  {
    title: "トータルサポート",
    desc: "電話代行だけでなく、集客コンサルやHP制作など、サロン経営をワンストップで支援します。",
    icon: Users,
  },
];

const FLOW_STEPS = [
  {
    step: "01",
    title: "お問い合わせ",
    desc: "お電話またはフォームよりお気軽にご連絡ください。",
  },
  {
    step: "02",
    title: "ヒアリング",
    desc: "現状の課題やご要望をお伺いし、最適なプランをご提案します。",
  },
  {
    step: "03",
    title: "契約・準備",
    desc: "マニュアル作成やシステム設定を行います（最短3営業日）。",
  },
  {
    step: "04",
    title: "運用開始",
    desc: "オペレーター研修完了後、サービスを開始します。",
  },
];

const TopPage: React.FC = () => {
  return (
    <Layout>
      <div className="font-sans text-botanical-text bg-botanical-bg">
        {/* Sticky Header with prominent CTA */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container-custom py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-botanical-primary rounded-lg flex items-center justify-center text-white">
                <span className="font-heading font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-botanical-primary leading-none font-heading">
                  SalonConcierge
                </h1>
                <span className="text-[10px] text-gray-500 tracking-wider">
                  メンズエステ専門電話代行
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link
                href="#features"
                className="hover:text-botanical-primary transition-colors"
              >
                サービス特徴
              </Link>
              <Link
                href="#pricing"
                className="hover:text-botanical-primary transition-colors"
              >
                料金プラン
              </Link>
              <Link
                href="#flow"
                className="hover:text-botanical-primary transition-colors"
              >
                導入の流れ
              </Link>
              <Link href="/contact" className="btn-cta text-sm py-2 px-6">
                お問い合わせ・見積り
              </Link>
            </div>

            {/* Mobile Menu Icon (Placeholder) */}
            <div className="lg:hidden text-botanical-primary">
              <span className="text-xs font-bold border border-botanical-primary px-2 py-1 rounded">
                MENU
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-botanical-primary-light/10 rounded-l-[10rem] -z-10 transform translate-x-20"></div>

          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block bg-botanical-bg border border-botanical-primary/20 text-botanical-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-2">
                業界No.1の実績
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-botanical-primary leading-tight">
                メンズエステサロン専門
                <br />
                <span className="text-botanical-cta">電話代行予約サービス</span>
              </h2>
              <p className="text-lg md:text-xl font-bold text-gray-700">
                お客様を逃さない24時間対応。
                <br />
                受付業務はプロに任せて、本業に集中できます。
              </p>
              <p className="text-gray-500 leading-relaxed max-w-md">
                月間予約数アップを実現する、高品質なオペレーションシステム。
                <br />
                初期費用0円から、リスクなく始められます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-cta text-lg px-8 py-4 shadow-lg hover:shadow-xl"
                >
                  今すぐ相談する
                  <ArrowRight size={20} />
                </Link>
                <Link href="#pricing" className="btn-outline text-lg px-8 py-4">
                  資料請求
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000"
                  alt="Relaxing Botanical Atmosphere"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-botanical-cta z-20 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-botanical-bg p-3 rounded-full text-botanical-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      応答率
                    </p>
                    <p className="text-2xl font-bold text-botanical-primary">
                      99.6%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="bg-white section-padding border-b border-gray-100">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                PAIN POINTS
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                こんなお悩みはありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROBLEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-botanical-bg p-8 rounded-xl border border-dashed border-botanical-primary/30 text-center hover:border-solid hover:border-botanical-primary transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-botanical-cta shadow-sm mb-6 group-hover:bg-botanical-cta group-hover:text-white transition-colors">
                    <item.icon size={32} />
                  </div>
                  <p className="font-bold text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-botanical-primary/5 p-6 rounded-lg max-w-3xl mx-auto">
              <p className="font-bold text-botanical-primary text-lg">
                その課題、SalonConciergeが解決します。
                <br />
                機会損失を防ぎ、サロンの売上最大化に貢献します。
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="section-padding bg-botanical-bg relative"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-cta font-bold tracking-widest text-xs uppercase mb-2 block">
                OUR STRENGTHS
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                選ばれる6つの理由
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="card-base hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-botanical-primary/20 hover:border-t-botanical-cta"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-botanical-bg rounded-lg text-botanical-primary">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="section-padding bg-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                PRICING
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                安心の料金プラン
              </h2>
              <p className="text-gray-500 mt-4">
                初期費用0円キャンペーン実施中。リスクなく始められます。
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100">
                <h3 className="text-2xl font-bold text-botanical-primary mb-6 flex items-center gap-2">
                  <Leaf
                    size={24}
                    className="fill-botanical-primary stroke-none opacity-50"
                  />
                  スタンダードプラン
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-botanical-cta" size={20} />
                    <span className="font-bold text-gray-700">
                      初期費用： <span className="text-red-500">0円</span>{" "}
                      (キャンペーン中)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-botanical-cta" size={20} />
                    <span className="font-bold text-gray-700">
                      成果報酬： 予約確定 1,000円〜/件
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-botanical-cta" size={20} />
                    <span className="font-bold text-gray-700">
                      月額費用： 必要時のみ (スポット可)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-botanical-cta" size={20} />
                    <span className="text-gray-600">
                      契約期間の縛りなし・解約金なし
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-10 md:w-1/3 bg-botanical-primary text-white flex flex-col justify-center items-center text-center">
                <p className="text-sm opacity-80 mb-2">まずは無料でお見積り</p>
                <p className="text-3xl font-bold mb-6">
                  ¥1,000<span className="text-sm font-normal">〜/件</span>
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-botanical-primary font-bold py-3 px-6 rounded-full w-full hover:bg-gray-100 transition-colors"
                >
                  問い合わせる
                </Link>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              ※価格は全て税込表示です。プラン詳細はお問い合わせください。
            </p>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="section-padding bg-botanical-bg">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-cta font-bold tracking-widest text-xs uppercase mb-2 block">
                FLOW
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                導入までの流れ
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {FLOW_STEPS.map((flow, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full relative z-10">
                    <span className="text-4xl font-bold text-botanical-primary/10 absolute top-4 right-4">
                      {flow.step}
                    </span>
                    <h3 className="font-bold text-lg text-botanical-primary mb-3">
                      {flow.title}
                    </h3>
                    <p className="text-sm text-gray-600">{flow.desc}</p>
                  </div>
                  {idx < FLOW_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                導入サロン様の声
              </h2>
              <p className="text-gray-500 mt-4">
                業界トップ200店舗以上の実績。多くのオーナー様に選ばれています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-6 bg-botanical-bg p-8 rounded-xl items-start"
                >
                  <div
                    className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://i.pravatar.cc/150?u=salon${i}')`,
                    }}
                  ></div>
                  <div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Users key={j} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="italic text-gray-600 mb-4 text-sm">
                      {i === 0
                        ? "「導入して人件費を60%削減できました。オペレーターの質も高く、お客様からの評判も上々です。もっと早く導入すればよかったです。」"
                        : "「深夜帯の予約取りこぼしがなくなり、初月から売上が20%アップしました。システムも使いやすく、管理が楽になりました。」"}
                    </p>
                    <p className="font-bold text-botanical-primary text-sm">
                      {i === 0
                        ? "A店 オーナー様 (東京都)"
                        : "B店 店長様 (大阪府)"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 bg-botanical-primary relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
          <div className="container-custom relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-botanical-bg text-lg mb-10 max-w-2xl mx-auto">
              導入前の疑問や不安な点など、どんなことでもお気軽にご相談ください。
              <br />
              無理な勧誘は一切ございません。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-botanical-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg flex items-center justify-center gap-2"
              >
                <Phone size={22} />
                無料相談を予約する
              </Link>
              <Link
                href="#pricing"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-botanical-primary transition-colors text-lg"
              >
                料金・プランを見る
              </Link>
            </div>
            <p className="mt-8 text-sm opacity-70 flex items-center justify-center gap-2">
              <ShieldCheck size={16} />
              オンライン相談・登録はSSL暗号化通信で安全です
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
