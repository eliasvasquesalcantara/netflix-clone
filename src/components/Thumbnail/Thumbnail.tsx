import Image, { StaticImageData } from "next/image";
import ContinueWatching from "../ContinueWatching";

interface CardProps {
  src: StaticImageData;
  lessBrightness: boolean;
}

const Thumbnail = ({ src, lessBrightness }: CardProps) => {
  return (
    <div className="thumbnail">
      <Image
        src={src}
        alt="Série ou Filme"
        className={
          lessBrightness
            ? "thumbnail__image  thumbnail--less--brightness"
            : "thumbnail__image "
        }
      />

      <ContinueWatching />
    </div>
  );
};

export default Thumbnail;
