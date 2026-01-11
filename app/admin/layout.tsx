"use client";

import { createClient } from "@/utils/supabase/client";
import {
  Bell,
  FileText,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const navItems = [
    { name: "ダッシュボード", href: "/admin", icon: LayoutDashboard },
    { name: "お問い合わせ", href: "/admin/inquiries", icon: Mail },
    { name: "協力会社募集", href: "/admin/partners", icon: Users },
    { name: "ブログ記事管理", href: "/admin/blog", icon: FileText },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-gray-100">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-salon-pink rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-gray-800 tracking-tighter">
                SALON <span className="text-salon-pink">ADMIN</span>
              </span>
            </Link>
            <button
              className="ml-auto lg:hidden text-gray-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
              Main Menu
            </p>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all group ${
                    isActive
                      ? "bg-salon-pink text-white shadow-lg shadow-salon-pink/20"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={
                      isActive ? "" : "text-gray-400 group-hover:text-gray-600"
                    }
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer Navigation */}
          <div className="p-4 border-t border-gray-100 space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <Settings size={18} className="text-gray-400" />
              設定
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={18} />
              ログアウト
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2 w-64 lg:w-96">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="管理内を検索..."
                className="bg-transparent text-sm w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-100 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-xs font-bold text-gray-800">和田 太郎</p>
                <p className="text-[10px] text-gray-400">管理者</p>
              </div>
              <div
                className="w-10 h-10 rounded-2xl bg-gray-200 border-2 border-white shadow-sm overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://i.pravatar.cc/150?u=admin')",
                }}
              ></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-10 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
