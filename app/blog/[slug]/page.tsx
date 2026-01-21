"use client";

import { createClient } from "@/utils/supabase/client";
import MDEditor from "@uiw/react-md-editor";
import { ArrowLeft, Calendar } from "lucide-react";
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

const BlogDetailPage: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .not("published_at", "is", null)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      setPost(data);
    }
    setIsLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-salon-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-salon-pink border-t-transparent"></div>
          <p className="mt-4 text-gray-500">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-salon-light flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">記事が見つかりません</p>
          <Link
            href="/blog"
            className="text-salon-pink hover:underline font-medium"
          >
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-salon-light font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-salon-pink hover:underline font-medium mb-4"
          >
            <ArrowLeft size={20} />
            ブログ一覧に戻る
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      {post.image_url && (
        <div className="relative h-96 bg-gray-100">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="mb-6">
          <span className="inline-block bg-salon-pink text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {post.published_at && formatDate(post.published_at)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <MDEditor.Markdown
            source={post.content}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </article>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-salon-pink hover:underline font-medium"
        >
          <ArrowLeft size={20} />
          ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
