"use client";

import Layout from "@/components/Layout";
import { Diamond, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const CompanyPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="container mx-auto px-4 pt-4 pb-2 text-[10px] text-gray-400">
          <Link href="/" className="hover:text-salon-blue">
            トップ
          </Link>{" "}
          &gt; <span className="text-gray-500 font-bold">会社概要</span>
        </div>

        {/* Hero Section - Integrated Layout */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-white">
          {/* Background Patterns & Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#1B4332 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-salon-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Curved Background Shape (Right Side) */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <div className="absolute inset-0 bg-salon-light/30 origin-right transform -skew-x-12 translate-x-32 scale-y-110"></div>
            <div className="absolute inset-0 bg-botanical-primary/5 origin-right transform -skew-x-6 translate-x-16"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Side: Content */}
              <div className="w-full lg:w-1/2 text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-12 h-px bg-salon-gold"></span>
                  <span className="text-salon-gold font-bold tracking-[0.4em] text-xs uppercase">
                    About Our Vision
                  </span>
                </div>

                <h1 className="relative mb-8 md:mb-10">
                  <span className="block text-3xl md:text-7xl font-bold font-heading text-botanical-primary leading-tight mb-2">
                    どんな難題だって、
                  </span>
                  <span className="block text-2xl md:text-6xl font-bold font-heading text-botanical-primary/60 leading-tight">
                    情熱と技術で
                    <br />
                    越えていく。
                  </span>
                  {/* Decorative accent under title */}
                  <div className="absolute -left-4 top-0 w-1 h-2/3 bg-salon-gold/50 rounded-full"></div>
                </h1>

                <p className="text-gray-500 text-sm md:text-base leading-loose max-w-lg mb-12">
                  ビジネスを取り巻く課題を、人の温もりとITの力で解決する。
                  <br />
                  そんな新しい可能性に満ちた未来を創造するのがSalon
                  Conciergeです。
                  <br />
                  未来へ先回りするパートナーをお探しなら、ぜひご相談ください。
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-salon-pink"></div>
                    <span className="text-[10px] font-bold tracking-tighter text-gray-400 uppercase">
                      Innovation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-salon-gold"></div>
                    <span className="text-[10px] font-bold tracking-tighter text-gray-400 uppercase">
                      Hospitality
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Integrated Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 group">
                  {/* Main Image Container with mask-like shape */}
                  <div className="relative rounded-[40px] md:rounded-[100px] overflow-hidden aspect-[4/3] md:aspect-square shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                      alt="Modern Office"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-botanical-primary/20 to-transparent"></div>
                  </div>

                  {/* Floating Elements (Essence of the reference image) */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-salon-pink/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-salon-gold/10 rounded-full blur-3xl"></div>

                  {/* Digital/Tech floating cards essence */}
                  <div className="absolute top-1/4 -right-4 w-12 h-20 bg-botanical-primary/40 rounded-lg backdrop-blur-md border border-white/20 transform rotate-12 hidden md:block"></div>
                  <div className="absolute bottom-1/3 -left-6 w-16 h-10 bg-salon-gold/40 rounded-lg backdrop-blur-md border border-white/20 transform -rotate-12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Refined */}
        <section className="py-24 bg-salon-light/30 relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-salon-gold font-bold tracking-widest text-xs mb-4 uppercase">
                Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-botanical-primary mb-12">
                企業理念
              </h2>

              <div className="relative mb-8 md:mb-16 px-6 md:px-12 py-12 md:py-16 bg-white/50 backdrop-blur-sm rounded-[32px] md:rounded-[40px] border border-white/50 shadow-sm max-w-3xl mx-auto">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-botanical-primary text-white p-3 rounded-2xl shadow-lg">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 leading-tight mb-8">
                  「声のホスピタリティで、
                  <br />
                  サロンに新しい価値を。」
                </h3>
                <div className="space-y-6 text-gray-600 leading-loose text-lg">
                  <p>
                    SalonConciergeは、単なる電話代行にとどまらず、
                    <br />
                    サロンの“顔”としてお客様と繋がる第一線を担っています。
                  </p>
                  <p className="text-sm md:text-base opacity-80">
                    私たちは、店舗様・セラピスト様・お客様すべてにとって心地よい体験を届けるため、
                    <br />
                    「丁寧な応対」「正確な情報提供」「臨機応変な対応力」を軸に、
                    <br />
                    業界最高水準のサービスを目指します。
                  </p>
                  <div className="pt-6 border-t border-gray-100 italic font-medium text-botanical-primary">
                    メンズエステ業界に特化した豊富な知見と実績を活かし、
                    <br />
                    クライアント様の売上とブランド価値の最大化を支える“パートナー”であり続けます。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Premium Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-xs mb-4 uppercase">
                Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-botanical-primary">
                大切にしている価値観
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  title: "安心・安全の提供",
                  desc: "セラピスト様・店舗様・お客様、すべての関係者に安心感を与える対応を。トラブルを未然に防ぎ、円滑な運営を支える“影の立役者”としての責任を果たします。",
                },
                {
                  id: 2,
                  title: "誠実さと信頼",
                  desc: "お客様の大切な“第一印象”を担う存在として、常に誠実で丁寧な対応を心がけています。小さな信頼の積み重ねが、長期的なパートナーシップを築く礎になると信じています。",
                },
                {
                  id: 3,
                  title: "プロフェッショナル意識",
                  desc: "専門性とスキルの向上に妥協せず、すべてのスタッフがプロとしての意識を持ち、高品質なサービスを提供し続けます。",
                },
                {
                  id: 4,
                  title: "店舗様ファーストの精神",
                  desc: "私たちは「受付業務の代行」ではなく、「売上のサポート」をするパートナーでありたいと考えています。店舗様の方針やこだわりに寄り添い、それぞれに最適な対応を徹底致します。",
                },
                {
                  id: 5,
                  title: "ITシステムの最適化",
                  desc: "私たちは、業務効率と顧客満足度の向上を実現するため、ご利用いただく店舗様やセラピスト様、そしてお客様の声を反映させながら、ITシステムの継続的な開発と改善を日々進めています。",
                },
                {
                  id: 6,
                  title: "働く人に誇りを",
                  desc: "電話受付という仕事にプライドを持ち、自信を持って対応できる環境づくり。スタッフ一人ひとりが輝ける場を提供します。",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="group bg-salon-light/20 p-8 rounded-[32px] border border-transparent hover:border-salon-gold/20 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-botanical-primary group-hover:text-white transition-colors duration-500">
                      <Diamond
                        className="text-salon-gold group-hover:text-white"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-botanical-primary transition-colors">
                        <span className="text-salon-gold mr-2 text-sm italic opacity-50">
                          0{item.id}
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview Section - Minimalist Card */}
        <section className="py-24 bg-botanical-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-50 pattern-grid-lg"></div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-xs mb-4 uppercase">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                会社概要
              </h2>
            </div>

            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
              <div className="mb-16 text-center">
                <h3 className="text-5xl font-bold text-botanical-primary tracking-tighter mb-2">
                  Luvina
                </h3>
                <p className="text-xl tracking-[0.5em] text-salon-gold -mr-[0.5em]">
                  TOKYO
                </p>
              </div>

              <div className="space-y-0">
                {[
                  { label: "会社名", content: "合同会社オスカン" },
                  { label: "所在地", content: "東京都新宿区新宿 2-15-29" },
                  {
                    label: "事業内容",
                    content: "電話受付代行／コンサルティング",
                  },
                  { label: "電話番号", content: "03-5315-4637" },
                  {
                    label: "ウェブサイトURL",
                    content: "https://salonbell.jp/",
                  },
                  { label: "メールアドレス", content: "support@salonbell.jp" },
                  { label: "設立年月", content: "2018年7月" },
                  { label: "代表者名", content: "金子周平" },
                  { label: "従業員数", content: "20名" },
                  { label: "資本金", content: "500万円" },
                  { label: "取引銀行", content: "三井住友銀行" },
                  { label: "電気通信事業届出番号", content: "A-06-22352" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row border-b border-gray-100 py-6 last:border-0 group hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-xl"
                  >
                    <span className="md:w-1/3 font-bold text-gray-400 text-sm mb-1 md:mb-0 uppercase tracking-wider">
                      {row.label}
                    </span>
                    <span className="md:w-2/3 text-gray-700 font-medium">
                      {row.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Access Section - Premium Integration */}
        <section className="py-24 bg-salon-light/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-salon-gold font-bold tracking-widest text-xs mb-4 uppercase">
                Access
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-botanical-primary">
                アクセス
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-salon-gold/20 pb-4">
                    合同会社オスカン
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-botanical-primary/5 flex items-center justify-center shrink-0">
                        <span className="text-salon-gold font-bold text-xs">
                          ADD
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-400 mb-1">
                          所在地
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          〒160-0022
                          <br />
                          東京都新宿区新宿2-15-29
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-botanical-primary/5 flex items-center justify-center shrink-0">
                        <span className="text-salon-gold font-bold text-xs">
                          STA
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-400 mb-1">
                          最寄り駅
                        </p>
                        <ul className="text-gray-700 space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-salon-gold"></span>
                            丸ノ内線「新宿御苑前駅」1番出口より徒歩3分
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-salon-gold"></span>
                            丸ノ内線・副都心線「新宿三丁目駅」C8出口より徒歩4分
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-botanical-primary/5 flex items-center justify-center shrink-0">
                        <span className="text-salon-gold font-bold text-xs">
                          HRS
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-400 mb-1">
                          営業時間
                        </p>
                        <p className="text-gray-700">9:30～翌4:00 (年中無休)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-botanical-primary p-10 rounded-[40px] text-white shadow-xl">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-salon-gold">
                    <Sparkles size={20} />
                    ご来社について
                  </h4>
                  <p className="text-sm leading-loose opacity-80">
                    ご相談・面談は完全予約制となっております。
                    <br />
                    事前にお問い合わせフォームやお電話、公式LINEにてご予約をお願いいたします。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full bg-salon-pink text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                      お問い合わせフォームへ ≫
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white p-2 md:p-4 rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden relative">
                  <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8540702117185!2d139.7061732766345!3d35.69041287258451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cdba8366917%3A0x6d8594246194b669!2z44CSMTYwLTAwMjIg6Y9 東京都新宿区新宿7-15-29!5e0!3m2!1sja!2sjp!4v1716300000000!5m2!1sja!2sjp"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SalonConcierge Location Map"
                    ></iframe>
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-botanical-primary shadow-lg border border-white/50">
                      Google Maps View
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <a
                      href="https://maps.google.com/maps?q=東京都新宿区新宿2-15-29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-salon-gold font-bold hover:underline"
                    >
                      大きな地図で見る <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-4xl mt-12 pb-12 border-t border-gray-100">
          <nav className="py-4 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-blue">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600">会社概要</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyPage;
