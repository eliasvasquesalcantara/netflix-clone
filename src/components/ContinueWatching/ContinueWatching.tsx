import ContinueWatchingProgress from "./components/ContinueWatchingProgress";

interface ContinueWatchingProps {
  porcentage: number;
}

const ContinueWatching = ({ porcentage }: ContinueWatchingProps) => {
  return (
    <div className="continue__watching">
      <ContinueWatchingProgress
        className="continue__watching__progress"
        porcentage={porcentage}
      />
    </div>
  );
};

export default ContinueWatching;
