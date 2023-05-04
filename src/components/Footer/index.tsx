import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Components/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="footer__container">
      <div>
        <div className="footer__icons__container">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
        <div className="footer__link__container">
          <div>
            <div className="footer__text">Audiodescrição</div>
            <div className="footer__text">Relação com investidores</div>
            <div className="footer__text">Avisos legais</div>
          </div>
          <div>
            <div className="footer__text">Central de Ajuda</div>
            <div className="footer__text">Carreiras</div>
            <div className="footer__text">Preferências de cookies</div>
          </div>
          <div>
            <div className="footer__text">Cartão pré-pago</div>
            <div className="footer__text">Termos de Uso</div>
            <div className="footer__text">Informações corporativas</div>
          </div>
          <div>
            <div className="footer__text">Imprensa</div>
            <div className="footer__text">Privacidade</div>
            <div className="footer__text">Entre em contato</div>
          </div>
        </div>
        <div className="footer__text footer--link--special ">
          Código do serviço
        </div>
        <div className="footer__text footer__copyright">
          @ 1997-2023 Netflix, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
