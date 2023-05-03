import styled from "styled-components";

const HighlightBackground = styled.div`
  background-image: url("./assets/orange-black.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  width: 100vw;
  height: calc(100vw / 2.2);

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const HighlightHeader = styled.div`
  margin-top: calc(100vw / 2.4);
`

const Highlight = () => {
  return (
    <>
      <HighlightHeader />
      <HighlightBackground />
    </>
  );
};

export default Highlight;
