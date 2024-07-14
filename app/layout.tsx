import "./globals.css";
import { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// export const metadata = constructMetadata();
export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "nextjs + supabase",
  description: "Easy Clap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header>
          <div className="fixed top-0 z-20 w-full">
            <div className="border-sold border-b-[1px] border-b-gray-600 border-opacity-100"></div>
          </div>
        </header>
        <div
          className="pt-[70px] bg-ext_background text-white bg-slate-800 "
          style={{ minHeight: "calc(100vh - 0px)" }}
        >
          HELLO FROM ROOT LAYOUT!!!!!!!!!
          {children}
        </div>
      </body>
    </html>
  );
}
