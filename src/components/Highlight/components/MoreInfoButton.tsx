import styled from "styled-components";
import InfoIcon from "./InfoIcon";

const Button = styled.button`
  background-color: #7272728c;
  color: #fff;
  cursor: pointer;
  width: 200px;
  height: 35px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #3636368c;
  }
`;

const MoreInfoButton = () => {
  return (
    <>
      <Button>
        <InfoIcon />
        <span style={{ marginLeft: "7px" }}>Mais informações</span>
      </Button>
    </>
  );
};

export default MoreInfoButton;
