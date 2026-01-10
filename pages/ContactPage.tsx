
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-[#fdf8f4] min-h-screen pb-20 font-sans">
      {/* Breadcrumb - Top */}
      <div className="container mx-auto px-4 pt-4 pb-2 text-[10px] text-gray-400">
        <Link to="/" className="hover:text-salon-pink">トップ</Link> &gt; <span className="text-gray-500 font-bold">お問い合わせフォーム</span>
      </div>

      {/* Title Header */}
      <div className="flex justify-center mb-6 pt-8">
        <div className="relative">
          <div className="bg-[#f69494] text-white px-20 py-2 text-2xl font-bold flex items-center justify-center border-[3px] border-white outline outline-1 outline-[#f69494]">
            お問い合わせフォーム
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#f69494] bg-[#fdf8f4]"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#f69494] bg-[#fdf8f4]"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#f69494] bg-[#fdf8f4]"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#f69494] bg-[#fdf8f4]"></div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-gray-700 mb-6">お問い合わせ・無料お見積り</h1>
        <div className="text-sm text-gray-600 leading-relaxed space-y-2">
          <p>当日中か翌営業日にはご返答させて頂いております。</p>
          <p>また、３日以上経過しても返答が無い場合は、メールが正しく送信されていない場合がございます。</p>
          <p>お手数ですが再度メールを頂くか、050-5443-1770 までお問い合わせ下さい。</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#fefce8] rounded-[40px] p-8 md:p-16 shadow-sm border border-[#f0e6d2]">
          <form className="space-y-8">
            {/* 1. Salon Name */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">サロン名または会社名</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 2. Contact Name */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">ご担当者様名</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 3. Email */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">メールアドレス</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="email" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 4. Phone */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">お電話番号</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="tel" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 5. Prefecture */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">サロンの都道府県</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3">
                <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-salon-pink">
                  <option>東京都</option>
                  <option>大阪府</option>
                  <option>愛知県</option>
                  <option>福岡県</option>
                  {/* ... other prefectures */}
                </select>
              </div>
            </div>

            {/* 6. Reply Method */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">返信方法のご希望</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3 flex flex-wrap gap-6 text-sm text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="reply_method" className="w-4 h-4 accent-salon-pink" />
                  電話での返信を希望
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="reply_method" className="w-4 h-4 accent-salon-pink" />
                  メールでの返信を希望
                </label>
              </div>
            </div>

            {/* 7. Inquiry Items */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-gray-700">お問い合わせ項目</label>
                  <span className="text-[10px] text-gray-400 font-normal">※複数選択可</span>
                </div>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                {["電話代行", "資料請求", "CTIシステム", "CRMシステム", "オーダーメイドプラン", "WEB予約システム", "WEB制作", "お見積り"].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-salon-pink" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* 8. Content */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">お問い合わせ内容</label>
                <span className="bg-[#f8d7da] text-[#f69494] text-[10px] px-2 py-0.5 rounded border border-[#f69494]/30">任意</span>
              </div>
              <div className="w-full md:w-2/3">
                <textarea rows={6} className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"></textarea>
              </div>
            </div>

            {/* 9. Source */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">当社を何でお知りになられましたか？</label>
                <span className="bg-[#f8d7da] text-[#f69494] text-[10px] px-2 py-0.5 rounded border border-[#f69494]/30">任意</span>
              </div>
              <div className="w-full md:w-2/3 flex flex-wrap gap-4 text-xs text-gray-600">
                {["Yahoo! 検索", "google 検索", "公式 Twitter", "ご紹介", "その他"].map((source) => (
                  <label key={source} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="source" className="w-4 h-4 accent-salon-pink" />
                    {source}
                  </label>
                ))}
              </div>
            </div>

            {/* 10. Others input */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3">
                <label className="text-xs font-bold text-gray-600">上記で「その他」とお答えになられた方は、内容をご記入ください</label>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 11. Deciding factor */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3 flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">お問い合わせの決めて</label>
                <span className="bg-[#f8d7da] text-[#f69494] text-[10px] px-2 py-0.5 rounded border border-[#f69494]/30">任意</span>
              </div>
              <div className="w-full md:w-2/3">
                <input type="text" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink" />
              </div>
            </div>

            {/* 12. Privacy Policy */}
            <div className="space-y-4">
              <div className="flex items-center justify-between md:w-1/3">
                <label className="text-sm font-bold text-gray-700">個人情報の取扱いについて</label>
                <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
              </div>
              <div className="bg-white border border-gray-300 p-4 h-40 overflow-y-auto text-xs text-gray-600 leading-relaxed rounded">
                <p>１．お客様にご入力いただいた情報は、お問い合わせに関する業務と、サービス紹介など、お客様にとって有益と弊社が判断する情報をご案内するために利用し、他の目的には一切使用いたしません。</p>
                <p className="mt-2">２．下記の3.4.の場合を除き、ご入力いただいた個人情報を、事前にお客様の同意を得ずに第三者に提供・委託することはありません。</p>
                <p className="mt-2">３．業務の一部を外部に委託する場合があり、委託先に対して個人情報の取扱いを適切に管理いたします。</p>
                <p className="mt-2">４．法令に基づく要求があった場合。</p>
                <p className="mt-2">以上の内容に同意される方は、下記の「同意する」にチェックを入れ、確認画面へお進みください。</p>
              </div>
              <div className="flex justify-start">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input 
                    type="radio" 
                    name="privacy_agree" 
                    onChange={() => setAgreed(true)} 
                    className="w-4 h-4 accent-salon-pink" 
                  />
                  同意する
                </label>
              </div>

              {/* Contact Window for Privacy */}
              <div className="bg-[#e2e8f0] p-6 rounded text-center text-xs text-gray-700 space-y-1">
                <p className="font-bold">【個人情報の取り扱いに関する相談窓口】</p>
                <p>こころサポート株式会社</p>
                <p>担当：和田</p>
                <p>TEL：050-5443-1770</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit" 
                className={`bg-[#f69494] text-white px-16 py-4 rounded-full font-bold text-xl shadow-lg transition-all transform hover:scale-105 ${!agreed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f47c7c]'}`}
                disabled={!agreed}
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
          <Link to="/" className="hover:text-salon-pink">トップ</Link> &gt; <span className="text-gray-600">お問い合わせフォーム</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactPage;
