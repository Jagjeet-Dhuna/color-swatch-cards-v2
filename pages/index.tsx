import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import ColorCard from "../components/ColorCard";
import BgButton from "../components/BgButton";

const googleSans = Plus_Jakarta_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen flex items-center justify-center ${googleSans.variable} ${monoFont.variable} font-sans`}>
      <div className="w-full max-w-4xl p-4">
        <div className="w-full">
          <ColorCard id="large-card-container" hexCode="#68d2f0" isLarge={true}/>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-16 mt-2">
          <ColorCard id="small-card-container" hexCode="#458034"/>
          <ColorCard id="small-card-container" hexCode="#106664"/>
          <ColorCard id="small-card-container" hexCode="#8accc7"/>
          <ColorCard id="small-card-container" hexCode="#c37949"/>
          <ColorCard id="small-card-container" hexCode="#8056ff"/>
        </div>
        <BgButton/>
      </div>
    </main>
  );
}