import React from 'react';
import SkillSlider from './skillSlider';
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image
} from "@nextui-org/react";

interface Skill {
  name: string;
  icon: string;
  level: number;
  usage: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="logo"
          height={40}
          radius="sm"
          src={skill.icon}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{skill.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{skill.usage}</p>
        <SkillSlider level={skill.level} />
      </CardBody>
    </Card>
  );
}

export default SkillCard;