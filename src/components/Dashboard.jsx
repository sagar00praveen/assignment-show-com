import React from 'react';
import CompanyCard from './CompanyCard.jsx';
import useWindowWidth from '../hooks/useWindowWidth';

const Dashboard = () => {
  const windowWidth = useWindowWidth();

  // Logic to determine grid columns based on window width
  const getGridCols = () => {
    // 1. Large view (like your screenshot)
    if (windowWidth >= 1400) {
      return 'grid-cols-7'; // 7 columns
    }
    // 2. Medium-Large view
    if (windowWidth >= 1024) {
      return 'grid-cols-5'; // 5 columns
    }
    // 3. Tablet view
    if (windowWidth >= 768) {
      return 'grid-cols-4'; // 4 columns
    }
    // 4. Mobile view
    if (windowWidth >= 640) {
      return 'grid-cols-2'; // 2 columns
    }
    // 5. Small-Mobile view
    return 'grid-cols-1'; // 1 column
  };

  const gridClass = getGridCols();

  // Create an array to map over, like in your screenshot (21 items)
  const cards = Array(21).fill(0);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Select company to monitor
      </h2>
      
      {/* The grid container. The 'gridClass' is dynamically set 
        by the 'useWindowWidth' hook, fulfilling the assignment.
      */}
      <div className={`grid ${gridClass} gap-6`}>
        {cards.map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;