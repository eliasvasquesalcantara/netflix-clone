import { useEffect, useState } from "react";

const useResponsiveFeed = () => {
  const [pixelsScrollClickArrow, setPixelsScrollClickArrow] =
    useState<number>(0);

  useEffect(() => {
    if (window.innerWidth > 1050) setPixelsScrollClickArrow(212.5);
    else if (window.innerWidth > 800) setPixelsScrollClickArrow(180);
    else if (window.innerWidth > 650) setPixelsScrollClickArrow(178);
    else if (window.innerWidth > 500) setPixelsScrollClickArrow(150);
    else setPixelsScrollClickArrow(140);
  }, []);

  return { pixelsScrollClickArrow };
};

export default useResponsiveFeed;
