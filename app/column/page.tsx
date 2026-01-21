"use client";

import Layout from "@/components/Layout";
import { createClient } from "@/utils/supabase/client";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Leaf,
  Search,
  Tag,
} from "lucide-react";
import Link from "next/link";
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

const ColumnListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const supabase = createClient();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.title.includes(searchTerm) ||
      p.category.includes(searchTerm) ||
      p.excerpt.includes(searchTerm),
  );

  const categories = Array.from(new Set(posts.map((p) => p.category)));

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

  return (
    <Layout>
      <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink transition-colors">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600 font-bold">コラム</span>
          </div>
        </div>

        {/* Decoration Row */}
        <div className="h-2 bg-gradient-to-r from-salon-tan via-salon-pink/20 to-salon-tan opacity-30"></div>

        <section className="pt-16 pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="flex flex-col items-center mb-20">
              <div className="bg-salon-pink/5 p-4 rounded-full mb-6">
                <BookOpen size={32} className="text-salon-pink" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-[0.2em] mb-4">
                COLUMN
              </h1>
              <div className="w-12 h-1 bg-salon-pink rounded-full mb-4"></div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                メンズエステ経営に役立つ情報発信
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main List Column */}
              <div className="lg:col-span-2 space-y-12">
                {isLoading ? (
                  <div className="text-center py-20">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-salon-pink border-t-transparent"></div>
                    <p className="mt-4 text-sm text-gray-400">読み込み中...</p>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-[32px] border border-gray-100 italic text-gray-400">
                    記事が見つかりませんでした
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    >
                      <Link
                        href={`/column/${post.id}`}
                        className="flex flex-col md:flex-row"
                      >
                        <div className="md:w-1/3 overflow-hidden">
                          <img
                            src={post.image_url || "/images/placeholder.png"}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="md:w-2/3 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-[10px] font-bold text-salon-pink bg-salon-pink/5 px-2 py-0.5 rounded uppercase tracking-tighter">
                                {post.category}
                              </span>
                              <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                                <Calendar size={12} />{" "}
                                {post.published_at &&
                                  formatDate(post.published_at)}
                              </div>
                            </div>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-salon-pink transition-colors line-clamp-2 leading-relaxed">
                              {post.title}
                            </h2>
                            <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-salon-pink tracking-wider">
                            READ MORE{" "}
                            <ArrowRight
                              size={14}
                              className="group-hover:translate-x-2 transition-transform"
                            />
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))
                )}

                {/* Pagination - Dummy */}
                {!isLoading && filteredPosts.length > 0 && (
                  <div className="flex justify-center gap-2 pt-10">
                    <button className="w-10 h-10 rounded-full bg-salon-pink text-white flex items-center justify-center font-bold text-sm shadow-md">
                      1
                    </button>
                    {/* Add more paging logic if needed later */}
                  </div>
                )}
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1 space-y-10">
                {/* Search Box */}
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Search size={16} /> SEARCH
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="キーワードを入力"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-salon-light border border-salon-tan/30 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
                    />
                  </div>
                </div>

                {/* Category Box */}
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Tag size={16} /> CATEGORY
                  </h3>
                  <ul className="space-y-4">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setSearchTerm(cat)}
                          className="w-full flex items-center justify-between text-sm text-gray-500 hover:text-salon-pink transition-colors group"
                        >
                          {cat}{" "}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social / About Mini */}
                <div className="bg-salon-pink rounded-[32px] p-8 text-white relative overflow-hidden">
                  <Leaf
                    className="absolute -bottom-10 -right-10 opacity-20"
                    size={160}
                  />
                  <h3 className="text-lg font-bold mb-4 relative z-10">
                    SalonConcierge Column
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90 relative z-10">
                    メンズエステ業界の最新トレンドや、現場で役立つ実践的なノウハウをお届けします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-6xl mt-12 border-t border-gray-100 pt-8">
          <nav className="text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-500">コラム</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default ColumnListPage;
