'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid';

interface Exp {
  title: string;
  date: string;
  description: string;
  icon: string;
}

interface ExpAccordionProps {
  experience: Exp;
}

const ExpAccordion: React.FC<ExpAccordionProps> = ({ experience }) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="w-6 h-6" />;
      case 'AcademicCapIcon':
        return <AcademicCapIcon className="w-6 h-6" />;
      case 'ComputerDesktopIcon':
        return <ComputerDesktopIcon className="w-6 h-6" />;
      default:
        return <BookOpenIcon className="w-6 h-6" />;
    }
  };
  
  return (
    <Accordion>
      <AccordionItem
        key={experience.title}
        title={experience.title}
        subtitle={experience.date}
        aria-label={`accordion-header-${experience.title}`}
        startContent={
          renderIcon(experience.icon)
        }
      >
        <div className="flex flex-col gap-4">
          <p>{experience.description}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ExpAccordion;