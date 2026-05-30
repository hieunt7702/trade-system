import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import { GlobalDropdownHandler } from "../components/providers/GlobalDropdownHandler";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin", "vietnamese"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HieuNTHUB - Tra cứu, so sánh sàn forex uy tín",
  description: "Tổng hợp đánh giá độc lập, hoa hồng IB minh bạch và rebate trực tiếp — giúp trader Việt chọn sàn an toàn, IB chọn cơ chế hợp lý.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("bh_lang")?.value;
  const initialLanguage = (langCookie === "vi" || langCookie === "en") ? langCookie as "vi" | "en" : "vi";

  return (
    <html lang={initialLanguage} className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-body-md text-body-md bg-background overflow-x-hidden`}>
        <LanguageProvider initialLanguage={initialLanguage}>
          <GlobalDropdownHandler />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
