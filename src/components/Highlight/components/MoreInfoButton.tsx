import InfoIcon from "./InfoIcon";


const MoreInfoButton = () => {
  return (
    <>
      <button className="highlight__base__button highlight--button--info">
        <InfoIcon />
        <span style={{ marginLeft: "7px" }}>Mais informações</span>
      </button>
    </>
  );
};

export default MoreInfoButton;
