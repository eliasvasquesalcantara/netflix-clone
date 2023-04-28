import logo from "../../../public/assets/logo-name.png";
import userDefaultImage from "../../../public/assets/user-default.png";
import Image from "next/image";
import useNavbar from "./hooks/useNavbar";
import DropdownIcon from "./components/DropdownIcon";

const Navbar = () => {
  const { classRemoveBackgroundColor } = useNavbar();

  return (
    <div className={`navbar ${classRemoveBackgroundColor}`}>
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3257 12.8987L19.7057 18.2787C19.8948 18.468 20.001 18.7246 20.0009 18.9921C20.0008 19.2596 19.8945 19.5161 19.7052 19.7052C19.516 19.8943 19.2594 20.0005 18.9919 20.0004C18.7244 20.0003 18.4678 19.894 18.2787 19.7047L12.8987 14.3247C11.2905 15.5704 9.26802 16.1566 7.24287 15.9641C5.21772 15.7716 3.34198 14.8148 1.99723 13.2884C0.652477 11.7619 -0.0602651 9.78056 0.00399633 7.74729C0.0682577 5.71402 0.904695 3.7816 2.34315 2.34315C3.7816 0.904695 5.71402 0.0682577 7.74729 0.00399633C9.78056 -0.0602651 11.7619 0.652477 13.2884 1.99723C14.8148 3.34198 15.7716 5.21772 15.9641 7.24287C16.1566 9.26802 15.5704 11.2905 14.3247 12.8987H14.3257ZM8.00074 13.9997C9.59204 13.9997 11.1182 13.3676 12.2434 12.2424C13.3686 11.1172 14.0007 9.59104 14.0007 7.99974C14.0007 6.40845 13.3686 4.88232 12.2434 3.7571C11.1182 2.63189 9.59204 1.99974 8.00074 1.99974C6.40944 1.99974 4.88332 2.63189 3.7581 3.7571C2.63289 4.88232 2.00074 6.40845 2.00074 7.99974C2.00074 9.59104 2.63289 11.1172 3.7581 12.2424C4.88332 13.3676 6.40944 13.9997 8.00074 13.9997V13.9997Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="navbar__infantil__link">Infantil</div>

          <div className="navbar__bell">
            <div className="navbar__bell__notification">2</div>
            <svg
              viewBox="0 0 23 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="navbar_bell_icon"
            >
              <path
                d="M11.25 25C12.0241 25.001 12.7793 24.7607 13.4106 24.3127C14.0419 23.8647 14.5179 23.2311 14.7725 22.5H7.7275C7.98208 23.2311 8.4581 23.8647 9.08939 24.3127C9.72068 24.7607 10.4759 25.001 11.25 25V25ZM20 15.7325V10C20 5.97875 17.2687 2.59125 13.5687 1.5725C13.2025 0.65 12.3075 0 11.25 0C10.1925 0 9.2975 0.65 8.93125 1.5725C5.23125 2.5925 2.5 5.97875 2.5 10V15.7325L0.366251 17.8662C0.249948 17.9821 0.157713 18.1199 0.0948567 18.2715C0.0320002 18.4232 -0.000236811 18.5858 1.30959e-06 18.75V20C1.30959e-06 20.3315 0.131697 20.6495 0.366118 20.8839C0.600538 21.1183 0.918481 21.25 1.25 21.25H21.25C21.5815 21.25 21.8995 21.1183 22.1339 20.8839C22.3683 20.6495 22.5 20.3315 22.5 20V18.75C22.5002 18.5858 22.468 18.4232 22.4051 18.2715C22.3423 18.1199 22.2501 17.9821 22.1338 17.8662L20 15.7325Z"
                fill="white"
              />
            </svg>
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
