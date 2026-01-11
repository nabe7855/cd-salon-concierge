"use client";

import { createClient } from "@/utils/supabase/client";
import {
  Briefcase,
  ExternalLink,
  Mail,
  MoreVertical,
  Phone,
  Search,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const PartnersAdminPage: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [partners, setPartners] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("partner_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching partners:", error);
    } else {
      setPartners(data || []);
    }
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
      case "審査中":
        return "bg-blue-50 text-blue-500 border-blue-100";
      case "approved":
      case "承認済":
        return "bg-green-50 text-green-500 border-green-100";
      case "rejected":
      case "却下":
        return "bg-red-50 text-red-500 border-red-100";
      default:
        return "bg-gray-50 text-gray-500 border-gray-100";
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case "pending":
        return "審査中";
      case "approved":
        return "承認済";
      case "rejected":
        return "却下";
      default:
        return status;
    }
  };

  const currentPartner = partners.find((p) => p.id === selectedPartner);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          協力会社募集管理
        </h1>
        <p className="text-sm text-gray-400">
          パートナー提携の応募企業を管理・審査します。
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* List */}
        <div className="xl:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="企業名や担当者で検索..."
                className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
              />
            </div>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-50">
              {isLoading ? (
                <div className="p-10 text-center text-gray-400">
                  読み込み中...
                </div>
              ) : partners.length === 0 ? (
                <div className="p-10 text-center text-gray-400">
                  応募はありません
                </div>
              ) : (
                partners.map((partner) => (
                  <div
                    key={partner.id}
                    onClick={() => setSelectedPartner(partner.id)}
                    className={`p-6 flex items-center justify-between hover:bg-salon-light/30 transition-all cursor-pointer ${
                      selectedPartner === partner.id ? "bg-salon-light/50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          selectedPartner === partner.id
                            ? "bg-salon-pink text-white"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          {partner.company_name}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {partner.contact_name} |{" "}
                          {partner.created_at
                            ? new Date(partner.created_at).toLocaleDateString()
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusColor(
                          partner.status
                        )}`}
                      >
                        {formatStatus(partner.status)}
                      </span>
                      <button className="text-gray-300 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Details Area */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8 h-fit lg:sticky lg:top-32">
          {currentPartner ? (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-800">提携詳細</h2>
                <span
                  className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusColor(
                    currentPartner.status
                  )}`}
                >
                  {formatStatus(currentPartner.status)}
                </span>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Company
                  </p>
                  <p className="text-base font-bold text-gray-800">
                    {currentPartner.company_name}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Website
                  </p>
                  <a
                    href={currentPartner.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-salon-pink flex items-center gap-1 hover:underline"
                  >
                    {currentPartner.website_url} <ExternalLink size={14} />
                  </a>
                </div>

                <hr className="border-gray-50" />

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">担当者名</p>
                      <p className="text-sm font-bold text-gray-700">
                        {currentPartner.contact_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">
                        メールアドレス
                      </p>
                      <p className="text-sm font-bold text-gray-700">
                        {currentPartner.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">電話番号</p>
                      <p className="text-sm font-bold text-gray-700">
                        {currentPartner.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Remarks
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentPartner.remarks || "備考なし"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-800 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-salon-pink transition-all">
                  承認する
                </button>
                <button className="px-6 py-4 border border-gray-200 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition-all">
                  却下
                </button>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-salon-light rounded-[32px] flex items-center justify-center text-salon-pink/30 mb-6">
                <Briefcase size={32} />
              </div>
              <p className="text-sm font-bold text-gray-400">
                詳細を確認するパートナーを選択してください
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersAdminPage;
