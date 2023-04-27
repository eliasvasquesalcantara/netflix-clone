import { useEffect, useState } from "react";


const useNavbar = () => {
  const [classRemoveBackgroundColor, setClassRemoveBackgroundColor] = useState("navbar--remove--color")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(window.scrollY > 100) setClassRemoveBackgroundColor("")
      else if(window.screenY < 100) setClassRemoveBackgroundColor("navbar--remove--color")
      setCount(curr => curr + 1)
    }, 1000)

    return () => clearTimeout(timeout)

  }, [count]);

  return { classRemoveBackgroundColor }
}


export default useNavbar