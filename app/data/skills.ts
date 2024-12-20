export interface Skill {
  name: string;
  icon: string;
  level: number;
  usage: string[];
}

export const skills: Skill[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    level: 60,
    usage: ["研究活動"],
  },
  {
    name: "ROS2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",
    level: 60,
    usage: ["研究活動"],
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: 50,
    usage: ["研究活動"],
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    level: 50,
    usage: ["インターン", "ハッカソン"],
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: 40,
    usage: ["自主開発"],
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    level: 40,
    usage: ["インターン", "ハッカソン"],
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    level: 30,
    usage: ["研究活動"],
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    level: 30,
    usage: ["インターン"],
  },
];