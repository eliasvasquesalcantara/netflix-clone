import Thumbnail from "../Thumbnail";
import SeeMoreIcon from "./Components/SeeMoreIcon";
import useFeed from "./hooks/useFeed";
import { IThumbnail } from "../Thumbnail/utils/types";

interface FeedProps {
  title: string;
  thumbnails: IThumbnail[];
}

const Feed = ({ title, thumbnails }: FeedProps) => {
  const {
    ref,
    showLeftArrow,
    handleLeftArrowClick,
    showRightArrow,
    handleRightArrowClick,
    isLessOpacityThumbIndex,
    isFeedFullWidthOrNot,
  } = useFeed(thumbnails.length);

  return (
    <div className={"feed " + (isFeedFullWidthOrNot() && "feed--full--width")}>
      <h3 className="feed__title">{title}</h3>

      <div className="feed__thumbnails" ref={ref}>
        {showLeftArrow() && (
          <div className="feed__see__more__left" onClick={handleLeftArrowClick}>
            <SeeMoreIcon />
          </div>
        )}

        {thumbnails.map((thumb, i) => (
          <Thumbnail
            src={thumb.imageSrc}
            lessBrightness={isLessOpacityThumbIndex(i)}
            continueWatching={thumb.continueWatching}
          />
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
