"use client";

import Layout from "@/components/Layout";
import { BLOG_POSTS } from "@/constants";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Leaf,
  Share2,
  Tag,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ColumnDetailPage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const post = BLOG_POSTS.find((p) => p.id === (id || "1")) || BLOG_POSTS[0];

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        {/* Breadcrumb */}
        <div className="bg-salon-light/50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt;
            <Link href="/column" className="hover:text-salon-pink ml-1">
              コラム
            </Link>{" "}
            &gt;
            <span className="text-gray-600 font-bold ml-1">{post.title}</span>
          </div>
        </div>

        {/* Hero Header */}
        <header className="pt-16 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-salon-pink text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Management
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar size={14} /> {post.date}
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-8">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Featured Image - Full Width Mobile, Container Desktop */}
        <div className="max-w-5xl mx-auto md:px-4 mb-16">
          <div className="aspect-video overflow-hidden md:rounded-[40px] shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Social Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6 flex flex-col items-center">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-salon-blue hover:border-salon-blue transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-salon-blue hover:border-salon-blue transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-salon-pink hover:border-salon-pink transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-11">
              <div className="prose prose-salon max-w-none">
                <div className="bg-salon-light p-8 rounded-3xl border-l-8 border-salon-pink mb-10">
                  <p className="text-gray-700 leading-relaxed font-medium m-0">
                    {post.excerpt}
                  </p>
                </div>

                <div className="space-y-8 text-gray-600 leading-loose">
                  <p>
                    メンズエステ業界において、電話対応の質は店舗の売上に直結する非常に重要な要素です。特に初めてご利用されるお客様は、電話越しのオペレーターの対応一つで「この店は安心できるか」「セラピストへの教育は行き届いているか」を判断されます。
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-salon-tan pb-2 mt-12 mb-6">
                    1. 第一印象を決める最初の3秒
                  </h2>
                  <p>
                    電話が繋がった瞬間の声のトーン、スピード、そして「お電話ありがとうございます」という第一声。これらはお客様の潜在意識に強く残ります。明るく、かつ落ち着いたトーンで対応することで、お客様の緊張を解き、スムーズな予約へと誘導することが可能になります。
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-salon-tan pb-2 mt-12 mb-6">
                    2. お客様のニーズを汲み取るヒアリング力
                  </h2>
                  <p>
                    単に空き時間を伝えるだけでなく、「どのようなお疲れがあるか」「お好みのタイプはあるか」など、お客様が求めているものを丁寧にヒアリングすることが大切です。これにより、最適なコース提案やセラピストの紹介ができ、顧客満足度の向上に繋がります。
                  </p>

                  <blockquote className="border-l-4 border-salon-gold bg-salon-tan/10 p-6 my-10 italic">
                    「接客は電話から始まっている」という意識を持つだけで、成約率は劇的に変化します。
                  </blockquote>

                  <p>
                    サロンコンシェルジュでは、長年の経験から培った独自のトークスクリプトと、徹底した教育体制により、貴店の顔として最高品質の電話対応を提供いたします。
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                  {[
                    "メンズエステ経営",
                    "電話代行",
                    "売上アップ",
                    "接客スキル",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                    >
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                {/* Post Navigation */}
                <div className="mt-16 flex flex-col md:flex-row gap-4 border-t border-b border-gray-100 py-10">
                  <Link
                    href="#"
                    className="flex-1 group flex items-center gap-4 p-4 rounded-2xl hover:bg-salon-light transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-salon-pink group-hover:border-salon-pink transition-all">
                      <ChevronLeft size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        PREVIOUS
                      </span>
                      <p className="text-xs font-bold text-gray-600 line-clamp-1">
                        集客に強いメンズエステのホームページとは？
                      </p>
                    </div>
                  </Link>
                  <div className="hidden md:block w-px bg-gray-100 h-16"></div>
                  <Link
                    href="#"
                    className="flex-1 group flex flex-row-reverse items-center gap-4 p-4 rounded-2xl hover:bg-salon-light transition-colors text-right"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-salon-pink group-hover:border-salon-pink transition-all">
                      <ChevronRight size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        NEXT
                      </span>
                      <p className="text-xs font-bold text-gray-600 line-clamp-1">
                        セラピストの離職率を下げるための環境作り
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Author/About Box */}
                <div className="mt-20 bg-salon-tan p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 border border-salon-gold/20 shadow-inner">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?u=sc"
                      alt="Author"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-gray-800 mb-2">
                      サロンコンシェルジュ編集部
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      メンズエステサロンの経営をシステムと代行の力で支える「サロンコンシェルジュ」の公式メディアです。現場の声を活かしたリアルな情報をお届けします。
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-[10px] font-bold text-salon-pink hover:underline uppercase tracking-widest"
                    >
                      Service Site <Leaf size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-4xl mt-20 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt;
            <Link href="/column" className="hover:text-salon-pink ml-1">
              コラム
            </Link>{" "}
            &gt;
            <span className="text-gray-500 ml-1">{post.title}</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default ColumnDetailPage;
