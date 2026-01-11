"use client";

import {
  ChevronRight,
  Download,
  Filter,
  Mail,
  MoreVertical,
  Search,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";

const InquiriesAdminPage: React.FC = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<number | null>(null);

  const inquiries = [
    {
      id: 1,
      name: "佐藤 健一",
      company: "佐藤ヘアサロン",
      email: "sato@example.com",
      date: "2024-01-11",
      status: "未読",
      category: "導入相談",
    },
    {
      id: 2,
      name: "田中 舞",
      company: "Salon de Tanaka",
      email: "tanaka@example.com",
      date: "2024-01-10",
      status: "返信済",
      category: "料金について",
    },
    {
      id: 3,
      name: "鈴木 一郎",
      company: "鈴木メンズエステ",
      email: "suzuki@example.com",
      date: "2024-01-09",
      status: "保留",
      category: "システム連携",
    },
    {
      id: 4,
      name: "高橋 智子",
      company: "ビューティー高橋",
      email: "takahashi@example.com",
      date: "2024-01-08",
      status: "未読",
      category: "その他",
    },
    {
      id: 5,
      name: "伊藤 淳",
      company: "イトウリラクゼーション",
      email: "ito@example.com",
      date: "2024-01-07",
      status: "返信済",
      category: "導入相談",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "未読":
        return "bg-red-50 text-red-500 border-red-100";
      case "返信済":
        return "bg-green-50 text-green-500 border-green-100";
      case "保留":
        return "bg-orange-50 text-orange-500 border-orange-100";
      default:
        return "bg-gray-50 text-gray-500 border-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            お問い合わせ管理
          </h1>
          <p className="text-sm text-gray-400">
            届いたお問い合わせの一覧表示と対応状況を管理します。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={16} /> CSVエクスポート
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 md:p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="お名前、会社名、内容で検索..."
            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors w-full md:w-auto">
            <Filter size={18} /> フィルタ
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Table List */}
        <div className="xl:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    お名前 / 会社名
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:table-cell">
                    カテゴリ
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    ステータス
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:table-cell">
                    日付
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className={`hover:bg-salon-light/30 transition-colors cursor-pointer ${
                      selectedInquiry === inquiry.id ? "bg-salon-light/50" : ""
                    }`}
                    onClick={() => setSelectedInquiry(inquiry.id)}
                  >
                    <td className="px-6 py-6">
                      <p className="text-sm font-bold text-gray-800">
                        {inquiry.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {inquiry.company}
                      </p>
                    </td>
                    <td className="px-6 py-6 hidden md:table-cell text-xs text-gray-500">
                      {inquiry.category}
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${getStatusColor(
                          inquiry.status
                        )}`}
                      >
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 hidden sm:table-cell text-xs text-gray-400">
                      {inquiry.date}
                    </td>
                    <td className="px-6 py-6 text-right">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 h-fit lg:sticky lg:top-32">
          {selectedInquiry ? (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusColor(
                    inquiries.find((i) => i.id === selectedInquiry)?.status ||
                      ""
                  )}`}
                >
                  {inquiries.find((i) => i.id === selectedInquiry)?.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {inquiries.find((i) => i.id === selectedInquiry)?.name}
                </h3>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Mail size={14} />{" "}
                  {inquiries.find((i) => i.id === selectedInquiry)?.email}
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Category
                  </p>
                  <p className="text-sm text-gray-700">
                    {inquiries.find((i) => i.id === selectedInquiry)?.category}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Content
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    初めまして。現在メンズエステの新規オープンを検討しております。
                    <br />
                    電話代行サービスの導入費用や、システムとの連携について詳しくお伺いしたいです。
                  </p>
                </div>
              </div>

              <button className="w-full bg-salon-pink text-white py-4 rounded-2xl font-bold shadow-lg shadow-salon-pink/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                返信を作成する <ChevronRight size={18} />
              </button>
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-4">
                <Mail size={32} />
              </div>
              <p className="text-sm font-bold text-gray-400">
                詳細を表示する項目を選択してください
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiriesAdminPage;
