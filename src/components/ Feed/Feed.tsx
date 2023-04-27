import { StaticImageData } from "next/image";
import Thumbnail from "../Thumbnail";
import SeeMoreIcon from "./Components/SeeMoreIcon";
import useFeed from "./hooks/useFeed";

interface FeedProps {
  title: string;
  imagesSrc: StaticImageData[]
}

const Feed = ({ title, imagesSrc }: FeedProps) => {
  const {
    ref,
    showLeftArrow,
    handleLeftArrowClick,
    showRightArrow,
    handleRightArrowClick,
    isLessOpacityThumbIndex,
    isFeedFullWidthOrNot,
  } = useFeed(imagesSrc);

  return (
    <div className={"feed " + (isFeedFullWidthOrNot() && "feed--full--width")}>
      <h3 className="feed__title">{title}</h3>

      <div className="feed__thumbnails" ref={ref}>
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
