import { useEffect, useState } from "react";

const useResponsiveThumbnail = () => {
  const [count, setCount] = useState(0);

  const [widthThumbContainer, setWidthThumbContainer] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.innerWidth > 1050)
        setWidthThumbContainer(window.innerWidth / 5.5);
      else if (window.innerWidth > 800)
        setWidthThumbContainer(window.innerWidth / 4.5);
      else if (window.innerWidth > 500)
        setWidthThumbContainer(window.innerWidth / 3.5);
      else setWidthThumbContainer(window.innerWidth / 2.5);

      setCount((curr) => curr + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  return { widthThumbContainer };
};

export default useResponsiveThumbnail;
