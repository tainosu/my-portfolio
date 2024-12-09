import React from 'react';
import Image from 'next/image';

const SideMenu: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-64 p-6 bg-gray-100 border-r border-gray-300 h-screen">
      <div className='flex justify-center mb-6'>
        <Image
          src="myphoto.jpg"
          alt="Profile"
          className="rounded-full"
          width={160}
          height={160}
        />
      </div>
      <h2 className="text-2xl mb-6 text-black">Taichi Sekikawa</h2>
      <ul className="list-none p-0">
        <li className="mb-4"><a href="#home" className="text-blue-500 hover:underline">HOME</a></li>
        <li className="mb-4"><a href="#about" className="text-blue-500 hover:underline">ABOUT</a></li>
        <li className="mb-4"><a href="#skill" className="text-blue-500 hover:underline">SKILL</a></li>
        <li className="mb-4"><a href="#experience" className="text-blue-500 hover:underline">EXPERIENCE</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;