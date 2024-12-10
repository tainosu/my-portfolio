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
            {/* <p>一関工業高等専門学校</p>
            <p>豊橋技術科学大学</p>
            <p>豊橋技術科学大学大学院</p> */}
          </section>
          {/* スキル */}
          <section id="skill" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Skills</h1>
            <p>研究活動ではPython、ROS2（ロボット制御で用いるミドルウェア）を使用しています。</p>
            <p>長期インターンではTypeScriptやNext.js、PostgreSQLを使用しています。</p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-0 list-none">
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-10 h-10 mr-2" />
                Python
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg" alt="ROS2" className="w-10 h-10 mr-2"/>
                ROS2
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mr-2" />
                JavaScript
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10 mr-2" />
                TypeScript
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-10 h-10 mr-2" />
                React
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 mr-2"  />
                Next.js
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10 mr-2" />
                Docker
              </li>
              <li className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10 mr-2" />
                PostgreSQL
              </li>
            </ul>
          </section>
          {/* 経験 */}
          <section id="experience" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Experience</h1>
            <div className="flex flex-col gap-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-bold text-xl mb-2">基本情報技術者</h2>
                <p>2021年10月取得</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-bold text-xl mb-2">応用情報技術者</h2>
                <p>2023年4月取得</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-bold text-xl mb-2">ヒューマンインタフェースシンポジウム2023</h2>
                <p>2023年9月に学会にてポスター発表を行いました。</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-bold text-xl mb-2">長期インターン</h2>
                <p>2024年1月から現在まで、愛知県内のIT企業で業務用AIチャットボットの開発に携わっています。</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-bold text-xl mb-2">ハッカソン</h2>
                <p>2024年9月にマイナビのハッカソンに参加し、AWSを用いたインフラ構築ワークとWeb開発ワークを行いました。</p>
                <p>チームメンバー4人で協力し、グランプリを獲得できました。</p>
              </div>
            </div>
          </section>
        </div>
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
          <p className="text-sm text-gray-500">&copy; 2024 Taichi Sekikawa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
