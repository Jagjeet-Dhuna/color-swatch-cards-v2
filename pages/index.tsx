import { Geist, Geist_Mono } from "next/font/google";
import ColorCard from "@/components/ColorCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-2 p-4">
        <div className="w-full">
          <ColorCard hexCode="#68d2f0" isLarge={true}/>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <ColorCard hexCode="#458034"/>
          <ColorCard hexCode="#106664"/>
          <ColorCard hexCode="#8accc7"/>
          <ColorCard hexCode="#c37949"/>
          <ColorCard hexCode="#8056ff"/>
        </div>
      </div>
    </main>
  );
}
