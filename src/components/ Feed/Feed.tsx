import { StaticImageData } from "next/image";

import strangerThings from "../../../public/assets/stranger-things.jpg";
import agenteNoturno from "../../../public/assets/agente-noturno.jpg";
import suits from "../../../public/assets/suits.webp";
import onePiece from "../../../public/assets/one-piece.webp";
import run from "../../../public/assets/run.webp";
import Thumbnail from "../Thumbnail";
import SeeMoreIcon from "./Components/SeeMoreIcon";
import useFeed from "./hooks/useFeed";

const imagesSrc: StaticImageData[] = [
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
  // repeat
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
];


const Feed = () => {
  const {
    ref,
    showLeftArrow,
    handleLeftArrowClick,
    showRightArrow,
    handleRightArrowClick,
    isLessOpacityThumbIndex,
    isFeedFullWidthOrNot
  } = useFeed();

  return (
    <div className={"feed " + (isFeedFullWidthOrNot() && "feed--full--width")}>
      <h3 className="feed__title">Continuar assistindo como Nany</h3>

      <div className="feed__cards" ref={ref}>
        {showLeftArrow() && (
          <div className="feed__see__more__left" onClick={handleLeftArrowClick}>
            <SeeMoreIcon />
          </div>
        )}

        {imagesSrc.map((src, i) => (
          <Thumbnail src={src} lessBrightness={isLessOpacityThumbIndex(i)} />
        ))}

        {showRightArrow() && (
          <div
            className="feed__see__more__right"
            onClick={handleRightArrowClick}
          >
            <SeeMoreIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
