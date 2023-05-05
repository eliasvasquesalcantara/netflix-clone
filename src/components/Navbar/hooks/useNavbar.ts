import { useEffect, useState } from "react";

const useNavbar = () => {
  const [removeBackgroundColor, setRemoveBackgroundColor] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.scrollY > 100) setRemoveBackgroundColor(false);
    else if (window.screenY < 100) setRemoveBackgroundColor(true);

    const timeout = setTimeout(() => {
      setCount((curr) => curr + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  return { removeBackgroundColor };
};

export default useNavbar;
