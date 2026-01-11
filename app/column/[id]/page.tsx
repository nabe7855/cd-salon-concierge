"use client";

import Layout from "@/components/Layout";
import { BLOG_POSTS } from "@/constants";
import {
  ChevronRight,
  Clock,
  Copy,
  CornerDownRight,
  Facebook,
  MessageCircle,
  Search,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ColumnDetailPage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const post = BLOG_POSTS.find((p) => p.id === id) || BLOG_POSTS[0];

  return (
    <Layout>
      <div className="bg-[#f9fbf9] min-h-screen pb-20 font-sans">
        {/* Header Info */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[10px] text-gray-400">
            <span>メンズエステサロン専門の電話代行 | コラムのページ</span>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-salon-pink">
                HOME
              </Link>
              <Link href="/column" className="hover:text-salon-pink">
                コラム一覧
              </Link>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-12 max-w-7xl">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-8">
              <Link href="/" className="hover:underline">
                ホーム
              </Link>{" "}
              <ChevronRight size={10} />
              <Link href="/column" className="hover:underline">
                {post.category}
              </Link>
            </div>

            <article className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <header className="mb-10">
                <div className="inline-block bg-gray-800 text-white text-[10px] px-3 py-1 rounded mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-[11px] text-gray-400 border-t border-gray-50 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> SalonConciergeAdmin
                  </span>
                </div>
              </header>

              <div className="mb-12 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed space-y-8">
                <p>
                  メンズエステ経営で「もう少し売上を伸ばしたい」と考えたとき、まず見直したいのが営業時間です。
                </p>
                <p>
                  午前中や深夜早朝は一定の需要があり、その時間に問い合わせを受けられる体制を整えるだけで、売上を大きく伸ばせる可能性があります。今回は、営業時間拡大のメリットと課題、そして受付代行を活用して効率的に売上を最大化する方法をご紹介いたします。
                </p>

                {/* TOC Box */}
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                  <p className="text-center font-bold text-gray-800 mb-4 text-lg">
                    目次{" "}
                    <span className="text-sm font-normal text-gray-400">
                      [閉じる]
                    </span>
                  </p>
                  <ol className="space-y-3 text-sm text-salon-pink font-bold list-decimal pl-6">
                    <li>
                      <span className="hover:underline cursor-pointer">
                        営業時間を延ばすことで売上アップが期待できる理由
                      </span>
                    </li>
                    <li>
                      <span className="hover:underline cursor-pointer">
                        営業時間を長くする際の課題は受付対応
                      </span>
                    </li>
                    <li>
                      <span className="hover:underline cursor-pointer">
                        受付代行を活用して、機会損失を防ごう
                      </span>
                    </li>
                    <li>
                      <span className="hover:underline cursor-pointer">
                        まとめ：営業時間拡大×受付代行で売上を最大化
                      </span>
                    </li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-salon-pink pl-4 mt-16 mb-8 py-1 bg-gray-50">
                  営業時間を延ばすことで売上アップが期待できる理由
                </h2>
                <p>
                  出勤前や仕事終わりなど、実はメンズエステの隠れた人気時間帯が「午前中」です。午前中は比較的空いているため、落ち着いた時間を好むお客様からの予約が多く、深夜帯は一日の疲れを癒したいお客様が集中します。
                </p>

                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-salon-pink inline-block pb-1 mt-10 mb-6">
                  午前中や深夜帯は予約のチャンスが多い
                </h3>
                <p>
                  特にメンズエステでは、「出勤前にリフレッシュしたい」「夜の仕事が終わった後に癒されたい」とご来店されるお客様が多く、朝や深夜の時間は潜在的な予約チャンスが多在します。
                </p>

                {/* Fake Link Box */}
                <div className="bg-salon-pink/5 border border-salon-pink/20 p-6 rounded-lg text-sm">
                  <Link
                    href="/contact"
                    className="text-salon-pink font-bold flex items-center gap-2 hover:underline"
                  >
                    <CornerDownRight size={14} /> 受付代行はこちらからご相談
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-salon-pink pl-4 mt-16 mb-8 py-1 bg-gray-50">
                  営業時間を長くする際の課題は受付対応
                </h2>
                <p>
                  営業時間を広げると、その分だけ電話やLINEの問い合わせも増加します。しかし、スタッフが少ないと対応が追いつかず、せっかくの予約チャンスを逃してしまうことになります。
                </p>

                {/* Share Buttons */}
                <div className="mt-20 border-t border-gray-100 pt-10">
                  <p className="text-center text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                    Share This Article
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <button className="bg-[#000000] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Twitter size={14} className="mb-1" /> X
                    </button>
                    <button className="bg-[#1877f2] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Facebook size={14} className="mb-1" /> Facebook
                    </button>
                    <button className="bg-[#0084ff] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      はてブ
                    </button>
                    <button className="bg-[#ee4056] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      Pocket
                    </button>
                    <button className="bg-[#06c755] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <MessageCircle size={14} className="mb-1" /> LINE
                    </button>
                    <button className="bg-gray-700 text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Copy size={14} className="mb-1" /> Copy
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            <section className="mt-16">
              <h2 className="text-xl font-bold text-gray-800 mb-8 border-b-2 border-gray-100 pb-4">
                関連記事
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS.slice(0, 4).map((post) => (
                  <Link
                    key={post.id}
                    href={`/column/${post.id}`}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={post.image}
                      className="w-24 h-24 object-cover rounded flex-shrink-0"
                      alt={post.title}
                    />
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <span className="text-[10px] text-gray-400">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Comment Section */}
            <section className="mt-16 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-8">コメント</h2>
              <button className="w-full bg-gray-50 border-2 border-dashed border-gray-200 py-6 rounded-lg text-gray-400 font-bold hover:bg-gray-100 transition-colors">
                コメントを書き込む
              </button>
            </section>
          </div>

          {/* Sidebar (Reproduced from list page) */}
          <aside className="lg:w-80 space-y-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-4 border-l-4 border-salon-pink pl-3">
                検索
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="キーワードを入力"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-l px-3 py-2 text-sm focus:outline-none"
                />
                <button className="bg-gray-800 text-white px-4 rounded-r hover:bg-gray-700 transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">
                最近の投稿
              </h3>
              <ul className="space-y-4">
                {BLOG_POSTS.slice(0, 5).map((p) => (
                  <li
                    key={p.id}
                    className="pb-4 border-b border-gray-50 last:border-0"
                  >
                    <Link
                      href={`/column/${p.id}`}
                      className={`text-sm leading-relaxed transition-colors ${
                        p.id === id
                          ? "text-salon-pink font-bold"
                          : "text-gray-600 hover:text-salon-pink"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">
                カテゴリー
              </h3>
              <ul className="space-y-3">
                {[
                  "メンズエステについて",
                  "メンズエステ経営について",
                  "電話代行について",
                ].map((cat) => (
                  <li key={cat}>
                    <Link
                      href="/column"
                      className="text-sm text-gray-600 hover:text-salon-pink transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={12} className="text-gray-300" /> {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default ColumnDetailPage;
