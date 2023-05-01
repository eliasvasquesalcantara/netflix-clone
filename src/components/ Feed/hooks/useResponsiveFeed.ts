import { useEffect, useState } from "react";


const useResponsiveFeed = () => {
    const [pixelsScrollClickArrow, setPixelsScrollClickArrow] = useState<number>(0)

    useEffect(() => {
        if(window.innerWidth > 1000) setPixelsScrollClickArrow(210)
        if(window.innerWidth > 600) setPixelsScrollClickArrow(190)
        else setPixelsScrollClickArrow(170)
    }, [])

    return { pixelsScrollClickArrow }
}
 
export default useResponsiveFeed;