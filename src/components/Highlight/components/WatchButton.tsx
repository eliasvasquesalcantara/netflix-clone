import PlayIcon from "./PlayIcon";


const WatchButton = () => {
  return (
      <button className="highlight__button highlight__button__watch">
        <PlayIcon />
        <span style={{ marginLeft: "7px" }}>Assistir</span>
      </button>
  );
};

export default WatchButton;
