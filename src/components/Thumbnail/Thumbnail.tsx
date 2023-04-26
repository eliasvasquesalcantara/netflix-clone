import Image, { StaticImageData } from "next/image";

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
    </div>
  );
};

export default Thumbnail;
