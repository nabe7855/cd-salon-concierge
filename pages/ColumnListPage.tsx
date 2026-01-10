
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const ColumnListPage: React.FC = () => {
  return (
    <div className="bg-[#f9fbf9] min-h-screen pb-20 font-sans">
      {/* Header Info */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[10px] text-gray-400">
          <span>メンズエステサロン専門の電話代行 | コラムのページ</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-salon-pink">HOME</Link>
            <Link to="/column" className="hover:text-salon-pink">コラム一覧</Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-12 max-w-7xl">
        
        {/* Main List Area */}
        <div className="flex-1 space-y-12">
          <div className="mb-10">
             <h1 className="text-3xl font-bold text-gray-700 font-serif italic border-b-2 border-salon-pink pb-4">
                SalonConcierge | コラム
             </h1>
          </div>

          <div className="space-y-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 p-4 hover:shadow-md transition-shadow group">
                <div className="w-full md:w-64 h-48 flex-shrink-0 relative overflow-hidden rounded-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-gray-800/80 text-white text-[10px] px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="flex-1 py-2 flex flex-col justify-between">
                  <div>
                    <Link to={`/column/${post.id}`} className="block">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-salon-pink transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.date}
                    </span>
                    <Link to={`/column/${post.id}`} className="text-salon-pink font-bold flex items-center gap-1 hover:underline">
                      続きを読む <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-12">
            <div className="bg-gray-100 p-3 rounded text-sm font-bold text-gray-400 cursor-not-allowed">次ページ</div>
            <div className="bg-salon-pink text-white w-10 h-10 flex items-center justify-center rounded font-bold shadow-sm">1</div>
            <div className="bg-white border border-gray-200 text-gray-600 w-10 h-10 flex items-center justify-center rounded font-bold hover:bg-gray-50 transition-colors">2</div>
            <div className="bg-white border border-gray-200 text-gray-600 w-10 h-10 flex items-center justify-center rounded font-bold hover:bg-gray-50 transition-colors">3</div>
            <div className="bg-white border border-gray-200 text-gray-600 w-10 h-10 flex items-center justify-center rounded font-bold hover:bg-gray-50 transition-colors">
              <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80 space-y-12">
          {/* Search Box */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-700 mb-4 border-l-4 border-salon-pink pl-3">検索</h3>
            <div className="flex">
              <input type="text" placeholder="キーワードを入力" className="flex-1 bg-gray-50 border border-gray-200 rounded-l px-3 py-2 text-sm focus:outline-none" />
              <button className="bg-gray-800 text-white px-4 rounded-r hover:bg-gray-700 transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">最近の投稿</h3>
            <ul className="space-y-4">
              {BLOG_POSTS.slice(0, 5).map(post => (
                <li key={post.id} className="pb-4 border-b border-gray-50 last:border-0">
                  <Link to={`/column/${post.id}`} className="text-sm text-gray-600 hover:text-salon-pink transition-colors leading-relaxed">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">カテゴリー</h3>
            <ul className="space-y-3">
              {['メンズエステについて', 'メンズエステ経営について', '電話代行について'].map(cat => (
                <li key={cat}>
                  <Link to="/column" className="text-sm text-gray-600 hover:text-salon-pink transition-colors flex items-center gap-2">
                    <ChevronRight size={12} className="text-gray-300" /> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-700 mb-6 border-l-4 border-salon-pink pl-3">アーカイブ</h3>
            <ul className="grid grid-cols-1 gap-2">
              {['2025年12月', '2025年10月', '2025年9月', '2025年8月', '2025年6月'].map(month => (
                <li key={month}>
                  <Link to="/column" className="text-sm text-gray-600 hover:text-salon-pink transition-colors block py-1">
                    {month}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ColumnListPage;
