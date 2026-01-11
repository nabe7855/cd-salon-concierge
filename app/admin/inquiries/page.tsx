"use client";

import { createClient } from "@/utils/supabase/client";
import {
  ChevronRight,
  Download,
  Filter,
  Mail,
  MoreVertical,
  Search,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const InquiriesAdminPage: React.FC = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching inquiries:", error);
    } else {
      setInquiries(data || []);
    }
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
      case "未読":
        return "bg-red-50 text-red-500 border-red-100";
      case "replied":
      case "返信済":
        return "bg-green-50 text-green-500 border-green-100";
      case "pending":
      case "保留":
        return "bg-orange-50 text-orange-500 border-orange-100";
      default:
        return "bg-gray-50 text-gray-500 border-gray-100";
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case "new":
        return "未読";
      case "replied":
        return "返信済";
      case "pending":
        return "保留";
      case "archived":
        return "アーカイブ";
      default:
        return status;
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
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-gray-400"
                    >
                      読み込み中...
                    </td>
                  </tr>
                ) : inquiries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-gray-400"
                    >
                      お問い合わせはありません
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inquiry) => (
                    <tr
                      key={inquiry.id}
                      className={`hover:bg-salon-light/30 transition-colors cursor-pointer ${
                        selectedInquiry === inquiry.id
                          ? "bg-salon-light/50"
                          : ""
                      }`}
                      onClick={() => setSelectedInquiry(inquiry.id)}
                    >
                      <td className="px-6 py-6">
                        <p className="text-sm font-bold text-gray-800">
                          {inquiry.contact_name}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {inquiry.salon_name}
                        </p>
                      </td>
                      <td className="px-6 py-6 hidden md:table-cell text-xs text-gray-500">
                        {Array.isArray(inquiry.inquiry_items)
                          ? inquiry.inquiry_items.join(", ")
                          : "未設定"}
                      </td>
                      <td className="px-6 py-6">
                        <span
                          className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${getStatusColor(
                            inquiry.status
                          )}`}
                        >
                          {formatStatus(inquiry.status)}
                        </span>
                      </td>
                      <td className="px-6 py-6 hidden sm:table-cell text-xs text-gray-400">
                        {inquiry.created_at
                          ? new Date(inquiry.created_at).toLocaleDateString()
                          : ""}
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 h-fit lg:sticky lg:top-32">
          {selectedInquiry ? (
            (() => {
              const inquiry = inquiries.find((i) => i.id === selectedInquiry);
              if (!inquiry) return null;
              return (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusColor(
                        inquiry.status
                      )}`}
                    >
                      {formatStatus(inquiry.status)}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {inquiry.contact_name}
                    </h3>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <Mail size={14} /> {inquiry.email}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {inquiry.salon_name} ({inquiry.prefecture})
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                        Items
                      </p>
                      <p className="text-sm text-gray-700">
                        {Array.isArray(inquiry.inquiry_items)
                          ? inquiry.inquiry_items.join(", ")
                          : "未設定"}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                        Content
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {inquiry.content || "内容なし"}
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-salon-pink text-white py-4 rounded-2xl font-bold shadow-lg shadow-salon-pink/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    返信を作成する <ChevronRight size={18} />
                  </button>
                </div>
              );
            })()
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
