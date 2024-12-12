import SideMenu from "./components/sideMenu";
import SkillCard from "./components/skillCard";
import { skills } from "./data/skills";
import ExpAccordion from "./components/expAccordion";
import { experience } from "./data/experience";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed w-64 h-screen">
        <SideMenu />
      </aside>
      <div className="flex-grow pb-20 ml-64 overflow-auto">
        <div className="flex flex-col gap-8 px-20 items-center sm:items-start">
          <section id="home" className="w-full mt-4 mb-8">
            <h2 className="font-bold text-2xl mb-4">Welcome to MySite!</h2>
          </section>
          {/* 自己紹介 */}
          <section id="about" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">About Me</h1>
            <p>はじめまして、<b>関川泰地</b>です。</p>
            <p>現在、<b>豊橋技術科学大学大学院</b> 情報・知能工学専攻に在籍しています。</p>
            <p><b>ソーシャルロボット</b>を専攻しており、人と会話するロボットを開発しています。。</p>
            <p>長期インターンやハッカソン、自主開発での<b>Web開発</b>もあります。</p>
            {/* <p>一関工業高等専門学校</p>
            <p>豊橋技術科学大学</p>
            <p>豊橋技術科学大学大学院</p> */}
          </section>
          {/* スキル */}
          <section id="skill" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Skills</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-0 list-none">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skills={skill} />
              ))}
            </ul>
          </section>
          {/* 経験 */}
          <section id="experience" className="w-full mb-8">
            <h1 className="font-bold text-2xl mb-4">Experience</h1>
            {experience.map((exp) => (
              <ExpAccordion key={exp.title} experience={exp} />
            ))}
            {/* <div className="flex flex-col gap-4">
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
            </div> */}
          </section>
        </div>
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
          <p className="text-sm text-gray-500">&copy; 2024 Taichi Sekikawa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
