import {
  Pacifico,
  Noto_Sans_JP,
  Yomogi,
  Sawarabi_Gothic,
  Work_Sans,
} from "next/font/google";

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const notoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const yomogi = Yomogi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yomogi",
  display: "swap"
});

export const sawarabiGothic = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sawarabi-gothic",
  display: "swap"
});

export const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap"
});