import "../globals.css";
import { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "nextjs + supabase",
  description: "Easy Clap",
};

export default function WithNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <header>
        <div className="fixed top-0 z-20 w-full">
          <div className="border-sold border-b-[1px] border-b-gray-600 border-opacity-100">
            <Navbar></Navbar>
          </div>
        </div>
      </header> */}
      <div className="text-center text-red-500">
        links-------------
        <a href="/page1">page1link </a>
        <a href="/page2">page2link </a>
        <a href="/page3">page3link </a>
      </div>
      <div
        className="pt-[70px] bg-ext_background text-white flex align-center justify-center"
        style={{ minHeight: "calc(100vh - 0px)" }}
      >
        {children}
      </div>
    </>
  );
}
