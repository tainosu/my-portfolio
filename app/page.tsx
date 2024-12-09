import Image from "next/image";
import SideMenu from "./components/sideMenu";
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      <div className="flex-grow p-8 pb-20 sm:p-20 ml-64 overflow-auto">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <section id="home" className="w-full mb-8">
            <h1 className="font-bold text-3xl mb-4">Welcome to My Site!</h1>
            <p>Homeの中身</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
            <p>なに書こう</p>
          </section>
          <section id="about" className="w-full mb-8">
            <h2 className="font-bold text-2xl mb-4">About Me</h2>
            <p>経歴をかく</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
            <p>高専から現在まで</p>
          </section>
          <section id="skill" className="w-full mb-8">
            <h2 className="font-bold text-2xl mb-4">Skills</h2>
            <p>技術経験</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
            <p>アイコンとか使う</p>
          </section>
          <section id="experience" className="w-full mb-8">
            <h2 className="font-bold text-2xl mb-4">Experience</h2>
            <p>経験</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
            <p>資格や学会、インターン、ハッカソン</p>
          </section>
        </main>
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
          <p className="text-sm text-gray-500">&copy; 2024 Taichi Sekikawa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
