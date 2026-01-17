"use client";

import Layout from "@/components/Layout";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Leaf,
  MessageSquare,
  Phone,
  ShieldCheck,
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
    title: "メンズエステサロン特有の対応に特化",
    subtitle: "専門性",
    desc: "SMS案内、LINE予約、セラピストとの連携など、メンズエステならではの複雑なオペレーションを完全網羅。貴店のこだわりを最大限に反映した、オーダーメイドな対応を実現します。",
    detail: "業界特有のニーズを熟知した専門的な対応力",
    image: "/images/features/feature-specialized.png",
  },
  {
    title: "オペレーター全員の対応品質を徹底",
    subtitle: "高品質",
    desc: "現場経験者による厳しい研修をパスした正規スタッフのみが担当。単なる「電話受け」ではなく、一本一本の電話を確実に来店へとつなげる、ホスピタリティ溢れる応対をお約束します。",
    detail: "成約率を最大化する「受付プロフェッショナル集団」",
    image: "/images/features/feature-quality.png",
  },
  {
    title: "スタート前の準備を徹底",
    subtitle: "サポート",
    desc: "導入前に詳細なヒアリングを行い、独自の対応マニュアルを作成。顧客情報の移行やコース設定、セラピスト管理まで、専門スタッフがすべて代行するため、手間なく即戦力の体制を構築できます。",
    detail: "スムーズな導入を支える、貴店専用の運営マニュアル",
    image: "/images/features/feature-preparation.png",
  },
  {
    title: "様々なシステムを無料でご提供",
    subtitle: "DX支援",
    desc: "CTI、WEB予約、顧客管理、IP電話まで、運営に必要なITツールをすべて無料で提供。スマホ一台で全データを一元管理できるため、日々のタスクを大幅に削減し、経営に集中できる環境を整えます。",
    detail: "DX化で運営効率を劇的に高める、無料提供システム",
    image: "/images/features/feature-system.png",
  },
  {
    title: "ホームページ制作",
    subtitle: "Web制作",
    desc: "顧客管理システムとリアルタイムで連動する、高機能なHPを低コストで制作。シフトや出勤情報の一括更新が可能になり、更新の手間を省きながら、新規客の獲得を強力にサポートします。",
    detail: "予約システム直結！集客と管理を両立するサイト制作",
    image: "/images/features/feature-web.png",
  },
  {
    title: "経営コンサルティング",
    subtitle: "成長支援",
    desc: "集客・求人の悩みから日々の運営改善まで、長年のノウハウを惜しみなく提供。広告のスペシャリストや技術講師とのネットワークも活用し、貴店の売上最大化に向けたパートナーとして歩みます。",
    detail: "持続的な成長を伴走支援する、トータルコンサルティング",
    image: "/images/features/feature-consulting.png",
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
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-v2.png"
              alt="Call Center"
              className="w-full h-full object-cover object-center lg:object-[center_right]"
            />
            {/* Gradient Overlay for Legibility (Lighter on the left to show background but keep text readable) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="max-w-2xl lg:ml-0 animate-fade-in">
              <span className="inline-flex items-center gap-2 bg-botanical-primary/90 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest shadow-sm mb-6">
                <Leaf size={12} className="fill-white stroke-none" />
                業界No.1の応答率・継続率
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-botanical-primary leading-[1.1] mb-6">
                メンズエステ専門
                <br />
                <span className="text-botanical-cta">電話代行サービス</span>
              </h2>

              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-10 max-w-xl">
                お客様を逃さない
                <span className="text-botanical-primary font-bold">
                  24時間365日対応
                </span>
                。<br />
                受付業務はプロに任せて、本業のサロン経営に集中できます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-cta text-lg px-10 py-4 shadow-xl hover:shadow-2xl ring-4 ring-botanical-cta/20 transform hover:-translate-y-1 transition-all"
                >
                  今すぐ無料相談する
                  <ArrowRight size={20} />
                </Link>
                {/* 資料請求ボタン削除 */}
              </div>

              <div className="flex flex-wrap items-center gap-6 text-[11px] md:text-xs text-gray-700 font-bold bg-white/30 backdrop-blur-sm p-3 rounded-2xl w-fit">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-botanical-cta" />
                  初期費用0円
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-botanical-cta" />
                  即日スタート可
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-botanical-cta" />
                  全国対応
                </span>
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
        {/* Features Section */}
        <section
          id="features"
          className="section-padding bg-botanical-bg/30 relative"
        >
          <div className="container-custom">
            <div className="text-center mb-24">
              <span className="text-botanical-cta font-bold tracking-widest text-xs uppercase mb-3 block">
                OUR STRENGTHS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">
                選ばれる6つの理由
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute -bottom-6 -right-6 w-24 h-24 bg-botanical-primary/10 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700 ${
                        idx % 2 === 1 ? "right-auto -left-6" : ""
                      }`}
                    ></div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 relative">
                    {/* Big Number */}
                    <div className="absolute -top-16 -left-4 text-9xl font-bold text-botanical-primary/5 font-heading select-none pointer-events-none">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10">
                      <span className="text-botanical-cta font-bold text-sm tracking-wider mb-2 block">
                        {feature.subtitle} 0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-heading leading-tight">
                        {feature.title}
                      </h3>
                      <h4 className="text-lg font-bold text-botanical-primary mb-6 border-b-2 border-botanical-primary/20 pb-2 inline-block">
                        {feature.detail}
                      </h4>

                      {/* Description List - splitting by periods for bullet points if multiple sentences */}
                      <div className="space-y-3">
                        {feature.desc.split("。").map(
                          (sentence, sIdx) =>
                            sentence && (
                              <div
                                key={sIdx}
                                className="flex items-start gap-3"
                              >
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-botanical-cta flex-shrink-0"></div>
                                <p className="text-gray-600 leading-relaxed text-base">
                                  {sentence}
                                  {feature.desc.includes("。") ? "。" : ""}
                                </p>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
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
