import Providers from "@/app/(marketing)/components/Providers";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <Topbar />
            <main className="ml-64 pt-16">
              <div className="p-6">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}