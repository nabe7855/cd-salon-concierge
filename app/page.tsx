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

// Content Data
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-botanical-primary-light/10 to-transparent rounded-l-[10rem] -z-10 transform translate-x-1/4"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-botanical-accent/5 rounded-full blur-3xl -z-10"></div>

          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in relative z-10">
              <span className="inline-flex items-center gap-2 bg-white border border-botanical-primary/20 text-botanical-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-sm">
                <Leaf
                  size={12}
                  className="fill-botanical-primary stroke-none"
                />
                業界No.1の応答率・継続率
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-botanical-primary leading-[1.2]">
                メンズエステ専門
                <br />
                <span className="text-botanical-cta relative inline-block">
                  電話代行サービス
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-botanical-cta/10 -z-10 transform -rotate-1 rounded-sm"></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                お客様を逃さない
                <span className="text-botanical-primary font-bold">
                  24時間365日対応
                </span>
                。<br />
                受付業務はプロに任せて、
                <br className="md:hidden" />
                本業のサロン経営に集中できます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-cta text-lg px-8 py-4 shadow-xl hover:shadow-2xl ring-4 ring-botanical-cta/10"
                >
                  今すぐ無料相談する
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="#pricing"
                  className="btn-outline text-lg px-8 py-4 bg-white hover:bg-botanical-primary hover:text-white"
                >
                  資料を請求する
                </Link>
              </div>

              <div className="pt-6 flex items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-botanical-cta" />{" "}
                  初期費用0円
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-botanical-cta" />{" "}
                  即日スタート可
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-botanical-cta" />{" "}
                  全国対応
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Relaxing Salon Interior"
                  className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute bottom-12 -left-12 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-botanical-bg p-4 rounded-xl text-botanical-primary">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      信頼の実績
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-botanical-primary font-heading">
                        99.6
                      </span>
                      <span className="text-sm font-bold text-botanical-primary">
                        %
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-bold">
                      受電応答率
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="bg-white section-padding border-b border-gray-100 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-3 block opacity-70">
                PAIN POINTS
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                こんなお悩みはありませんか？
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-botanical-cta rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROBLEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-botanical-bg p-10 rounded-2xl border border-transparent text-center hover:border-botanical-primary/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-botanical-primary/5 rounded-bl-[4rem] transition-all group-hover:bg-botanical-primary/10"></div>
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-botanical-cta shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={36} strokeWidth={1.5} />
                  </div>
                  <p className="font-bold text-gray-700 leading-loose text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-botanical-primary/5 to-botanical-primary/10 p-8 rounded-2xl max-w-4xl mx-auto border border-botanical-primary/10">
              <p className="font-bold text-botanical-primary text-xl font-heading leading-relaxed">
                その課題、SalonConciergeが解決します。
                <br className="hidden md:block" />
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
          {/* Decorative Pattern using CSS Grid or SVG could go here */}
          <div className="container-custom">
            <div className="text-center mb-20">
              <span className="text-botanical-cta font-bold tracking-widest text-xs uppercase mb-3 block">
                OUR STRENGTHS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">
                選ばれる6つの理由
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-botanical-bg rounded-xl text-botanical-primary group-hover:bg-botanical-primary group-hover:text-white transition-colors duration-300">
                      <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 pt-1">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-7 pl-[3.75rem]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-white relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-3 block opacity-70">
                PRICING
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                安心の料金プラン
              </h2>
              <p className="text-gray-500 mt-4 text-sm md:text-base">
                初期費用0円キャンペーン実施中。リスクなく始められます。
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row transform transition-transform hover:scale-[1.01]">
              <div className="p-12 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-botanical-primary"></div>
                <h3 className="text-2xl font-bold text-botanical-primary mb-8 flex items-center gap-3 font-heading">
                  スタンダードプラン
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-botanical-cta mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <span className="font-bold text-gray-800 text-lg block mb-1">
                        初期費用{" "}
                        <span className="text-red-500 text-xl mx-1">0円</span>{" "}
                        (キャンペーン中)
                      </span>
                      <span className="text-xs text-gray-400">
                        通常初期費用をお得にスタート
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-botanical-cta mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <span className="font-bold text-gray-800 text-lg block mb-1">
                        成果報酬 1,000円〜/件
                      </span>
                      <span className="text-xs text-gray-400">
                        予約が確定した分だけのお支払い
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-botanical-cta mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <span className="font-bold text-gray-800 text-lg block mb-1">
                        月額費用 スポット対応可
                      </span>
                      <span className="text-xs text-gray-400">
                        繁忙期だけの利用も可能です
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-12 md:w-1/3 bg-botanical-primary text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-50 pattern-grid-lg"></div>
                <div className="relative z-10">
                  <p className="text-sm font-bold opacity-90 mb-2 uppercase tracking-widest">
                    Pricing Start From
                  </p>
                  <p className="text-5xl font-bold mb-1 font-heading">¥1,000</p>
                  <p className="text-sm opacity-80 mb-8">〜 / 1件 (税込)</p>

                  <Link
                    href="/contact"
                    className="block w-full bg-white text-botanical-primary font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    無料見積り
                  </Link>
                  <p className="text-[10px] mt-4 opacity-60">
                    ※契約期間・解約金の縛りなし
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                最短3営業日で開始
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                違約金なし
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                全国対応
              </span>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="section-padding bg-botanical-bg/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-cta font-bold tracking-widest text-xs uppercase mb-3 block">
                FLOW
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                導入までの流れ
              </h2>
            </div>

            <div className="relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-[18px] left-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-y-8"></div>

              <div className="grid md:grid-cols-4 gap-8">
                {FLOW_STEPS.map((flow, idx) => (
                  <div key={idx} className="relative group">
                    <div className="w-16 h-16 bg-white border-4 border-botanical-bg rounded-full flex items-center justify-center font-bold text-xl text-botanical-primary mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:border-botanical-cta transition-all duration-300 relative z-10">
                      {flow.step}
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center h-[calc(100%-80px)] hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-800 mb-3 font-heading">
                        {flow.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {flow.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center text-botanical-cta font-bold hover:underline"
              >
                詳しい流れを見る <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-3 block opacity-70">
                VOICE
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                導入サロン様の声
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className="bg-botanical-bg p-8 rounded-2xl relative"
                >
                  <div className="absolute top-8 right-8 text-botanical-primary/10">
                    <MessageSquare size={48} fill="currentColor" />
                  </div>
                  <div className="flex gap-4 items-center mb-6">
                    <div
                      className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 bg-cover bg-center border-2 border-white shadow-sm"
                      style={{
                        backgroundImage: `url('https://i.pravatar.cc/150?u=salon${
                          i + 5
                        }')`,
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">
                        {i === 0 ? "東京都 港区 A店様" : "大阪府 北区 B店様"}
                      </p>
                      <div className="flex text-yellow-500 text-[10px] mt-1 space-x-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Users
                            key={j}
                            size={12}
                            fill="currentColor"
                            className={j < 4 ? "" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm leading-7 mb-4 relative z-10">
                    {i === 0
                      ? "「以前は施術中の電話に出られず、多くの予約を逃していました。導入後は応答率がほぼ100%になり、売上が前年比130%にアップ。スタッフも施術に集中でき、サービス品質が向上しました。」"
                      : "「24時間対応のおかげで、深夜帯の取りこぼしがなくなりました。LINE予約の返信も早く、お客様からの信頼感が上がったと感じています。システムも使いやすく、管理が楽になりました。」"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 bg-botanical-primary relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="container-custom relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-botanical-bg text-lg mb-12 max-w-2xl mx-auto font-medium">
              導入前の疑問や不安な点など、どんなことでもお気軽にご相談ください。
              <br />
              しつこい営業は一切いたしません。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-botanical-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-xl text-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Phone size={22} className="fill-botanical-primary" />
                無料相談を予約する
              </Link>
              <Link
                href="#pricing"
                className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-botanical-primary transition-all text-lg backdrop-blur-sm"
              >
                料金・プランを見る
              </Link>
            </div>
            <p className="mt-8 text-xs opacity-60 flex items-center justify-center gap-2">
              <ShieldCheck size={14} />
              オンライン相談・登録はSSL暗号化通信で守られています
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TopPage;
