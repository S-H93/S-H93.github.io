import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined'; // update if the window exists

  // return an array with the width and height of the window if it exists, otherwise return null values
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return [
      width,
      height,
    ];
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // update the window dimensions if the window comes into existence (will be null until then)
  useEffect(() => {
    if (hasWindow) {
      // if the window is resized, update the window dimensions
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);

      // cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}