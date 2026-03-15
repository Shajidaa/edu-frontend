"use client";

import { useState } from "react";
import Providers from "@/app/(marketing)/components/Providers";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { ToastContainer } from "react-toastify/unstyled";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <Topbar onMenuClick={() => setSidebarOpen(true)} />
            <main className="lg:ml-64 pt-16">
              <div className="p-4 sm:p-6">
                {children}
              </div>
            </main>
          </div>
                 <ToastContainer position="top-center" autoClose={1500} /> 
        </Providers>
      </body>
    </html>
  );
}
