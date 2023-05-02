import { StaticImageData } from "next/image";
import { IContinueWatching } from "./utils/types";
import ContinueWatching from "../ContinueWatching";
import useResponsiveThumbnail from "./hooks/useResponsiveThumbnail";
import ResponsiveThumbnail from "./components/ResponsiveThumbnail";
import ResponsiveImage from "./components/ResponsiveImage";

interface ThumbnailProps {
  src: string | StaticImageData;
  lessBrightness: boolean;
  continueWatching: IContinueWatching;
}



const Thumbnail = ({ src, lessBrightness, continueWatching }: ThumbnailProps) => {
  const { widthThumbContainer } = useResponsiveThumbnail()

  return (
    <ResponsiveThumbnail width={widthThumbContainer}>
      <ResponsiveImage
        width={widthThumbContainer}
        src={src}
        alt="Série ou Filme"
        className={lessBrightness ? "thumbnail--less--brightness" : ""}
      />
      {continueWatching.porcentage !== 0 && (
        <ContinueWatching porcentage={continueWatching.porcentage} />
      )}
    </ResponsiveThumbnail>
  );
};

export default Thumbnail;
