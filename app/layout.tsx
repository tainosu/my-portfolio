import type { Metadata } from "next";
import {
  pacifico,
  notoSansJP,
  yomogi,
  sawarabiGothic,
  workSans,
} from "@/app/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "関川泰地 | Taichi Sekikawa",
  description: "Welcome to my portfolio site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sawarabiGothic.variable} ${notoSansJP.variable} ${yomogi.variable} ${pacifico.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
