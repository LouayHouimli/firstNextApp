import Nav from "@/components/navbar/Nav";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen ">
          <Nav />
          <main className="flex-grow w-full overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
