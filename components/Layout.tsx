"use client";

import {
  ChevronRight,
  Clock,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { NAV_LINKS } from "../constants";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-botanical-primary text-white text-[10px] md:text-xs py-1 text-center">
        メンズエステ専門電話代行 | 業界最高水準の応答率と契約継続率
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-sage-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-botanical-primary rounded-lg flex items-center justify-center text-white shadow-md group-hover:bg-botanical-primary-light transition-colors">
              <span className="font-heading font-bold text-xl tracking-tighter">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold text-botanical-primary leading-none font-heading tracking-wide">
                SalonConcierge
              </h1>
              <span className="text-[9px] md:text-[10px] text-gray-400 tracking-wider font-medium opacity-80 uppercase block mt-1">
                Phone Reception Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-nowrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`salon-nav-link whitespace-nowrap ${
                  pathname === link.path
                    ? "salon-nav-link-active"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Group (Desktop) */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <a
              href="https://line.me"
              className="bg-[#06C755] hover:bg-[#05b34c] text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              LINEでお問い合わせ（24h）
            </a>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              受付時間: 9:30 - 翌6:00
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-sage-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Sidebar/Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-sage-100 p-4 absolute top-full left-0 w-full shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-700 text-lg py-2 border-b border-sage-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-10 flex flex-col gap-3">
                <a
                  href="tel:050-5443-1770"
                  className="flex items-center justify-center gap-2 bg-sage-500 text-white py-3 rounded-xl font-bold"
                >
                  <Phone className="w-5 h-5" /> 050-5443-1770
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-[#06C755] text-white py-3 rounded-xl font-bold"
                >
                  <MessageCircle className="w-5 h-5" /> LINE 24時間受付
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-24 md:pb-0">{children}</main>

      {/* Mobile Floating Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-2 pb-4 pt-2 bg-gradient-to-t from-white via-white/80 to-transparent">
        <div className="flex items-stretch gap-1.5 h-14 md:h-18 max-w-md mx-auto">
          {/* Phone Button */}
          <a
            href="tel:050-5443-1770"
            className="flex-1 bg-botanical-primary-light text-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5 mb-0.5" />
            <span className="text-[9px] font-bold text-white leading-none">
              9:30-翌4:00
            </span>
          </a>

          {/* LINE Button */}
          <a
            href="#"
            className="flex-1 bg-white border-2 border-botanical-primary-light text-botanical-primary rounded-xl shadow-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <div className="bg-[#06C755] text-white rounded-full p-0.5 mb-1 px-1.5 text-[8px] font-black leading-none flex items-center justify-center h-5 w-10">
              LINE
            </div>
            <span className="text-[9px] font-bold leading-none">
              24時間受付
            </span>
          </a>

          {/* Inquiry Button */}
          <Link
            href="/contact"
            className="flex-[1.2] bg-botanical-primary text-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center px-1 hover:opacity-90 transition-opacity"
          >
            <span className="text-[9px] font-bold leading-tight">
              お問い合わせフォーム
            </span>
            <span className="text-[8px] font-medium mt-0.5 text-white/80 leading-none">
              24h受付
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-6 h-6 text-sage-400" />
                <span className="text-xl font-bold text-white tracking-tighter">
                  SalonConcierge
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                メンズエステサロン運営の経験を活かし、オーナー様に代わってお電話を承ります。24時間受付のLINEでもお気軽にご相談ください。
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sage-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sage-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 border-l-4 border-sage-500 pl-3">
                サービスメニュー
              </h3>
              <ul className="grid grid-cols-1 gap-3 text-sm">
                {NAV_LINKS.slice(1).map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="hover:text-sage-400 transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold mb-6 border-l-4 border-sage-500 pl-3">
                お問い合わせ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-sage-400" />
                    <span className="text-white font-bold">
                      お電話でのご相談
                    </span>
                  </div>
                  <p className="text-xl text-white font-bold mb-1">
                    050-5443-1770
                  </p>
                  <p className="text-xs">受付時間: 9:30 - 翌6:00</p>
                </div>
                <Link
                  href="/contact"
                  className="bg-sage-600 hover:bg-sage-700 p-4 rounded-xl flex flex-col justify-center transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white font-bold">メールフォーム</span>
                  </div>
                  <p className="text-xs text-sage-100">
                    24時間受付中・順次ご返信
                  </p>
                </Link>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="block w-full bg-[#06C755] hover:bg-[#05b34c] text-white py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />{" "}
                  LINEでお問い合わせ（24時間受付）
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs pb-20 md:pb-0">
            <p>
              &copy; {new Date().getFullYear()} SalonConcierge. All rights
              reserved.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <Link href="/" className="hover:text-white">
                特定商取引法に基づく表記
              </Link>
              <Link href="/" className="hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/" className="hover:text-white">
                利用規約
              </Link>
              <Link href="/login" className="hover:text-white">
                管理者ログイン
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
