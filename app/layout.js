import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import SEO, { defaultMetadata } from "@/components/SEO/SEO";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { ...defaultMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <SEO />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
