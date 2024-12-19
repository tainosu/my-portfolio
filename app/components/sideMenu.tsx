'use client';
import React from 'react';
import Image from 'next/image';
import { HomeIcon, UserIcon, WrenchIcon, LightBulbIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-scroll';

const SideMenu: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-64 p-6 bg-gray-200 h-screen shadow-lg">
      <div className='flex justify-center mb-6'>
        <Image
          src="myphoto.jpg"
          alt="Profile"
          className="rounded-full border-3"
          width={160}
          height={160}
        />
      </div>
      <h2 className="text-2xl mb-6 text-center font-bold text-black font-pacifico">Taichi Sekikawa</h2>
      <ul className="list-none p-0 ml-3">
        <li className="mb-4 flex items-center">
          <HomeIcon className="w-6 h-6 mr-2" />
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-50}
            className="hover:underline hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            HOME
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <UserIcon className="w-6 h-6 mr-2" />
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-50}
            className="hover:underline hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            ABOUT
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <WrenchIcon className="w-6 h-6 mr-2" />
          <Link
            to="skill"
            smooth={true}
            duration={700}
            offset={-50}
            className="hover:underline hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            SKILL
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <LightBulbIcon className="w-6 h-6 mr-2" />
          <Link
            to="experience"
            smooth={true}
            duration={700}
            offset={-50}
            className="hover:underline hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            EXPERIENCE
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;