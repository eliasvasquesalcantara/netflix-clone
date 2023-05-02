import { useEffect, useState } from "react";

const useResponsiveFeed = () => {
  const [pixelsScrollClickArrow, setPixelsScrollClickArrow] =
    useState<number>(0);

  useEffect(() => {
    if (window.innerWidth > 1050) setPixelsScrollClickArrow(212.5);
    else if (window.innerWidth > 800) setPixelsScrollClickArrow(180); 
    else if (window.innerWidth > 500) {
    } else {
    }
  }, []);

  return { pixelsScrollClickArrow };
};

export default useResponsiveFeed;
