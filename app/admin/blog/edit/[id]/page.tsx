"use client";

import { createClient } from "@/utils/supabase/client";
import MDEditor from "@uiw/react-md-editor";
import { ArrowLeft, Eye, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditBlogPostPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "メンズエステについて",
    excerpt: "",
    image_url: "",
    content: "",
    published_at: null as string | null,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      alert("記事の読み込みに失敗しました。");
      console.error(error);
      router.push("/admin/blog");
    } else if (data) {
      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        category: data.category || "メンズエステについて",
        excerpt: data.excerpt || "",
        image_url: data.image_url || "",
        content: data.content || "",
        published_at: data.published_at,
      });
    }
    setIsLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (publish: boolean = false) => {
    if (!formData.title || !formData.slug || !formData.content) {
      alert("タイトル、スラッグ、本文は必須です。");
      return;
    }

    setIsSubmitting(true);

    const updateData: any = {
      title: formData.title,
      slug: formData.slug,
      category: formData.category,
      excerpt: formData.excerpt,
      image_url: formData.image_url,
      content: formData.content,
    };

    if (publish && !formData.published_at) {
      updateData.published_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from("blog_posts")
      .update(updateData)
      .eq("id", params.id);

    if (error) {
      alert("更新に失敗しました。");
      console.error(error);
    } else {
      alert(publish ? "記事を公開しました。" : "記事を更新しました。");
      router.push("/admin/blog");
    }

    setIsSubmitting(false);
  };

  const handleUnpublish = async () => {
    if (!confirm("この記事を非公開にしますか？")) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from("blog_posts")
      .update({ published_at: null })
      .eq("id", params.id);

    if (error) {
      alert("非公開化に失敗しました。");
      console.error(error);
    } else {
      alert("記事を非公開にしました。");
      setFormData((prev) => ({ ...prev, published_at: null }));
    }

    setIsSubmitting(false);
  };

  const handleDelete = async () => {
    if (!confirm("この記事を削除しますか？この操作は取り消せません。")) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", params.id);

    if (error) {
      alert("削除に失敗しました。");
      console.error(error);
      setIsSubmitting(false);
    } else {
      alert("記事を削除しました。");
      router.push("/admin/blog");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-400">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">記事を編集</h1>
            <p className="text-sm text-gray-400">
              {formData.published_at ? "公開中" : "下書き"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Eye size={16} />
            {showPreview ? "編集" : "プレビュー"}
          </button>
          <button
            onClick={handleDelete}
            disabled={isSubmitting}
            className="px-4 py-2 border border-red-200 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Trash2 size={16} />
            削除
          </button>
          {formData.published_at ? (
            <>
              <button
                onClick={handleUnpublish}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                非公開にする
              </button>
              <button
                onClick={() => handleUpdate(false)}
                disabled={isSubmitting}
                className="px-6 py-2 bg-gray-800 text-white rounded-xl text-sm font-bold hover:bg-salon-pink transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "更新中..." : "更新する"}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleUpdate(false)}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <Save size={16} />
                下書き保存
              </button>
              <button
                onClick={() => handleUpdate(true)}
                disabled={isSubmitting}
                className="px-6 py-2 bg-gray-800 text-white rounded-xl text-sm font-bold hover:bg-salon-pink transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "公開中..." : "公開する"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            タイトル <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="記事のタイトルを入力"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            スラッグ（URL） <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleInputChange}
            placeholder="url-friendly-slug"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20 font-mono"
          />
          <p className="text-xs text-gray-400">
            記事のURL: /column/{formData.slug || "slug"}
          </p>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">カテゴリー</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
          >
            <option>メンズエステについて</option>
            <option>メンズエステ経営について</option>
            <option>セラピストについて</option>
            <option>お知らせ</option>
          </select>
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            抜粋（要約）
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={3}
            placeholder="記事の要約を入力（一覧ページに表示されます）"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            アイキャッチ画像URL
          </label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/20"
          />
          {formData.image_url && (
            <div className="mt-2 rounded-xl overflow-hidden border border-gray-200">
              <img
                src={formData.image_url}
                alt="Preview"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x400?text=Invalid+Image+URL";
                }}
              />
            </div>
          )}
        </div>

        {/* Content Editor */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            本文 <span className="text-red-500">*</span>
          </label>
          {showPreview ? (
            <div className="prose max-w-none bg-gray-50 border border-gray-200 rounded-xl p-6">
              <MDEditor.Markdown source={formData.content} />
            </div>
          ) : (
            <div data-color-mode="light">
              <MDEditor
                value={formData.content}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, content: val || "" }))
                }
                height={500}
                preview="edit"
                hideToolbar={false}
                enableScroll={true}
                visibleDragbar={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlogPostPage;
