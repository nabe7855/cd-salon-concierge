"use client";

import { createClient } from "@/utils/supabase/client";
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminDashboard: React.FC = () => {
  const [counts, setCounts] = useState({
    inquiries: 0,
    partners: 0,
    blog: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setIsLoading(true);
    const [inq, part, blg] = await Promise.all([
      supabase
        .from("inquiries")
        .select("*", { count: "exact", head: true })
        .eq("status", "new"),
      supabase
        .from("partner_applications")
        .select("*", { count: "exact", head: true })
        .eq("status", "pending"),
      supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    ]);

    setCounts({
      inquiries: inq.count || 0,
      partners: part.count || 0,
      blog: blg.count || 0,
    });
    setIsLoading(false);
  };

  const stats = [
    {
      name: "未読お問い合わせ",
      value: counts.inquiries.toString(),
      trend: "New",
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      name: "審査待ちパートナー",
      value: counts.partners.toString(),
      trend: "Pending",
      icon: Users,
      color: "bg-salon-pink",
    },
    {
      name: "公開ブログ記事",
      value: counts.blog.toString(),
      trend: "Total",
      icon: TrendingUp,
      color: "bg-salon-gold",
    },
  ];

  const recentActivities = [
    {
      title: "データベース連携完了",
      user: "System",
      time: "現在",
      status: "done",
    },
    {
      title: "管理画面の初期化",
      user: "Admin",
      time: "1時間前",
      status: "published",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ダッシュボード概要
        </h1>
        <p className="text-sm text-gray-400">
          お疲れ様です、一日の状況をこちらで確認できます。
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
              >
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                {stat.trend} <ArrowUpRight size={12} />
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                {stat.name}
              </p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Activity */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <Clock size={20} className="text-salon-pink" />{" "}
              最近のアクティビティ
            </h2>
            <Link
              href="#"
              className="text-xs text-salon-pink font-bold hover:underline flex items-center gap-1"
            >
              すべて見る <ExternalLink size={12} />
            </Link>
          </div>
          <div className="space-y-6">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    idx === 0 ? "bg-salon-pink" : "bg-gray-200"
                  }`}
                ></div>
                <div className="flex-1 pb-6 border-b border-gray-50 group-last:border-0 group-last:pb-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-bold text-gray-800">
                      {activity.title}
                    </p>
                    <span className="text-[10px] text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortcuts / Quick Actions */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <h2 className="text-xl font-bold mb-4">新規ブログを書く</h2>
            <p className="text-xs text-gray-400 mb-8 leading-relaxed">
              新しい情報を発信して、サロン経営者の
              <br />
              課題解決をサポートしましょう。
            </p>
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-2 bg-salon-pink text-white px-8 py-4 rounded-2xl font-bold text-sm hover:translate-x-1 transition-transform"
            >
              エディタを開く <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Link
              href="/admin/inquiries"
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <p className="text-xs font-bold text-gray-800">未読メッセージ</p>
            </Link>
            <Link
              href="/admin/partners"
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-12 h-12 bg-salon-pink/10 text-salon-pink rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <p className="text-xs font-bold text-gray-800">パートナー審査</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
