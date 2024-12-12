import React from 'react';
import SkillSlider from './skillSlider';
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Chip,
} from "@nextui-org/react";

interface Skill {
  name: string;
  icon: string;
  level: number;
  usage: string[];
}

interface SkillCardProps {
  skills: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="logo"
          height={40}
          radius="sm"
          src={skills.icon}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{skills.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className='flex flex-wrap gap-2'>
          {skills.usage.map((skill) => (
            <Chip
              size='sm'
            >
              {skill}
            </Chip>
          ))}
        </div>
        <SkillSlider level={skills.level} />
      </CardBody>
    </Card>
  );
}

export default SkillCard;