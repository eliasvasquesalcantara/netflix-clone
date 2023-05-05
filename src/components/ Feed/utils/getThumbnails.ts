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

import { IThumbnail, Category } from "@/components/Thumbnail/utils/types";

export const getThumbnails = (category: Category): IThumbnail[] => {
  return thumbnails.filter((thumb) => thumb.categories.includes(category));
};

const thumbnails: IThumbnail[] = [
  {
    name: "",
    id: "",
    imageSrc: strangerThings,
    continueWatching: { porcentage: 88 },
    categories: ["continue-watching", "my-list", "releases", "watch-again", "romantic-comedy"],
  },
  {
    name: "",
    id: "",
    imageSrc: agenteNoturno,
    continueWatching: { porcentage: 0 },
    categories: ["high-spirits", "my-list", "watch-again"],
  },
  {
    name: "",
    id: "",
    imageSrc: suits,
    continueWatching: { porcentage: 50 },
    categories: ["continue-watching", "watch-again", "high-spirits"],
  },
  {
    name: "",
    id: "",
    imageSrc: onePiece,
    continueWatching: { porcentage: 0 },
    categories: ["high-spirits", "my-list", "releases"],
  },
  {
    name: "",
    id: "",
    imageSrc: run,
    continueWatching: { porcentage: 30 },
    categories: ["continue-watching", "watch-again", "releases", "my-list"],
  },
  {
    name: "",
    id: "",
    imageSrc: arrow,
    continueWatching: { porcentage: 68 },
    categories: ["continue-watching", "high-spirits", "watch-again", "my-list"],
  },
  {
    name: "",
    id: "",
    imageSrc: forrest,
    continueWatching: { porcentage: 1 },
    categories: [
      "continue-watching",
      "high-spirits",
      "my-list",
      "romantic-comedy",
    ],
  },
  {
    name: "",
    id: "",
    imageSrc: jumanji1,
    continueWatching: { porcentage: 0 },
    categories: ["romantic-comedy", "high-spirits", "watch-again"],
  },
  {
    name: "",
    id: "",
    imageSrc: jumanji2,
    continueWatching: { porcentage: 0 },
    categories: ["high-spirits", "releases", "my-list"],
  },
  {
    name: "",
    id: "",
    imageSrc: karateKid,
    continueWatching: { porcentage: 0 },
    categories: ["high-spirits", "my-list", "watch-again", "romantic-comedy"],
  },
  {
    name: "",
    id: "",
    imageSrc: prendameCapaz,
    continueWatching: { porcentage: 24 },
    categories: [
      "continue-watching",
      "romantic-comedy",
      "high-spirits",
      "my-list",
    ],
  },
  {
    name: "",
    id: "",
    imageSrc: superGirl,
    continueWatching: { porcentage: 0 },
    categories: ["romantic-comedy", "watch-again"],
  },
  {
    name: "",
    id: "",
    imageSrc: sweetTooth,
    continueWatching: { porcentage: 0 },
    categories: ["my-list", "releases"],
  },
  {
    name: "",
    id: "",
    imageSrc: teoriaTudo,
    continueWatching: { porcentage: 14 },
    categories: [
      "continue-watching",
      "romantic-comedy",
      "watch-again",
      "high-spirits",
      "releases",
    ],
  },
  {
    name: "",
    id: "",
    imageSrc: tropaElite,
    continueWatching: { porcentage: 0 },
    categories: ["my-list"],
  },
];
