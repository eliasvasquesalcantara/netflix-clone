import styled from "styled-components";

interface ContinueWatchingProgressProps {
  porcentage: number;
}

const ContinueWatchingProgress = styled.div<ContinueWatchingProgressProps>`
  width: ${(props) => props.porcentage}px;
`;

export default ContinueWatchingProgress;
