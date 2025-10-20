import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Ghraha Trimitra Selaras",
    template: "%s | Ghraha Trimitra Selaras",
  },
  description:
    "Empowering Innovation Through Technology. Professional tech consulting services.",
  openGraph: {
    title: "Ghraha Trimitra Selaras",
    description:
      "Empowering Innovation Through Technology. Professional tech consulting services.",
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Ghraha Trimitra Selaras",
  },
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: '/logo.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased bg-white text-black`}>{children}</body>
    </html>
  );
}


