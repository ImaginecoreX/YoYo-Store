import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.css";

const goldman = Goldman({weight:["400","700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YoYo Store",
  description: "An Online Marketplace For Customize Stickers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={goldman.className}>
        {children}
        </body>
    </html>
  );
}
