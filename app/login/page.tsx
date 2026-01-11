"use client";

import { createClient } from "@/utils/supabase/client";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("メールアドレスまたはパスワードが正しくありません。");
      setIsLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-salon-light flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-salon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-salon-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tighter">
              SALON <span className="text-salon-pink">CONCIERGE</span>
            </h1>
          </Link>
          <div className="h-1 w-12 bg-salon-pink mx-auto rounded-full"></div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10 border border-salon-tan/20">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              管理者ログイン
            </h2>
            <p className="text-xs text-gray-400">
              管理画面にアクセスするにはログインが必要です
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 ml-1">
                メールアドレス
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-salon-pink transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-salon-light border border-salon-tan/30 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all placeholder:text-gray-300"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-gray-600">
                  パスワード
                </label>
                <Link
                  href="#"
                  className="text-[10px] text-salon-pink font-bold hover:underline"
                >
                  パスワードを忘れた場合
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-salon-pink transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-salon-light border border-salon-tan/30 rounded-2xl pl-12 pr-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-salon-pink transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-salon-pink border-salon-tan rounded focus:ring-salon-pink/20"
              />
              <label
                htmlFor="remember"
                className="text-xs text-gray-500 cursor-pointer select-none"
              >
                ログイン状態を保持する
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gray-800 text-white py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98] ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-salon-pink"
              }`}
            >
              {isLoading ? "ログイン中..." : "ログイン"}{" "}
              {!isLoading && (
                <LogIn
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-[10px] text-gray-400">
              © 2024 Salon Concierge. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Home Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-salon-pink transition-colors inline-flex items-center gap-1"
          >
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>{" "}
            サイトトップへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
