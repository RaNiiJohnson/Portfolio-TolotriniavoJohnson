import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./Footer/page";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Portfolio en Devenir: Passionné de React et Javascript FullStack",
  description: "RaNii's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 h-full">
        <Header />
        <main className="max-w-7xl mx-auto md:p-5 sm:p-3 p-1 text-slate-50 bg-slate-900 h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
