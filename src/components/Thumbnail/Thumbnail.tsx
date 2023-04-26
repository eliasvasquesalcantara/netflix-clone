import Image, { StaticImageData } from "next/image";
import ContinueWatching from "../ContinueWatching";

interface CardProps {
  src: StaticImageData;
}

const Thumbnail = ({ src }: CardProps) => {
  return (
    <div className="thumbnail">
      <Image
        src={src}
        alt="Série ou Filme"
        className="thumbnail__image"
      />
      <ContinueWatching />
    </div>
  );
};

export default Thumbnail;
