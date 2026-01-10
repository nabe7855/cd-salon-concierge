
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Database, Laptop, Smartphone, FileText, BarChart3, Users, ShieldCheck, Bell, MousePointer2, ExternalLink, Leaf } from 'lucide-react';

const SystemPage: React.FC = () => {
  return (
    <div className="bg-salon-light min-h-screen pb-20 font-sans">
      {/* Breadcrumb - Top */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 text-xs text-gray-400">
          <Link to="/" className="hover:text-salon-pink">トップ</Link> &gt; <span className="text-gray-600 font-bold">システム詳細</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                alt="System Support" 
                className="rounded-3xl shadow-xl w-full border-4 border-white"
              />
            </div>
            <div className="md:w-1/2 text-center">
              <div className="inline-block bg-salon-pink text-white px-12 py-3 rounded-xl text-xl font-bold shadow-lg mb-8">
                システム詳細
              </div>
              <div className="space-y-4 text-gray-800">
                <p className="text-lg font-bold leading-relaxed">
                  弊社は独自のCTIシステムと<br />
                  CRMシステム（顧客管理システム）を<br />
                  導入しているので、
                </p>
                <p className="text-2xl font-bold border-b-4 border-salon-gold inline-block pb-1 mb-2">
                  常に効率的で安定した電話代行
                </p>
                <p className="text-lg font-bold">が可能となっています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTI Definition */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-salon-tan p-6 rounded-2xl shadow-sm border border-salon-gold/20">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-149923746-c502d488b3ea?auto=format&fit=crop&q=80&w=400" 
                alt="CTI Overview" 
                className="rounded-xl shadow-md w-full border-2 border-white"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-sm text-gray-600 leading-relaxed">
                CTIシステムとは、Computer Telephony Integrationの略で「コンピューター電話統合」とも呼ばれます。コンピューターと電話系装置を統合し、コールセンターやサポートセンターの情報機能を効率化するシステムです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTI Basic Functions */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="inline-block bg-salon-gold text-white px-16 py-2 rounded-lg text-xl font-bold shadow-md">
              CTIシステムの基本機能
            </h2>
          </div>

          <div className="space-y-12">
            {/* CTI Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=400" 
                  alt="Pop up" 
                  className="rounded-xl shadow-md w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-salon-pink pl-3">顧客情報をポップアップ表示</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  顧客情報を管理する「CRMシステム」とパソコンおよび電話回線を連携させています。着信時にCRMから着信番号に該当する顧客情報を瞬時に検索し、パソコン画面上に顧客の名前や利用履歴、過去のやり取りなどをポップアップで表示させます。
                </p>
              </div>
            </div>

            {/* CTI Item 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400" 
                  alt="Recording" 
                  className="rounded-xl shadow-md w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-salon-pink pl-3">電話応対の常時録音</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話応対の品質改善に役立つ常時録音機能も搭載されており、オペレーターとの会話内容を確認できます。録音した内容をもとに応対品質の改善に活かせるほか、聞き逃しがあった場合にも確認できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8 opacity-50">
        <Leaf className="text-salon-gold w-12 h-12" />
      </div>

      {/* CRM Basic Functions */}
      <section className="py-16 bg-salon-tan">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="inline-block bg-salon-blue text-white px-16 py-2 rounded-lg text-xl font-bold shadow-md">
              CRMシステムの基本機能
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '予約状況の確認', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
              { title: '顧客情報の管理', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400' },
              { title: 'セラピストの登録', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400' },
              { title: '売上レポート', img: 'https://images.unsplash.com/photo-1454165833767-027ffea7025c?auto=format&fit=crop&q=80&w=400' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 border border-salon-gold/10">
                <img src={item.img} className="w-24 h-24 rounded-lg object-cover shadow-sm" alt={item.title} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 border-b border-salon-tan pb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    直感的に操作可能な最新の管理画面をご提供します。
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 mt-8 italic text-center">※こちらのCRMシステムはMr.Venryのサポート対象です。</p>
        </div>
      </section>

      {/* Bottom Breadcrumb */}
      <div className="container mx-auto px-4 max-w-5xl mt-12 pb-12 border-t border-gray-100">
        <nav className="py-4 text-xs text-gray-400">
          <Link to="/" className="hover:text-salon-pink">トップ</Link> &gt; <span className="text-gray-600">システム詳細</span>
        </nav>
      </div>
    </div>
  );
};

export default SystemPage;
