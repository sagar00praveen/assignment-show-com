import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  // A simple array to represent the 4 inactive dot links
  const inactiveLinks = [1, 2, 3, 4];

  return (
    <aside className="w-20 flex flex-col items-center bg-white border-r py-6 space-y-6">
      {/* Active Link */}
      <button className="p-3 bg-gray-800 text-white rounded-xl shadow-md">
        <HomeIcon className="w-6 h-6" />
      </button>

      {/* Inactive Links */}
      {inactiveLinks.map((item) => (
        <div
          key={item}
          className="w-12 h-12 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
        ></div>
      ))}
    </aside>
  );
};

export default Sidebar;