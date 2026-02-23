import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./(marketing)/components/share/navbar";
import Footer from "./(marketing)/components/share/Footer";
import Providers from "./(marketing)/components/Providers";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Next Gen Learning",
  description: "Next Gen Learning helps teachers deliver powerful learning moments to every student, every day. Our all-in-one platform gives teachers the time-saving support they need to create lessons students love, deliver differentiated support for every learner, and assess progress whenever it’s needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
