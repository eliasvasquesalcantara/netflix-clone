"use client";

import Image, { StaticImageData } from "next/image";
import { IContinueWatching } from "./utils/types";
import ContinueWatching from "../ContinueWatching";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface CardProps {
  src: string | StaticImageData;
  lessBrightness: boolean;
  continueWatching: IContinueWatching;
}

interface ResponsiveThumbnailProps {
  innerWidth: number;
}
const ResponsiveThumbnail = styled.div<ResponsiveThumbnailProps>`
  width: ${(props) => props.innerWidth / 5.5}px;
  margin-right: 4px;
`;

interface ResponsiveImageProps {
  width: number;
}

const ResponsiveImage = styled(Image)<ResponsiveImageProps>`
  width: ${(props) => props.width}px;
  height: calc(${(props) => props.width}px * 0.5);
  cursor: pointer;
`;

const Thumbnail = ({ src, lessBrightness, continueWatching }: CardProps) => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInnerWidth(window.innerWidth);
      setImageWidth(window.innerWidth / 5.5);
      setCount((curr) => curr + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <ResponsiveThumbnail innerWidth={innerWidth}>
      <ResponsiveImage
        width={imageWidth}
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
