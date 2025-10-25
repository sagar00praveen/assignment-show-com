import React from 'react';
import { BellIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 bg-white border-b px-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">Growth Monitor</h1>

      {/* Icons & User */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-800">
          <BellIcon className="w-6 h-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          <EnvelopeIcon className="w-6 h-6" />
        </button>
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://via.placeholder.com/150" // Placeholder for user image
          alt="User Profile"
        />
      </div>
    </header>
  );
};

export default Header;