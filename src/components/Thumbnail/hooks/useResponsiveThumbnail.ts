import { useEffect, useState } from "react";

const useResponsiveThumbnail = () => {
  const [count, setCount] = useState(0);

  const [widthThumbContainer, setWidthThumbContainer] = useState<number>(0);

  const [innerWidth, setInnerWidth] = useState(0);

  const calculateWidthThumbContainer = (
    innerWidth: number,
    amountThumbs: number
  ) => innerWidth / amountThumbs;

  useEffect(() => {
    if (innerWidth > 1050)
      setWidthThumbContainer(calculateWidthThumbContainer(innerWidth, 5.5));
    else if (innerWidth > 800)
      setWidthThumbContainer(calculateWidthThumbContainer(innerWidth, 4.5));
    else if (innerWidth > 500)
      setWidthThumbContainer(calculateWidthThumbContainer(innerWidth, 3.5));
    else setWidthThumbContainer(calculateWidthThumbContainer(innerWidth, 2.5));
  }, [innerWidth]);

  useEffect(() => {
    if (window.innerWidth !== innerWidth) setInnerWidth(window.innerWidth);

    const timeout = setTimeout(() => {
      setCount((curr) => curr + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  return { widthThumbContainer };
};

export default useResponsiveThumbnail;
