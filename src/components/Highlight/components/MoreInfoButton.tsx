import InfoIcon from "./InfoIcon";


const MoreInfoButton = () => {
  return (
    <>
      <button className="highlight__button highlight__button__info">
        <InfoIcon />
        <span style={{ marginLeft: "7px" }}>Mais informações</span>
      </button>
    </>
  );
};

export default MoreInfoButton;
