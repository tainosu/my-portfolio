import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";

interface About {
  title: string;
  date: string;
  description: string;
}

interface AboutCardProps {
  abouts: About;
}

const AboutCard: React.FC<AboutCardProps> = ({ abouts }) => {
  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex gap-4 mt-2">
        <div className="flex flex-col">
          <p className="text-md font-bold">{abouts.title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className='flex flex-col w-full gap-2'>
          <p className="text-sm text-gray-500">{abouts.date}</p>
          <p>{abouts.description}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default AboutCard;