import Image from "next/image";
import SideMenu from "./components/sideMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed w-64 h-screen">
        <SideMenu />
      </aside>
      <div className="flex-grow pb-20 ml-64 overflow-auto">
        <div className="flex flex-col gap-8 px-4 items-center sm:items-start">
          <section id="home" className="w-full mt-4 mb-8">
            <h2 className="font-bold text-2xl mb-4">Welcome to MySite!</h2>
          </section>
          {/* 自己紹介 */}
          <section id="about" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">About Me</h1>
            <p>はじめまして、関川泰地です。</p>
            <p>現在、豊橋技術科学大学大学院 情報・知能工学専攻に在籍しています。</p>
            <p>ソーシャルロボットを専攻しており、ロボットを制御するプログラムを開発しています。</p>
            <p>長期インターンやハッカソンでのWeb開発もあります。</p>
          </section>
          <section id="skill" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Skills</h1>
            <ul className="flex flex-wrap gap-4 p-0">
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 mr-2" />
                Python
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg" alt="ROS2" className="w-8 h-8 mr-2"/>
                ROS2
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 mr-2" />
                JavaScript
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 mr-2" />
                TypeScript
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-8 h-8 mr-2" />
                React
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 mr-2"  />
                Next.js
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 mr-2" />
                Docker
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 mr-2" />
                PostgreSQL
              </li>
            </ul>
          </section>
          <section id="experience" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Experience</h1>
            <p>基本情報技術者</p>
            <p>応用情報技術者</p>
            <p>ヒューマンインタフェース学会2023</p>
            <p>長期インターン</p>
            <p>ハッカソン</p>
          </section>
        </div>
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
          <p className="text-sm text-gray-500">&copy; 2024 Taichi Sekikawa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
