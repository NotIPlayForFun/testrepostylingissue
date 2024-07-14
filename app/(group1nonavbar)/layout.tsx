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

export default function NoNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="bg-ext_background text-white"
        style={{ minHeight: "calc(100vh - 0px)" }}
      >
        {children}
      </div>
    </>
  );
}
