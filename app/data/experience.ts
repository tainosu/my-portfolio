export interface Exp {
  title: string;
  date: string;
  description: string;
  icon: string;
}

export const experience: Exp[] = [
  {
    title: "基本情報技術者",
    date: "2021年10月",
    description: "高専3年時に受験するも午後試験であと2点足りず不合格...。その後、コロナ禍で試験自体が中止になるも2回目の受験で合格。",
    icon: "BookOpenIcon",
  },
  {
    title: "応用情報技術者",
    date: "2023年4月",
    description: "なんかよくわからんけど一発で合格できた。",
    icon: "BookOpenIcon",
  },
  {
    title: "ヒューマンインタフェースシンポジウム2023",
    date: "2023年9月",
    description: "ポスター発表した。",
    icon: "AcademicCapIcon",
  },
  {
    title: "長期インターン",
    date: "2024年1月から現在まで",
    description: "業務用AIチャットボットの開発",
    icon: "ComputerDesktopIcon",
  },
  {
    title: "ハッカソン",
    date: "2024年9月",
    description: "チームメンバー4人で協力し、グランプリを獲得できました。",
    icon: "ComputerDesktopIcon",
  },
];