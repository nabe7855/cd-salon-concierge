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

        {/* Hero Image Section */}
        <section className="w-full mb-16">
          <img
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=1920"
            alt="Shinjuku Gyoen View"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </section>

        {/* Philosophy Section */}
        <section className="container mx-auto px-4 max-w-4xl text-center mb-24">
          <div className="flex justify-center mb-10">
            <div className="bg-[#1e293b] text-white px-16 py-3 text-xl font-bold rounded-sm shadow-md">
              企業理念
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-12 tracking-wider">
            「声のホスピタリティで、サロンに新しい価値を。」
          </h2>

          <div className="space-y-8 text-sm md:text-base text-gray-600 leading-loose max-w-2xl mx-auto">
            <p>
              SalonConciergeは、単なる電話代行にとどまらず、
              <br />
              サロンの“顔”としてお客様と繋がる第一線を担っています。
              <br />
              私たちは、店舗様・セラピスト様・お客様すべてにとって
              <br />
              心地よい体験を届けるため、
              <br />
              「丁寧な応対」「正確な情報提供」「臨機応変な対応力」を軸に、
              <br />
              業界最高水準のサービスを目指します。
            </p>
            <p>
              メンズエステ業界に特化した豊富な知見と実績を活かし、
              <br />
              クライアント様の売上とブランド価値の最大化を支える“パートナー”であり続けます。
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 max-w-4xl mb-24">
          <div className="flex justify-center mb-12">
            <div className="bg-[#1e293b] text-white px-16 py-3 text-xl font-bold rounded-sm shadow-md">
              大切にしている価値観
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                className="bg-white border border-salon-gold p-6 rounded-lg flex gap-6 items-start shadow-sm"
              >
                <div className="flex-shrink-0 pt-1">
                  <div className="relative">
                    <Sparkles className="text-salon-gold w-8 h-8 opacity-40 absolute -top-1 -left-1" />
                    <Diamond className="text-salon-gold w-8 h-8 fill-salon-gold/10" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="container mx-auto px-4 max-w-4xl mb-24 text-center">
          <div className="flex justify-center mb-12">
            <div className="bg-[#1e293b] text-white px-16 py-3 text-xl font-bold rounded-sm shadow-md">
              会社概要
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-5xl font-bold text-gray-800 tracking-tighter mb-2">
              Luvina
            </h2>
            <p className="text-xl tracking-[0.5em] text-gray-400 -mr-[0.5em]">
              TOKYO
            </p>
          </div>

          <div className="max-w-xl mx-auto text-sm md:text-base text-gray-600">
            <div className="space-y-4 text-left">
              {[
                { label: "会社名", content: "合同会社オスカン" },
                { label: "所在地", content: "東京都新宿区新宿 2-15-29" },
                {
                  label: "事業内容",
                  content: "電話受付代行／コンサルティング",
                },
                { label: "電話番号", content: "03-5315-4637" },
                { label: "ウェブサイトURL", content: "https://salonbell.jp/" },
                { label: "メールアドレス", content: "support@salonbell.jp" },
                { label: "設立年月", content: "2018年7月" },
                { label: "代表者名", content: "金子周平" },
                { label: "従業員数", content: "20名" },
                { label: "資本金", content: "500万円" },
                { label: "取引銀行", content: "三井住友銀行" },
                { label: "電気通信事業届出番号", content: "A-06-22352" },
              ].map((row, idx) => (
                <div key={idx} className="flex border-b border-gray-100 py-2">
                  <span className="w-1/3 font-bold text-gray-500">
                    {row.label}：
                  </span>
                  <span className="w-2/3">{row.content}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Access Section */}
        <section className="container mx-auto px-4 max-w-4xl text-center mb-24">
          <div className="flex justify-center mb-12">
            <div className="bg-[#1e293b] text-white px-16 py-3 text-xl font-bold rounded-sm shadow-md">
              アクセス
            </div>
          </div>

          <div className="space-y-8 text-gray-600 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                合同会社オスカン
              </h3>
              <p className="text-sm">〒160-0022</p>
              <p className="text-sm">東京都新宿区新宿2-15-29</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-700">【最寄り駅】</p>
              <p className="text-sm">
                ・丸ノ内線「新宿御苑前駅」1番出口より徒歩3分
              </p>
              <p className="text-sm">
                ・丸ノ内線・副都心線「新宿三丁目駅」C8出口より徒歩4分
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-700">【営業時間】</p>
              <p className="text-sm">9:30～翌4:00（年中無休）</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-700">【ご来社について】</p>
              <p className="text-sm leading-relaxed max-w-md mx-auto">
                ご相談・面談は完全予約制となっております。
                <br />
                事前にお問い合わせフォームやお電話、公式LINEにてご予約をお願いいたします。
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <Link
              href="/contact"
              className="bg-salon-pink text-white px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              お問い合わせフォームへ ≫
            </Link>
          </div>

          {/* Map Section - Responsive Fixed Width Issues Resolved */}
          <div className="bg-salon-light p-4 md:p-12 rounded-3xl border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold text-gray-700 tracking-widest">
                【地図・ルート案内】
              </h3>
            </div>
            <div className="max-w-5xl mx-auto w-full">
              <div className="bg-white p-1 md:p-2 rounded-xl shadow-2xl overflow-hidden aspect-video relative">
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
              <div className="mt-6 text-center">
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
