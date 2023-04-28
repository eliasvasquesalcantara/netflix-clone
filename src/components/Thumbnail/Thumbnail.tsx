import Image, { StaticImageData } from "next/image";
import { IContinueWatching } from "./utils/types";
import ContinueWatching from "../ContinueWatching";

interface CardProps {
  src: string | StaticImageData;
  lessBrightness: boolean;
  continueWatching: IContinueWatching;
}

const Thumbnail = ({ src, lessBrightness, continueWatching }: CardProps) => {
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

      {continueWatching.porcentage !== 0 && (
        <ContinueWatching porcentage={continueWatching.porcentage} />
      )}
    </div>
  );
};

export default Thumbnail;
