import ContinueWatchingProgress from "./components/ContinueWatchingProgress";
import { fromPorcentageToPixels } from "./utils/helper-functions";

interface ContinueWatchingProps {
  porcentage: number;
}

const ContinueWatching = ({ porcentage }: ContinueWatchingProps) => {
  return (
    <div className="continue__watching">
      <ContinueWatchingProgress
        className="continue__watching__progress"
        porcentage={fromPorcentageToPixels(porcentage)}
      />
    </div>
  );
};

export default ContinueWatching;
