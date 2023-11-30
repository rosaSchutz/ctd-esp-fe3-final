import React from "react";
import { useContextGlobal } from "./utils/global.context";
import '../styles/footer.css';

const Footer = () => {
  const { state } = useContextGlobal();
  return (
    <footer className="footer">
      <section className={`footer-by-${state.theme} footer-by`}>
        <p>Made with</p>
        <svg className="heart" height="1em" viewBox="0 0 512 512">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <p>Wendy Garcia and Rosa Piñeros</p>
      </section>
      <section className="footer-socials">
        <img src="../../public/assets/DH.png" alt="DH-logo" width={300}/>
        <ul className="socials">
          <li>
            <img src="../../public/assets/facebook.svg" alt="icon-facebook" />
          </li>
          <li>
            <img src="../../public/assets/instagram.svg" alt="icon-instagram" />
          </li>
          <li>
            <img src="../../public/assets/whatsapp.svg" alt="icon-whatsapp" />
          </li>
          <li>
            <img
              id="tiktok"
              src="../../public/assets/tiktok.svg"
              alt="icon-tiktok"
              width={30}
            />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
