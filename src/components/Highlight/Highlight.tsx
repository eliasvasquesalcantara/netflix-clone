import WatchButton from "./components/WatchButton";
import MoreInfoButton from "./components/MoreInfoButton";

const Highlight = () => {
  return (
    <>
      <div className="highlight__container">
        <div className="highlight__content">
          <h1 className="highlight__title">
            <span>Orange is the</span> <span>new black</span>
          </h1>
          <p className="highlight__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            corrupti, cum recusandae.
          </p>
          <div className="highlight__buttons__container">
            <WatchButton />
            <MoreInfoButton />
          </div>
        </div>
      </div>

      <div className="highlight__limiter" />
    </>
  );
};

export default Highlight;
