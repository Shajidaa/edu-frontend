import Providers from "@/app/(marketing)/components/Providers";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Providers>
         
          {children}
       
        </Providers>
      </body>
    </html>
  );
}