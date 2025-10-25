
import React from 'react';
const CompanyCard = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
      
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
      
  
      <span className="font-semibold text-gray-700 mb-4">Company_name</span>
    
      <button className="bg-gray-800 text-white font-medium py-2 px-8 rounded-lg hover:bg-gray-700 transition-colors">
        Next
      </button>
    </div>
  );
};

export default CompanyCard;
