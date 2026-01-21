-- ブログ画像用のストレージバケットとRLSポリシーを設定

-- 1. ストレージバケットを作成（Supabase Dashboard > Storage で実行）
-- バケット名: blog-images
-- Public: true
-- File size limit: 5MB
-- Allowed MIME types: image/png, image/jpeg, image/jpg, image/webp, image/gif

-- 2. RLSポリシーを設定（以下のSQLをSupabase SQL Editorで実行）

-- 誰でも画像を読み取れるようにする
CREATE POLICY "Public Access for blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- 認証済みユーザーが画像をアップロードできるようにする
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- 認証済みユーザーが画像を更新できるようにする
CREATE POLICY "Authenticated users can update blog images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- 認証済みユーザーが画像を削除できるようにする
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- 3. blog_postsテーブルのRLSポリシー（必要に応じて）

-- 誰でも公開済み記事を読み取れるようにする
CREATE POLICY "Public can read published posts"
ON blog_posts FOR SELECT
USING (published_at IS NOT NULL);

-- 認証済みユーザーがすべての記事を読み取れるようにする（管理画面用）
CREATE POLICY "Authenticated users can read all posts"
ON blog_posts FOR SELECT
USING (auth.role() = 'authenticated');

-- 認証済みユーザーが記事を作成できるようにする
CREATE POLICY "Authenticated users can create posts"
ON blog_posts FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- 認証済みユーザーが記事を更新できるようにする
CREATE POLICY "Authenticated users can update posts"
ON blog_posts FOR UPDATE
USING (auth.role() = 'authenticated');

-- 認証済みユーザーが記事を削除できるようにする
CREATE POLICY "Authenticated users can delete posts"
ON blog_posts FOR DELETE
USING (auth.role() = 'authenticated');

-- 4. RLSを有効化
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
