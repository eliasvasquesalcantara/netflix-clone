import PlayIcon from "./PlayIcon";


const WatchButton = () => {
  return (
      <button className="highlight__base__button highlight--button--watch">
        <PlayIcon />
        <span style={{ marginLeft: "7px" }}>Assistir</span>
      </button>
  );
};

export default WatchButton;
