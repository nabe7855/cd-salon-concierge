"use client";

import Layout from "@/components/Layout";
import { createClient } from "@/utils/supabase/client";
import MDEditor from "@uiw/react-md-editor";
import {
  ChevronRight,
  Clock,
  Copy,
  CornerDownRight,
  Facebook,
  MessageCircle,
  Search,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
}

const ColumnDetailPage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    setIsLoading(true);

    // Fetch current post
    const { data: currentPost, error: postError } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (postError) {
      console.error("Error fetching post:", postError);
    } else {
      setPost(currentPost);
    }

    // Fetch recent posts
    const { data: recent, error: recentError } = await supabase
      .from("blog_posts")
      .select("*")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })
      .limit(5);

    if (recentError) {
      console.error("Error fetching recent posts:", recentError);
    } else {
      setRecentPosts(recent || []);
    }

    // Fetch categories (unique values)
    const { data: cats, error: catsError } = await supabase
      .from("blog_posts")
      .select("category")
      .not("published_at", "is", null);

    if (catsError) {
      console.error("Error fetching categories:", catsError);
    } else {
      const uniqueCats = Array.from(
        new Set(cats?.map((p: any) => p.category) || []),
      ) as string[];
      setCategories(uniqueCats);
    }

    setIsLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, ".");
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="bg-[#f9fbf9] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-salon-pink border-t-transparent"></div>
            <p className="mt-4 text-gray-500 font-sans">読み込み中...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="bg-[#f9fbf9] min-h-screen flex items-center justify-center font-sans">
          <div className="text-center">
            <p className="text-gray-500 mb-6">記事が見つかりませんでした</p>
            <Link
              href="/column"
              className="bg-salon-pink text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-salon-pink/80 transition-all"
            >
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#f9fbf9] min-h-screen pb-20 font-sans">
        {/* Header Info */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[10px] text-gray-400">
            <span>メンズエステサロン専門の電話代行 | コラムのページ</span>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-salon-pink">
                HOME
              </Link>
              <Link href="/column" className="hover:text-salon-pink">
                コラム一覧
              </Link>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-12 max-w-7xl">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-8">
              <Link href="/" className="hover:underline">
                ホーム
              </Link>{" "}
              <ChevronRight size={10} />
              <Link href="/column" className="hover:underline">
                {post.category}
              </Link>
            </div>

            <article className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <header className="mb-10">
                <div className="inline-block bg-gray-800 text-white text-[10px] px-3 py-1 rounded mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-[11px] text-gray-400 border-t border-gray-50 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />{" "}
                    {post.published_at && formatDate(post.published_at)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> SalonConciergeAdmin
                  </span>
                </div>
              </header>

              {post.image_url && (
                <div className="mb-12 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed">
                <MDEditor.Markdown
                  source={post.content}
                  style={{ backgroundColor: "transparent" }}
                />

                {/* Fake Link Box */}
                <div className="bg-salon-pink/5 border border-salon-pink/20 p-6 rounded-lg text-sm mt-12">
                  <Link
                    href="/contact"
                    className="text-salon-pink font-bold flex items-center gap-2 hover:underline"
                  >
                    <CornerDownRight size={14} /> 受付代行はこちらからご相談
                  </Link>
                </div>

                {/* Share Buttons */}
                <div className="mt-20 border-t border-gray-100 pt-10">
                  <p className="text-center text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                    Share This Article
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <button className="bg-[#000000] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Twitter size={14} className="mb-1" /> X
                    </button>
                    <button className="bg-[#1877f2] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Facebook size={14} className="mb-1" /> Facebook
                    </button>
                    <button className="bg-[#0084ff] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      はてブ
                    </button>
                    <button className="bg-[#ee4056] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      Pocket
                    </button>
                    <button className="bg-[#06c755] text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <MessageCircle size={14} className="mb-1" /> LINE
                    </button>
                    <button className="bg-gray-700 text-white py-3 rounded flex flex-col items-center justify-center text-[10px] font-bold">
                      <Copy size={14} className="mb-1" /> Copy
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            <section className="mt-16">
              <h2 className="text-xl font-bold text-gray-800 mb-8 border-b-2 border-gray-100 pb-4">
                関連記事
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts
                  .filter((rp) => rp.id !== id)
                  .slice(0, 4)
                  .map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/column/${rp.id}`}
                      className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                    >
                      <img
                        src={rp.image_url || "/images/placeholder.png"}
                        className="w-24 h-24 object-cover rounded flex-shrink-0"
                        alt={rp.title}
                      />
                      <div>
                        <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2 line-clamp-2">
                          {rp.title}
                        </h3>
                        <span className="text-[10px] text-gray-400">
                          {rp.published_at && formatDate(rp.published_at)}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>

            {/* Comment Section */}
            <section className="mt-16 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-8">コメント</h2>
              <button className="w-full bg-gray-50 border-2 border-dashed border-gray-200 py-6 rounded-lg text-gray-400 font-bold hover:bg-gray-100 transition-colors">
                コメントを書き込む
              </button>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-4 border-l-4 border-salon-pink pl-3">
                検索
              </h3>
              <form action="/column" method="GET" className="flex">
                <input
                  type="text"
                  name="q"
                  placeholder="キーワードを入力"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-l px-3 py-2 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-4 rounded-r hover:bg-gray-700 transition-colors"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">
                最近の投稿
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((p) => (
                  <li
                    key={p.id}
                    className="pb-4 border-b border-gray-50 last:border-0"
                  >
                    <Link
                      href={`/column/${p.id}`}
                      className={`text-sm leading-relaxed transition-colors ${
                        p.id === id
                          ? "text-salon-pink font-bold"
                          : "text-gray-600 hover:text-salon-pink"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">
                カテゴリー
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/column?c=${cat}`}
                      className="text-sm text-gray-600 hover:text-salon-pink transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={12} className="text-gray-300" /> {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default ColumnDetailPage;
