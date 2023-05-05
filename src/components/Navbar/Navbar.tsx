import logo from "../../../public/assets/logo-name.png";
import userDefaultImage from "../../../public/assets/user-default.png";
import Image from "next/image";
import useNavbar from "./hooks/useNavbar";
import DropdownIcon from "./components/DropdownIcon";
import SearchIcon from "./components/SearchIcon";
import BellIcon from "./components/BellIcon";

const Navbar = () => {
  const { removeBackgroundColor } = useNavbar();

  return (
    <div
      className={
        `navbar ` + (removeBackgroundColor ? "navbar--remove--color" : "")
      }
    >
      <div className="navbar__content">
        <div className="navbar__left__menu">
          <div>
            <Image src={logo} alt="logo" className="navbar__logo" />
          </div>

          <ul className="navbar__links__mobile">
            <li>
              Navegar <DropdownIcon />
            </li>
          </ul>

          <ul className="navbar__links">
            <li>Início</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha lista</li>
            <li>Navegar por idiomas</li>
          </ul>
        </div>

        <div className="navbar__right__menu">
          <div className="navbar__search">
            <SearchIcon />
          </div>

          <div className="navbar__infantil__link">Infantil</div>

          <div className="navbar__bell">
            <div className="navbar__bell__notification">2</div>
            <BellIcon />
          </div>

          <div className="navbar__user">
            <Image src={userDefaultImage} alt="user-image" />
            <DropdownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
