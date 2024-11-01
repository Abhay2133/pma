import { useState, useEffect } from 'react';

function useScreenWidth() {
  // Initialize state with the current screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to update screen width state
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenWidth;
}

export default useScreenWidth;
