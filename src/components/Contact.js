import React from "react";
import "../styles/Contact.css";
import DownloadIcon from "@mui/icons-material/Download";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

import NearMeIcon from "@mui/icons-material/NearMe";

import CV from "../assets/CV Merve Önalan .pdf";

export const Contact = () => {
  return (
    <div>
      <div className="container">
        <div id="about" className="about">
          <h1 className="h1-about">İletişim</h1>
          <h1 className="my">Bana Ulaşın</h1>
          <p>
            Aşağıdaki butondan cv'mi indirebilir, bana ulaşın kısmındaki formu
            doldurarak iletişime geçebilirsiniz.
          </p>
          <a href={CV} download>
            <button className="btn-cv" type="button">
              Download CV <DownloadIcon />
            </button>
          </a>
        </div>
      </div>

      <div className="hr-line">
        <hr />
        <hr />
      </div>

      <div className="contact">
        <div className="left-column">
          <h2>Bilgilerim</h2>
          <div className="info">
            <ul>
              <li>
                <p>
                  <FmdGoodIcon /> Adres:
                </p>
                İzmir/Karşıyaka
              </li>
              <li>
                <p>
                  <EmailIcon /> E-posta:
                </p>
                merveonalan2@gmail.com
              </li>
              <li className="sociai-media">
                <a href="https://github.com/merveonln">
                  <GitHubIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/merve-önalan">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://twitter.com/merveonlnn">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-column">
          <h2>Bana Ulaşın</h2>
          <form>
            <input type="text" placeholder="Adınız" />
            <input type="text" placeholder="Telefonunuz" />
            <input type="email" placeholder="E-posta adresiniz" />
            <textarea placeholder="Mesajınız"></textarea>
            <a>
              <button className="btn-cv" type="submit">
                <NearMeIcon /> Gönder
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
