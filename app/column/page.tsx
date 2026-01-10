"use client";

import Layout from "@/components/Layout";
import { BLOG_POSTS } from "@/constants";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Leaf,
  Search,
  Tag,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const ColumnListPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink transition-colors">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600 font-bold">コラム</span>
          </div>
        </div>

        {/* Decoration Row */}
        <div className="h-2 bg-gradient-to-r from-salon-tan via-salon-pink/20 to-salon-tan opacity-30"></div>

        <section className="pt-16 pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="flex flex-col items-center mb-20">
              <div className="bg-salon-pink/5 p-4 rounded-full mb-6">
                <BookOpen size={32} className="text-salon-pink" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-[0.2em] mb-4">
                COLUMN
              </h1>
              <div className="w-12 h-1 bg-salon-pink rounded-full mb-4"></div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                メンズエステ経営に役立つ情報発信
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main List Column */}
              <div className="lg:col-span-2 space-y-12">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <Link
                      href={`/column/${post.id}`}
                      className="flex flex-col md:flex-row"
                    >
                      <div className="md:w-1/3 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-2/3 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] font-bold text-salon-pink bg-salon-pink/5 px-2 py-0.5 rounded uppercase tracking-tighter">
                              Management
                            </span>
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                              <Calendar size={12} /> {post.date}
                            </div>
                          </div>
                          <h2 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-salon-pink transition-colors line-clamp-2 leading-relaxed">
                            {post.title}
                          </h2>
                          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-salon-pink tracking-wider">
                          READ MORE{" "}
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-2 transition-transform"
                          />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}

                {/* Pagination - Dummy */}
                <div className="flex justify-center gap-2 pt-10">
                  <button className="w-10 h-10 rounded-full bg-salon-pink text-white flex items-center justify-center font-bold text-sm shadow-md">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-400 flex items-center justify-center font-bold text-sm hover:border-salon-pink hover:text-salon-pink transition-all">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-400 flex items-center justify-center font-bold text-sm hover:border-salon-pink hover:text-salon-pink transition-all">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1 space-y-10">
                {/* Search Box */}
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Search size={16} /> SEARCH
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="キーワードを入力"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    />
                  </div>
                </div>

                {/* Category Box */}
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Tag size={16} /> CATEGORY
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "経営ノウハウ",
                      "集客・マーケティング",
                      "スタッフ採用・育成",
                      "業界ニュース",
                    ].map((cat, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="flex items-center justify-between text-sm text-gray-500 hover:text-salon-pink transition-colors group"
                        >
                          {cat}{" "}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social / About Mini */}
                <div className="bg-salon-pink rounded-[32px] p-8 text-white relative overflow-hidden">
                  <Leaf
                    className="absolute -bottom-10 -right-10 opacity-20"
                    size={160}
                  />
                  <h3 className="text-lg font-bold mb-4 relative z-10">
                    SalonConcierge Column
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90 relative z-10">
                    メンズエステ業界の最新トレンドや、現場で役立つ実践的なノウハウをお届けします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-6xl mt-12 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">コラム</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default ColumnListPage;
