import strangerThings from "../../../../public/assets/stranger-things.jpg";
import agenteNoturno from "../../../../public/assets/agente-noturno.jpg";
import suits from "../../../../public/assets/suits.webp";
import onePiece from "../../../../public/assets/one-piece.webp";
import run from "../../../../public/assets/run.webp";
import arrow from "../../../../public/assets/arrow.webp";
import forrest from "../../../../public/assets/forrest-gump.webp";
import jumanji1 from "../../../../public/assets/jumanji.webp";
import jumanji2 from "../../../../public/assets/jumanji-proxima-fase.webp";
import karateKid from "../../../../public/assets/karate-kid.webp";
import prendameCapaz from "../../../../public/assets/prenda-me-se-for-capaz.webp";
import superGirl from "../../../../public/assets/super-girl.webp";
import sweetTooth from "../../../../public/assets/sweet-tooth.jpg";
import teoriaTudo from "../../../../public/assets/teoria-tudo.webp";
import tropaElite from "../../../../public/assets/tropa-de-elite.webp";

import { StaticImageData } from "next/image";

const imagesSrc: StaticImageData[] = [
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
  arrow,
  forrest,
  jumanji1,
  jumanji2,
  karateKid,
  prendameCapaz,
  superGirl,
  sweetTooth,
  teoriaTudo,
  tropaElite,
];


export const getImages = (collectionNumber: 1 | 2 | 3 | 4 | 5 | 6) => {
    if(collectionNumber === 1) return imagesSrc.slice(0, 10)
    if(collectionNumber === 2) return imagesSrc.slice(0, 10).reverse()

    if(collectionNumber === 3) return imagesSrc.slice(5, 15)
    if(collectionNumber === 4) return imagesSrc.slice(5, 15).reverse()

    if(collectionNumber === 5) return imagesSrc.slice(8, 16)
    return imagesSrc.slice(8, 16).reverse()
}