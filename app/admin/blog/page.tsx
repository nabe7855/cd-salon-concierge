"use client";

import { BLOG_POSTS } from "@/constants";
import { Edit3, Eye, Plus, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";

const BlogAdminPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ブログ記事管理
          </h1>
          <p className="text-sm text-gray-400">
            コラム記事の公開、編集、削除を管理します。
          </p>
        </div>
        <button className="bg-gray-800 text-white px-6 py-4 rounded-2xl font-bold shadow-xl hover:bg-salon-pink transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]">
          <Plus size={18} /> 新規記事を作成
        </button>
      </div>

      {/* Stats Mini Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Total Posts
          </p>
          <p className="text-xl font-bold text-gray-800">{BLOG_POSTS.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Published
          </p>
          <p className="text-xl font-bold text-green-500">
            {BLOG_POSTS.length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Drafts
          </p>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Avg. Views
          </p>
          <p className="text-xl font-bold text-salon-pink">124</p>
        </div>
      </div>

      {/* Search & List */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="タイトルやカテゴリで検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {BLOG_POSTS.filter(
            (p) =>
              p.title.includes(searchTerm) || p.category.includes(searchTerm)
          ).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gray-800/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
                  {post.category}
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:text-salon-pink transition-colors">
                    <Edit3 size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-400 font-bold">
                    {post.date}
                  </p>
                  <h3 className="text-sm font-bold text-gray-800 leading-tight line-clamp-2 h-10">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-salon-tan flex items-center justify-center text-[10px] font-bold text-gray-500">
                      A
                    </div>
                    <span className="text-[10px] text-gray-500">Admin</span>
                  </div>
                  <button className="text-gray-300 hover:text-salon-pink transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;
