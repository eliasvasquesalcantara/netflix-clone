import styled from "styled-components";
import PlayIcon from "./PlayIcon";

const Button = styled.button`
  width: 130px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
  }
`;



const WatchButton = () => {
  return (
      <Button>
        <PlayIcon />
        <span style={{ marginLeft: "7px" }}>Assistir</span>
      </Button>
  );
};

export default WatchButton;
