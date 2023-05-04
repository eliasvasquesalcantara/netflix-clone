import styled from "styled-components";
import WatchButton from "./components/WatchButton";
import MoreInfoButton from "./components/MoreInfoButton";

const HighlightContainer = styled.div`
  background-image: url("./assets/orange-black.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 100vw;
  height: calc(100vw / 2.4);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const NextContentLimiter = styled.div`
  margin-top: calc(100vw / 2.8);
`;

const HighlightContent = styled.div`
  height: calc(100vw / 2.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

const Highlight = () => {
  return (
    <>
      <HighlightContainer>
        <HighlightContent>
          <h1 style={{ fontSize: "70px" }}>
            Orange is the <br /> new black
          </h1>
          <p style={{ width: "500px", margin: "20px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            corrupti, cum recusandae dolores illum voluptatum ex optio corporis
            in magnam dolore quasi quo inventore consequatur alias at quos
            laborum repellat.
          </p>
          <div style={{ display: "flex" }}>
            <WatchButton />
            <MoreInfoButton />
          </div>
        </HighlightContent>
      </HighlightContainer>

      <NextContentLimiter />
    </>
  );
};

export default Highlight;
