
import React from 'react';
import { Link } from 'react-router-dom';

const PartnersPage: React.FC = () => {
  return (
    <div className="bg-[#fdf8f4] min-h-screen pb-20 font-sans">
      {/* Breadcrumb - Top */}
      <div className="container mx-auto px-4 pt-4 pb-2 text-[10px] text-gray-400">
        <Link to="/" className="hover:text-salon-blue">トップ</Link> &gt; <span className="text-gray-500 font-bold">代理店募集</span>
      </div>

      {/* Ornate Title Header */}
      <div className="flex justify-center mb-10 pt-6">
        <div className="relative">
          <div className="bg-[#4db6ac] text-white px-20 py-2 text-2xl font-bold flex items-center justify-center border-[3px] border-white outline outline-1 outline-[#4db6ac] rounded-sm">
            代理店募集
          </div>
          {/* Ornate corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#4db6ac] bg-[#fdf8f4]"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#4db6ac] bg-[#fdf8f4]"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#4db6ac] bg-[#fdf8f4]"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#4db6ac] bg-[#fdf8f4]"></div>
        </div>
      </div>

      {/* Description Text */}
      <div className="text-center mb-12 px-4">
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2">
          「SalonConcierge」の電話代行サービスを販売してくださる代理店、並びにご紹介者を募集しております。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          ご興味のある方は下記フォームより必要事項をご記入の上、お問い合わせください。
        </p>
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#fefce8] rounded-[40px] p-8 md:p-16 shadow-sm border border-[#f0e6d2]">
          <form className="space-y-8">
            {/* Field: Company Name */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-bold text-gray-700">会社名</label>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* Field: URL */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-bold text-gray-700">ホームページURL</label>
              </div>
              <div className="w-full md:w-2/3">
                <input type="url" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* Field: Contact Name */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">ご担当者名</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* Field: Email */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">ご連絡用メールアドレス</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="email" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* Field: Phone */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">ご連絡用お電話番号</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="tel" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* Field: Address */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-bold text-gray-700">ご住所</label>
              </div>
              <div className="w-full md:w-2/3">
                <textarea rows={2} className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"></textarea>
              </div>
            </div>

            {/* Field: Remarks */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-bold text-gray-700">備考</label>
              </div>
              <div className="w-full md:w-2/3">
                <textarea rows={6} className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit" 
                className="bg-[#f69494] text-white px-16 py-4 rounded-full font-bold text-xl shadow-lg transition-all transform hover:scale-105 hover:bg-[#f47c7c]"
              >
                入力内容を確認する&gt;&gt;
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Breadcrumb */}
      <div className="container mx-auto px-4 max-w-4xl mt-12 pb-12 border-t border-gray-100">
        <nav className="py-4 text-[10px] text-gray-400">
          <Link to="/" className="hover:text-salon-pink">トップ</Link> &gt; <span className="text-gray-600">代理店募集</span>
        </nav>
      </div>
    </div>
  );
};

export default PartnersPage;
