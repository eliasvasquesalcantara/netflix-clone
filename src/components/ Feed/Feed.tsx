import { StaticImageData } from "next/image";

import strangerThings from "../../../public/assets/stranger-things.jpg";
import agenteNoturno from "../../../public/assets/agente-noturno.jpg";
import suits from "../../../public/assets/suits.webp";
import onePiece from "../../../public/assets/one-piece.webp";
import run from "../../../public/assets/run.webp";
import Thumbnail from "../Thumbnail";

const imagesSrc: StaticImageData[] = [
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
  strangerThings,
];

const Feed = () => {
  return (
    <div className="feed">
      <h3 className="feed__title">Continuar assistindo como Nany</h3>
      <div className="feed__cards">
        {imagesSrc.map((src) => (
          <Thumbnail src={src} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
