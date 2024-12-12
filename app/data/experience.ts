export interface Exp {
  title: string;
  date: string;
  description: string;
  icon: string;
}

export const experience: Exp[] = [
  {
    title: "基本情報技術者",
    date: "2021/10",
    description: "高専3年時に初受験するも午後試験であと2点足りず不合格...。その後、コロナ禍で試験自体が中止になるなどのアクシデントもあったが2回目の受験で合格。",
    icon: "BookOpenIcon",
  },
  {
    title: "応用情報技術者",
    date: "2023/04",
    description: "エンジニアを目指すことは決めていたため勉強がてら受験してみようと決意。ぎりぎりではあったが初受験で合格。誘ってくれた友人に感謝です。",
    icon: "BookOpenIcon",
  },
  {
    title: "ヒューマンインタフェースシンポジウム2023",
    date: "2023/09",
    description: "子どもとロボットが会話を通して共に学んでいく学習環境を構築し、ポスター発表を行いました。穴埋めドリルを表示するWebアプリケーションも実装しました。",
    icon: "AcademicCapIcon",
  },
  {
    title: "長期インターン",
    date: "2024/01-現在",
    description: "愛知県内のIT企業にて、業務用AIチャットボットの開発に携わりました。企画段階から参加し、画面設計やDB設計も経験しました。現在は学習モデルの管理機能やユーザー権限周りの実装を担当しています。",
    icon: "ComputerDesktopIcon",
  },
  {
    title: "ハッカソン",
    date: "2024/09",
    description: "マイナビのハッカソンに参加し、AWSを用いたインフラ構築からWebアプリケーションの実装まで計4名でチーム開発を行いました。サービスを成長させていくためのアイデアソン等も行い、最終的にはグランプリを獲得しました。",
    icon: "ComputerDesktopIcon",
  },
];