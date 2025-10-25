import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks the browser's window width.
 * @returns {number} The current inner width of the window.
 */
const useWindowWidth = () => {
  // Initialize state with the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler function to update state on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return windowWidth;
};

export default useWindowWidth;