import Image from "next/image";
import styled from "styled-components";

interface ResponsiveImageProps {
  width: number;
}

const ResponsiveImage = styled(Image)<ResponsiveImageProps>`
  width: ${(props) => props.width}px;
  height: calc(${(props) => props.width}px * 0.6);
  cursor: pointer;
`;

export default ResponsiveImage;
