import styled from "styled-components";

interface ResponsiveThumbnailProps {
  width: number;
}

const ResponsiveThumbnail = styled.div<ResponsiveThumbnailProps>`
  width: ${(props) => props.width}px;
  margin-right: 4px;
`;

export default ResponsiveThumbnail;
