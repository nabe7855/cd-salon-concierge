"use client";

import Layout from "@/components/Layout";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Database,
  Globe,
  Leaf,
  MessageCircle,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smartphone,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Content Data
const PROBLEMS = [
  { icon: Phone, text: "電話が多すぎて、対応出来ず取りこぼしてる、、、" },
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
    image: "/images/features/operators_group.png",
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
    image: "/images/features/feature-web-v2.png",
  },
  {
    title: "経営コンサルティング",
    subtitle: "成長支援",
    desc: "集客・求人の悩みから日々の運営改善まで、長年のノウハウを惜しみなく提供。広告のスペシャリストや技術講師とのネットワークも活用し、貴店の売上最大化に向けたパートナーとして歩みます。",
    detail: "持続的な成長を伴走支援する、トータルコンサルティング",
    image: "/images/features/feature-consulting-v2.png",
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

const PREPARATION_ITEMS = [
  {
    title: (
      <>
        <span className="inline-block">ご予約受付用</span>
        <span className="inline-block">スマートフォン</span>
      </>
    ),
    desc: (
      <>
        <span className="inline-block">転送設定済みの端末を</span>
        <span className="inline-block">1台ご用意ください。</span>
        <span className="inline-block">端末本体を弊社へ</span>
        <span className="inline-block">お預けいただく必要は</span>
        <span className="inline-block">ありません。</span>
        <span className="inline-block">また、弊社から無料の</span>
        <span className="inline-block">IP電話番号を発行し、</span>
        <span className="inline-block">そちらを店舗番号として</span>
        <span className="inline-block">ご利用いただくことも</span>
        <span className="inline-block">可能です。</span>
      </>
    ),
    icon: Smartphone,
  },
  {
    title: (
      <>
        <span className="inline-block">予約受付用</span>
        <span className="inline-block">公式LINE</span>
      </>
    ),
    desc: (
      <>
        <span className="inline-block">LINEでの予約対応を</span>
        <span className="inline-block">ご希望の場合は、</span>
        <span className="inline-block">公式アカウントの作成を</span>
        <span className="inline-block">お願いしております。</span>
        <span className="inline-block">アカウント開設の</span>
        <span className="inline-block">手続きが不安な場合は、</span>
        <span className="inline-block">弊社スタッフによる</span>
        <span className="inline-block">代理作成サポートも</span>
        <span className="inline-block">承っております。</span>
      </>
    ),
    icon: MessageCircle,
  },
  {
    title: (
      <>
        <span className="inline-block">営業用</span>
        <span className="inline-block">ホームページ</span>
      </>
    ),
    desc: (
      <>
        <span className="inline-block">集客の要となるサイトを</span>
        <span className="inline-block">お持ちでない場合、</span>
        <span className="inline-block">弊社で顧客管理システムと</span>
        <br className="md:hidden" />
        <span className="inline-block">リアルタイムに連動する</span>
        <span className="inline-block">高機能なホームページを</span>
        <span className="inline-block">制作可能です。</span>
        <span className="inline-block">管理コストを抑えつつ、</span>
        <span className="inline-block">予約の自動取り込みを</span>
        <span className="inline-block">実現します。</span>
      </>
    ),
    icon: Globe,
  },
  {
    title: (
      <>
        <span className="inline-block">既存の</span>
        <span className="inline-block">顧客データ</span>
      </>
    ),
    desc: (
      <>
        <span className="inline-block">既に営業中の店舗様は、</span>
        <span className="inline-block">現在お使いの顧客情報の</span>
        <span className="inline-block">移行が可能です。</span>
        <span className="inline-block">電話帳、CSV、エクセル等、</span>
        <span className="inline-block">様々な形式に対応いたします。</span>
        <span className="inline-block">お預かりしたデータは</span>
        <span className="inline-block">機密保持契約に基づき、</span>
        <span className="inline-block">厳重に管理いたします。</span>
      </>
    ),
    icon: Database,
  },
];

const TESTIMONIALS = [
  {
    location: "東京都 港区",
    name: "A店 オーナー様",
    rating: 5,
    text: "以前は施術中の電話に出られず多くの予約を逃していましたが、導入後は応答率がほぼ100%になり売上が前年比130%にアップしました。",
  },
  {
    location: "大阪府 北区",
    name: "B店 店長様",
    rating: 5,
    text: "24時間対応のおかげで、深夜帯の取りこぼしが完全になくなりました。LINE予約の返信も早く、お客様からの信頼感が劇的に上がっています。",
  },
  {
    location: "福岡県 中央区",
    name: "C店 代表様",
    rating: 4,
    text: "セラピストが電話対応に追われることがなくなり、施術に100%集中できる環境が整いました。スタッフのストレスも減り、離職防止にも繋がっています。",
  },
  {
    location: "神奈川県 横浜市",
    name: "D店 運営責任者様",
    rating: 5,
    text: "オペレーターの方々の対応が非常に丁寧で、リピート率が向上しました。マニュアルも細かく設定できるので、自店のブランドイメージを崩さず任せられます。",
  },
  {
    location: "愛知県 名古屋市",
    name: "E店 オーナー様",
    rating: 5,
    text: "独自の予約システムを無料で使えるのが助かります。CTI機能で誰から電話がきたかすぐ分かるので、常連様への特別対応もスムーズです。",
  },
  {
    location: "北海道 札幌市",
    name: "F店 店長様",
    rating: 5,
    text: "急な欠勤や繁忙期でも動じずに対応してくれるため安心感が違います。自分一人で抱え込んでいた予約管理から解放され、経営に集中できています。",
  },
  {
    location: "京都府 中京区",
    name: "G店 代表様",
    rating: 4,
    text: "新規オープンに合わせて導入しました。集客が軌道に乗るまでの不安な時期に、全ての問い合わせを漏らさず拾ってくれたことが成功の要因でした。",
  },
  {
    location: "兵庫県 神戸市",
    name: "H店 経営者様",
    rating: 5,
    text: "多店舗展開していますが、各店舗の状況を一元管理できるシステムが秀逸です。報告もタイムリーで、離れた場所からでも運営状況が正確に把握できます。",
  },
  {
    location: "宮城県 仙台市",
    name: "I店 オーナー様",
    rating: 5,
    text: "IP電話番号を無料で貸し出してくれたので、固定電話を引く手間が省けました。スマホ一台あればどこでも状況を確認できるので機動力が増しました。",
  },
  {
    location: "千葉県 船橋市",
    name: "J店 管理職様",
    rating: 5,
    text: "コストパフォーマンスが非常に高いです。成果報酬型なのでリスクがなく、それ以上の利益（来店数）をしっかり確保してくれています。",
  },
];

const TopPage: React.FC = () => {
  return (
    <Layout>
      <div className="font-sans text-botanical-text bg-botanical-bg">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-20 pb-4 md:pb-20 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <picture>
              {/* Mobile optimized image */}
              <source
                media="(max-width: 767px)"
                srcSet="/images/トップページバナー.png"
              />
              {/* Desktop optimized image */}
              <img
                src="/images/hero-bg-v2.png"
                alt="Call Center"
                className="w-full h-full object-contain object-top md:object-cover md:object-center lg:object-[center_right]"
              />
            </picture>
            {/* Mobile-only background color fill to prevent white space if image ratio differs */}
            <div className="absolute inset-0 bg-botanical-bg -z-10 md:hidden"></div>
            {/* Gradient Overlay for Legibility */}
            {/* ↓ モバイル版（左側の薄いグレー）：from-gray-50/70 の「70」や via-gray-50/20 の「20」の数字を変えると濃さを調整できます（0〜100） */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/100 via-gray-50/70 to-transparent md:from-white/95 md:via-white/80 md:via-white/60 md:to-transparent"></div>
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="max-w-2xl lg:ml-0 animate-fade-in">
              <span className="inline-flex items-center gap-2 bg-botanical-primary/90 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest shadow-sm mb-6">
                <Leaf size={12} className="fill-white stroke-none" />
                業界No.1の応答率・継続率
              </span>

              {/* ↓ 文字の白縁（影）の調整について:
                  drop-shadow-[0_0_10px_rgba(255,255,255,1)] の中の数値を変更してください。
                  ・3番目の数字「10px」: 影の広がり（ぼかし）の強さ。数字を大きくすると影が広がり、小さくするとくっきりします。
                  ・最後の数字「1」: 影の濃さ（不透明度）。1.0に近づくほど濃くなり、0に近づくほど薄くなります。 */}
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-heading text-botanical-primary leading-[1.2] md:leading-[1.1] mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
                メンズエステ専門
                <br />
                <span className="text-botanical-cta">電話代行サービス</span>
              </h2>

              {/* ↓ 文字の白縁（影）の調整について: 3番目の数字「8px」が広がり、最後の数字「1」が濃さです */}
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-10 max-w-xl drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
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

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 mt-2">
                {/* Medal 1: 初期費用0円 */}
                <div className="flex flex-col items-center justify-center w-[84px] h-[84px] md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#FFFDE7] via-[#FFF59D] to-[#FBC02D] border-[3px] md:border-[4px] border-[#fff] shadow-[0_6px_10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(251,192,45,1)] relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-2 rounded-full border border-[#F9A825]/30"></div>
                  <div className="flex flex-col items-center justify-center z-10 text-[#5D4037] leading-none text-center">
                    <span className="text-[9px] md:text-[11px] font-extrabold mb-0.5">
                      Initial Cost
                    </span>
                    <span className="text-[10px] md:text-xs font-black block scale-90 md:scale-100">
                      初期費用
                    </span>
                    <span className="text-base md:text-xl font-black text-[#E65100]">
                      0円
                    </span>
                  </div>
                </div>

                {/* Medal 2: 即日スタート */}
                <div className="flex flex-col items-center justify-center w-[84px] h-[84px] md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#FFFDE7] via-[#FFF59D] to-[#FBC02D] border-[3px] md:border-[4px] border-[#fff] shadow-[0_6px_10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(251,192,45,1)] relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-2 rounded-full border border-[#F9A825]/30"></div>
                  <div className="flex flex-col items-center justify-center z-10 text-[#5D4037] leading-none text-center">
                    <span className="text-[9px] md:text-[11px] font-extrabold mb-0.5">
                      Speed
                    </span>
                    <span className="text-[10px] md:text-xs font-black block scale-90 md:scale-100">
                      即日
                    </span>
                    <span className="text-xs md:text-sm font-black">
                      スタート可
                    </span>
                  </div>
                </div>

                {/* Medal 3: 全国対応 */}
                <div className="flex flex-col items-center justify-center w-[84px] h-[84px] md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#FFFDE7] via-[#FFF59D] to-[#FBC02D] border-[3px] md:border-[4px] border-[#fff] shadow-[0_6px_10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(251,192,45,1)] relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-2 rounded-full border border-[#F9A825]/30"></div>
                  <div className="flex flex-col items-center justify-center z-10 text-[#5D4037] leading-none text-center">
                    <span className="text-[9px] md:text-[11px] font-extrabold mb-0.5">
                      Online
                    </span>
                    <span className="text-[13px] md:text-base font-black py-0.5">
                      全国
                    </span>
                    <span className="text-[10px] md:text-xs font-black">
                      対応
                    </span>
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
                  className="bg-botanical-bg p-6 md:p-10 rounded-2xl border border-transparent text-center hover:border-botanical-primary/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-botanical-primary/5 rounded-bl-[4rem] transition-all group-hover:bg-botanical-primary/10"></div>
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-botanical-cta shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={36} strokeWidth={1.5} />
                  </div>
                  <p className="font-bold text-gray-700 leading-loose text-base md:text-lg">
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
                      <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 font-heading leading-tight">
                        {feature.title}
                      </h3>
                      <h4 className="text-base md:text-lg font-bold text-botanical-primary mb-6 border-b-2 border-botanical-primary/20 pb-2 inline-block">
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
                            ),
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

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100 relative">
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
              <div className="p-10 md:p-12 md:w-1/3 bg-botanical-primary text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-50 pattern-grid-lg"></div>
                <div className="relative z-10">
                  <p className="text-4xl md:text-5xl font-bold mb-1 font-heading">
                    ¥1,000
                  </p>
                  <p className="text-xs opacity-80 mb-8">〜 / 1件 (税込)</p>

                  <Link
                    href="/contact"
                    className="block w-full bg-white text-botanical-primary font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    無料見積り
                  </Link>
                  <p className="text-[9px] mt-4 opacity-60">
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

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {FLOW_STEPS.map((flow, idx) => (
                  <div key={idx} className="relative group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-botanical-bg rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-botanical-primary mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:border-botanical-cta transition-all duration-300 relative z-10">
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

        {/* Preparation Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-botanical-primary/5 rounded-full blur-[100px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-botanical-cta/5 rounded-full blur-[80px] -ml-10 -mb-10"></div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-3 block opacity-70">
                PREPARATION
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-heading whitespace-nowrap">
                代行業務スタートに向けた準備
              </h2>
              <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                <span className="inline-block">サービス開始にあたって</span>
                <span className="inline-block">
                  以下のものをご用意いただきます。
                </span>
                <br className="hidden md:block" />
                <span className="inline-block">
                  不足しているものがある場合も、
                </span>
                <span className="inline-block">
                  弊社で柔軟にサポートいたしますので
                </span>
                <span className="inline-block">ご安心ください。</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {PREPARATION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-botanical-bg/40 p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-botanical-cta group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container-custom mb-16">
            <div className="text-center">
              <span className="text-botanical-primary font-bold tracking-widest text-xs uppercase mb-3 block opacity-70">
                VOICE
              </span>
              <h2 className="text-3xl font-bold text-gray-800 font-heading">
                導入サロン様の声
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-botanical-cta rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            {/* Gradient guards for the marquee */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-marquee hover:pause gap-6">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((voice, i) => (
                <div
                  key={i}
                  className="w-[300px] md:w-[400px] flex-shrink-0 bg-botanical-bg/50 p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-botanical-primary/10 rounded-full flex items-center justify-center text-botanical-primary flex-shrink-0">
                          <User size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">
                            {voice.name}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {voice.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-botanical-cta">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            fill={j < voice.rating ? "currentColor" : "none"}
                            className={j < voice.rating ? "" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm leading-relaxed relative z-10">
                      「{voice.text}」
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <MessageSquare
                      size={32}
                      className="text-botanical-primary/5"
                      fill="currentColor"
                    />
                  </div>
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
