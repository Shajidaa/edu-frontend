"use client";

import Footer from "@/app/(after)/components/share/Footer";
import Navbar from "./components/Navbar";




export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body>
    
<Navbar/>
          
                {children}
             
     <Footer/>
      </body>
    </html>
  );
}
