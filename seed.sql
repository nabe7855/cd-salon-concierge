-- 初期管理者 (パスワードは 'admin123' のハッシュ想定)
INSERT INTO admins (email, password_hash, name)
VALUES ('admin@example.com', '$2b$10$YourHashHere', '管理者');

-- ブログ記事 (constants.tsx から移行)
INSERT INTO blog_posts (title, slug, category, excerpt, image_url, published_at)
VALUES 
('メンズエステの営業時間について', 'mens-esthe-business-hours', 'メンズエステについて', 'メンズエステ経営で「もう少し売上を伸ばしたい」と考えたとき...', 'https://images.unsplash.com/photo-1573163231162-80111d4d41d9?auto=format&fit=crop&q=80&w=800', NOW()),
('人気のあるセラピストさんの特徴とは？', 'popular-therapist-features', 'メンズエステについて', 'メンズエステに訪れるお客様は「心も体も癒されたい」との思いから...', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', NOW()),
('女の子が働きやすいメンズエステ店の探し方', 'how-to-find-good-shop', 'メンズエステ経営について', 'メンズエステの求人が数多くある中で、安心して使い続けられるお店選びが大切です。', 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800', NOW());

-- サンプルお問い合わせ
INSERT INTO inquiries (salon_name, contact_name, email, phone, prefecture, reply_method, inquiry_items, content, status)
VALUES 
('佐藤ヘアサロン', '佐藤 健一', 'sato@example.com', '03-1234-5678', '東京都', 'email', '["電話代行", "資料請求"]', '導入を検討しています。資料をお願いします。', 'new');

-- サンプル協力会社
INSERT INTO partner_applications (company_name, website_url, contact_name, email, phone, remarks, status)
VALUES 
('TechNext株式会社', 'https://technext.example.com', '山田 太郎', 'yamada@technext.com', '03-9999-8888', '貴社サービスとの連携を希望します。', 'pending');
