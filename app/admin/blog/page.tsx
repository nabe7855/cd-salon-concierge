"use client";

import { createClient } from "@/utils/supabase/client";
import { Edit3, Eye, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogAdminPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`「${title}」を削除しますか？この操作は取り消せません。`))
      return;

    const { error } = await supabase.from("blog_posts").delete().eq("id", id);

    if (error) {
      alert("削除に失敗しました。");
      console.error(error);
    } else {
      alert("記事を削除しました。");
      fetchPosts();
    }
  };

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
        <Link
          href="/admin/blog/new"
          className="bg-gray-800 text-white px-6 py-4 rounded-2xl font-bold shadow-xl hover:bg-salon-pink transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]"
        >
          <Plus size={18} /> 新規記事を作成
        </Link>
      </div>

      {/* Stats Mini Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Total Posts
          </p>
          <p className="text-xl font-bold text-gray-800">{posts.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Published
          </p>
          <p className="text-xl font-bold text-green-500">
            {posts.filter((p) => p.published_at).length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Drafts
          </p>
          <p className="text-xl font-bold text-gray-800">
            {posts.filter((p) => !p.published_at).length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Avg. Views
          </p>
          <p className="text-xl font-bold text-salon-pink">-</p>
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
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-gray-400">
              読み込み中...
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-full py-20 text-center text-gray-400">
              記事はありません
            </div>
          ) : (
            posts
              .filter(
                (p) =>
                  p.title.includes(searchTerm) ||
                  p.category.includes(searchTerm)
              )
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={
                        post.image_url ||
                        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/admin/blog/edit/${post.id}`}
                        className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:text-salon-pink transition-colors"
                      >
                        <Edit3 size={14} />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        className="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-[10px] text-gray-400 font-bold">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString()
                          : "下書き"}
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
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;
