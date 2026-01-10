"use client";

import Layout from "@/components/Layout";
import { Clock, MessageSquare, Phone, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="bg-salon-light border-b border-salon-tan/20">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600 font-bold">お問い合わせ</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-16 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-block relative mb-8">
              <h1 className="text-3xl font-bold text-gray-800 tracking-wider relative z-10 px-8 py-2">
                お問い合わせ
              </h1>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-salon-tan/50 -z-0"></div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
              サービス導入のご相談、お見積り依頼など、
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Information Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Tel Box */}
              <div className="bg-salon-light p-8 rounded-3xl border border-salon-tan shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                  <Phone size={80} />
                </div>
                <h3 className="text-salon-pink font-bold text-sm mb-4 flex items-center gap-2">
                  <Phone size={16} /> お電話でのお問い合わせ
                </h3>
                <a
                  href="tel:050-5443-1770"
                  className="text-2xl font-bold text-gray-800 hover:text-salon-pink transition-colors"
                >
                  050-5443-1770
                </a>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={14} /> 受付時間：9:30 - 翌4:00
                </div>
              </div>

              {/* Message Box */}
              <div className="bg-white p-8 rounded-3xl border border-salon-tan shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:-rotate-12 transition-transform">
                  <MessageSquare size={80} />
                </div>
                <h3 className="text-salon-gold font-bold text-sm mb-4 flex items-center gap-2">
                  <MessageSquare size={16} /> LINEでのお問い合わせ
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  公式LINEより友だち追加の上、メッセージをお送りください。
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white border-2 border-salon-tan text-salon-gold px-8 py-3 rounded-xl font-bold text-sm hover:bg-salon-tan transition-colors"
                >
                  友だち追加はこちら
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-salon-tan/30 relative">
                {/* Flow indicator */}
                <div className="flex justify-center gap-2 mb-12">
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-salon-pink text-white flex items-center justify-center text-xs font-bold shadow-md">
                      1
                    </div>
                    <span className="text-[10px] font-bold text-salon-pink">
                      入力
                    </span>
                  </div>
                  <div className="w-12 h-px bg-gray-100 mt-5"></div>
                  <div className="flex flex-col items-center gap-1 opacity-20">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-[10px] font-bold">確認</span>
                  </div>
                  <div className="w-12 h-px bg-gray-100 mt-5"></div>
                  <div className="flex flex-col items-center gap-1 opacity-20">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-[10px] font-bold">完了</span>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Field 1 */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      貴店名{" "}
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        必須
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="例：サロンコンシェルジュ"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all"
                    />
                  </div>

                  {/* Field 2 */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      担当者名{" "}
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        必須
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="例：山田 太郎"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all"
                    />
                  </div>

                  {/* Field 3 */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      お電話番号{" "}
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        必須
                      </span>
                    </label>
                    <input
                      type="tel"
                      placeholder="例：090-1234-5678"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all"
                    />
                  </div>

                  {/* Field 4 */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      メールアドレス{" "}
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        必須
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="例：example@mail.com"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all"
                    />
                  </div>

                  {/* Field 5 */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      お問い合わせ内容{" "}
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        必須
                      </span>
                    </label>
                    <textarea
                      rows={6}
                      placeholder="お問い合わせ内容をご入力ください"
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy Check */}
                  <div className="flex flex-col items-center gap-6 pt-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 border-2 border-salon-tan rounded flex items-center justify-center group-hover:border-salon-pink transition-colors">
                        <div className="w-3 h-3 bg-salon-pink rounded-sm opacity-0 group-hover:opacity-10"></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        <Link href="#" className="text-salon-pink underline">
                          プライバシーポリシー
                        </Link>
                        に同意する
                      </span>
                    </label>

                    <button className="bg-salon-pink text-white w-full max-w-xs py-4 rounded-full font-bold shadow-xl hover:bg-salon-blue transition-all flex items-center justify-center gap-2 group">
                      <span>確認画面へ進む</span>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-5xl mt-20 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">お問い合わせ</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
