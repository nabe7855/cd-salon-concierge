"use client";

import Layout from "@/components/Layout";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    salon_name: "",
    contact_name: "",
    email: "",
    phone: "",
    prefecture: "東京都",
    reply_method: "email",
    inquiry_items: [] as string[],
    content: "",
    source: "",
    source_other_detail: "",
    deciding_factor: "",
  });

  const supabase = createClient();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiry_items: prev.inquiry_items.includes(item)
        ? prev.inquiry_items.filter((i) => i !== item)
        : [...prev.inquiry_items, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);
    const { error } = await supabase.from("inquiries").insert([
      {
        ...formData,
        status: "new",
      },
    ]);

    if (error) {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
      console.error(error);
    } else {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="bg-salon-light/30 min-h-screen pb-20 font-sans">
        {/* Title Header - Updated to Green Banner */}
        <div className="relative w-full h-32 md:h-40 flex items-center justify-center bg-botanical-primary mb-8 md:mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <h1 className="relative z-10 text-xl md:text-4xl font-bold text-white font-heading tracking-widest px-4 text-center">
            お問い合わせ・無料お見積り
          </h1>
        </div>

        {isSuccess ? (
          <div className="container mx-auto px-4 max-w-2xl py-20 text-center">
            <div className="bg-white rounded-[40px] p-12 shadow-sm border border-salon-tan/30">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                送信が完了いたしました
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                お問い合わせありがとうございます。
                <br />
                内容を確認次第、担当者よりご連絡させていただきます。
                <br />
                今しばらくお待ちくださいませ。
              </p>
              <Link
                href="/"
                className="inline-block bg-salon-pink text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12 px-4">
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>当日中か翌営業日にはご返答させて頂いております。</p>
                <p>
                  また、３日以上経過しても返答が無い場合は、メールが正しく送信されていない場合がございます。
                </p>
                <p>
                  お手数ですが再度メールを頂くか、080-1017-5318
                  までお問い合わせ下さい。
                </p>
              </div>
            </div>

            {/* Form Container */}
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-sm border border-salon-tan/30">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* 1. Salon Name */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        サロン名または会社名
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="text"
                        name="salon_name"
                        value={formData.salon_name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink text-base"
                      />
                    </div>
                  </div>

                  {/* 2. Contact Name */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        ご担当者様名
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="text"
                        name="contact_name"
                        value={formData.contact_name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* 3. Email */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        メールアドレス
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* 4. Phone */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お電話番号
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* 5. Prefecture */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        サロンの都道府県
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <select
                        name="prefecture"
                        value={formData.prefecture}
                        onChange={handleInputChange}
                        className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      >
                        <option>東京都</option>
                        <option>大阪府</option>
                        <option>愛知県</option>
                        <option>福岡県</option>
                        <option>神奈川県</option>
                        <option>埼玉県</option>
                        <option>千葉県</option>
                        <option>その他</option>
                      </select>
                    </div>
                  </div>

                  {/* 6. Reply Method */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        返信方法のご希望
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-wrap gap-6 text-sm text-gray-600">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="reply_method"
                          value="phone"
                          checked={formData.reply_method === "phone"}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-salon-pink"
                        />
                        電話での返信を希望
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="reply_method"
                          value="email"
                          checked={formData.reply_method === "email"}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-salon-pink"
                        />
                        メールでの返信を希望
                      </label>
                    </div>
                  </div>

                  {/* 7. Inquiry Items */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-700">
                          お問い合わせ項目
                        </label>
                        <span className="text-[10px] text-gray-400 font-normal">
                          ※複数選択可
                        </span>
                      </div>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                      {[
                        "電話代行",
                        "資料請求",
                        "CTIシステム",
                        "CRMシステム",
                        "オーダーメイドプラン",
                        "WEB予約システム",
                        "WEB制作",
                        "お見積り",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.inquiry_items.includes(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-4 h-4 accent-salon-pink"
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 8. Content */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お問い合わせ内容
                      </label>
                      <span className="bg-red-50 text-salon-pink text-[10px] px-2 py-0.5 rounded border border-salon-pink/30">
                        任意
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      ></textarea>
                    </div>
                  </div>

                  {/* 9. Source */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        当社を何でお知りになられましたか？
                      </label>
                      <span className="bg-red-50 text-salon-pink text-[10px] px-2 py-0.5 rounded border border-salon-pink/30">
                        任意
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-wrap gap-4 text-xs text-gray-600">
                      {[
                        "Yahoo! 検索",
                        "google 検索",
                        "公式 Twitter",
                        "ご紹介",
                        "その他",
                      ].map((source) => (
                        <label
                          key={source}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="source"
                            value={source}
                            checked={formData.source === source}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-salon-pink"
                          />
                          {source}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 10. Others input */}
                  {formData.source === "その他" && (
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-full md:w-1/3">
                        <label className="text-xs font-bold text-gray-600">
                          上記で「その他」とお答えになられた方は、内容をご記入ください
                        </label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          type="text"
                          name="source_other_detail"
                          value={formData.source_other_detail}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                        />
                      </div>
                    </div>
                  )}

                  {/* 11. Deciding factor */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お問い合わせの決め手
                      </label>
                      <span className="bg-red-50 text-salon-pink text-[10px] px-2 py-0.5 rounded border border-salon-pink/30">
                        任意
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="text"
                        name="deciding_factor"
                        value={formData.deciding_factor}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* 12. Privacy Policy */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between md:w-1/3">
                      <label className="text-sm font-bold text-gray-700">
                        個人情報の取扱いについて
                      </label>
                      <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="bg-white border border-gray-300 p-4 h-40 overflow-y-auto text-xs text-gray-600 leading-relaxed rounded">
                      <p>
                        １．お客様にご入力いただいた情報は、お問い合わせに関する業務と、サービス紹介など、お客様にとって有益と弊社が判断する情報をご案内するために利用し、他の目的には一切使用いたしません。
                      </p>
                      <p className="mt-2">
                        ２．下記の3.4.の場合を除き、ご入力いただいた個人情報を、事前にお客様の同意を得ずに第三者に提供・委託することはありません。
                      </p>
                      <p className="mt-2">
                        ３．業務の一部を外部に委託する場合があり、委託先に対して個人情報の取扱いを適切に管理いたします。
                      </p>
                      <p className="mt-2">４．法令に基づく要求があった場合。</p>
                      <p className="mt-2">
                        以上の内容に同意される方は、下記の「同意する」にチェックを入れ、内容を確認して送信してください。
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="w-4 h-4 accent-salon-pink"
                        />
                        同意する
                      </label>
                    </div>

                    {/* Contact Window for Privacy */}
                    <div className="bg-gray-100 p-6 rounded text-center text-xs text-gray-700 space-y-1">
                      <p className="font-bold">
                        【個人情報の取り扱いに関する相談窓口】
                      </p>
                      <p>こころサポート株式会社</p>
                      <p>担当：和田</p>
                      <p>TEL：080-1017-5318</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-8">
                    <button
                      type="submit"
                      className={`bg-salon-pink text-white px-10 md:px-16 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transition-all transform hover:scale-105 ${
                        !agreed || isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-salon-blue"
                      }`}
                      disabled={!agreed || isSubmitting}
                    >
                      {isSubmitting ? "送信中..." : "上記の内容で送信する >>"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-4xl mt-12 pb-12 border-t border-gray-100">
          <nav className="py-4 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600">お問い合わせフォーム</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
