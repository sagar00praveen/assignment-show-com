import React from 'react';
import CompanyCard from './CompanyCard.jsx';
import useWindowWidth from '../hooks/useWindowWidth';

const Dashboard = () => {
  const windowWidth = useWindowWidth();


  const getGridCols = () => {
  
    if (windowWidth >= 1400) {
      return 'grid-cols-7'; 
    }
   
    if (windowWidth >= 1024) {
      return 'grid-cols-5'; 
    }
  
    if (windowWidth >= 768) {
      return 'grid-cols-4'; 
    }
 
    if (windowWidth >= 640) {
      return 'grid-cols-2'; 
    }
  
    return 'grid-cols-1'; 
  };

  const gridClass = getGridCols();

  
  const cards = Array(21).fill(0);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Select company to monitor
      </h2>
      
      
      <div className={`grid ${gridClass} gap-6`}>
        {cards.map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
