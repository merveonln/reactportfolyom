import React from "react";
import "../styles/About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";

import SchoolIcon from "@mui/icons-material/School";
import DevicesIcon from "@mui/icons-material/Devices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Beykent from "../assets/beykent-2._bilisim_zirvesi.png";
import BilgiTeknolojileri from "../assets/btk-bilgi-teknolojilerine-giriş.png";
import İletişim from "../assets/btk-etili_iletişim_stratejileri.png";
import HTML5 from "../assets/btk-html5_ile_web_geliştirme.png";
import SQL from "../assets/btk-sql-sertifika.png";
import HTML101 from "../assets/geleceği-yazanlar_101_HTML.png";
import HTML5_CSS_201 from "../assets/geleceği-yazanlar_201_HTML5_CSS.png";

export const About = () => {
  return (
    <div>
      <div className="container">
        <div id="personal-info" className="personal-info">
          <h1 className="h1-about">Kişisel Bilgilerim</h1>
          <ul>
            <li>
              <b>
                <FmdGoodIcon /> Adres:
              </b>
              İzmir/Karşıyaka
            </li>
            <li>
              <b>
                <EmailIcon /> E-posta:
              </b>
              merveonalan2@gmail.com
            </li>
            <li>
              <b>
                <CakeIcon /> Doğum Tarihi:
              </b>
              05.07.2001
            </li>
            <li className="sociai-media">
              <a href="https://github.com/merveonln">
                <GitHubIcon className="sociaimedia-icon" fontSize="large" />
              </a>
              <a href="https://www.linkedin.com/in/merve-önalan">
                <LinkedInIcon className="sociaimedia-icon" fontSize="large" />
              </a>
              <a href="https://twitter.com/merveonlnn">
                <TwitterIcon className="sociaimedia-icon" fontSize="large" />
              </a>
            </li>
          </ul>
        </div>

        <div className="hr-line">
          <hr />
          <hr />
        </div>

        <div id="skills" className="skills">
          <h1 className="h1-about">Yeteneklerim</h1>
          <ul>
            <li>
              <span className="skill-name">HTML5 / CSS3 / Bootstrap</span>
              <div className="progress-bar-container">
                <div className="progress-bar html-css-bootstrap"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Tailwind Css</span>
              <div className="progress-bar-container">
                <div className="progress-bar tailwind"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Uizard</span>
              <div className="progress-bar-container">
                <div className="progress-bar uizard"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">JavaScript</span>
              <div className="progress-bar-container">
                <div className="progress-bar javascript"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">React</span>
              <div className="progress-bar-container">
                <div className="progress-bar react"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">C#</span>
              <div className="progress-bar-container">
                <div className="progress-bar csharp"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">SQL</span>
              <div className="progress-bar-container">
                <div className="progress-bar sql"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Photoshop</span>
              <div className="progress-bar-container">
                <div className="progress-bar photoshop"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Visual Studio</span>
              <div className="progress-bar-container">
                <div className="progress-bar visual-studio"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="hr-line">
          <hr />
          <hr />
        </div>

        <div id="certificates" className="certificates">
          <h1 className="h1-about">Sertifikalarım</h1>
          <div className="certificate-row">
            <div className="certificate">
              <img
                className="certificate-img"
                src={Beykent}
                alt="Beykent Üniversitesi - 2. Bilişim Zirvesi"
              />
              <p>Beykent Üniversitesi - 2. Bilişim Zirvesi</p>
            </div>
            <div className="certificate">
              <img
                className="certificate-img"
                src={BilgiTeknolojileri}
                alt="BTK Akademi - Bilgi Teknolojilerine Giriş"
              />
              <p>Bilgi Teknolojilerine Giriş</p>
            </div>
            <div className="certificate">
              <img
                className="certificate-img"
                src={İletişim}
                alt="BTK Akademi - Etkili İletişim Stratejileri"
              />
              <p>Etkili İletişim Stratejileri</p>
            </div>
            <div className="certificate">
              <img
                className="certificate-img"
                src={HTML5}
                alt="BTK Akademi - HTML5 İle Web Geliştirme"
              />
              <p>HTML5 İle Web Geliştirme</p>
            </div>
          </div>

          <div className="certificate-row">
            <div className="certificate">
              <img
                className="certificate-img"
                src={SQL}
                alt="BTK Akademi - Uygulamalarla SQL Öğreniyorum"
              />
              <p>Uygulamalarla SQL Öğreniyorum</p>
            </div>
            <div className="certificate">
              <img
                className="certificate-img"
                src={HTML101}
                alt="Geleceği Yazanlar - 101 HTML"
              />
              <p>101 HTML</p>
            </div>
            <div className="certificate">
              <img
                className="certificate-img"
                src={HTML5_CSS_201}
                alt="Geleceği Yazanlar - HTML5 CSS 201"
              />
              <p>HTML5 & CSS</p>
            </div>
          </div>
        </div>

        <div className="hr-line">
          <hr />
          <hr />
        </div>

        <div className="skill-bg">
          <h1 className="h1-about">Tecrübelerim</h1>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <span className="rounded-img">
                  <SchoolIcon className="rounded-icon" />
                </span>
                <h2 className="timeline-h2">2015 - 2019</h2>
                <p>Gazeteci Çetin Altan M.T.A.L - Bilişim Teknolojileri</p>
                <p>Bölümünden mezun oldum.</p>
                <span className="timeline-line">
                  <ArrowDownwardIcon
                    className="timeline-line-icon"
                    fontSize="large"
                  />
                </span>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <span className="rounded-img">
                  <SchoolIcon className="rounded-icon" />
                </span>
                <h2 className="timeline-h2">2020 - 2022</h2>
                <p>Balıkesir Üniversitesi - Bilgisayar Programcılığı'ndan</p>
                <p>Mezun oldum</p>
                <span className="timeline-line">
                  <ArrowDownwardIcon
                    className="timeline-line-icon"
                    fontSize="large"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="container left">
              <div className="content">
                <span className="rounded-img">
                  <DevicesIcon className="rounded-icon" />
                </span>
                <h2 className="timeline-h2">Eylül 2018 - Mayıs 2019 (7 Ay)</h2>
                <p>Karşıyaka Belediyesi - Bilgi İşlem Stajyeri</p>
                <p>olarak çalıştım.</p>
                <span className="timeline-line">
                  <ArrowDownwardIcon
                    className="timeline-line-icon"
                    fontSize="large"
                  />
                </span>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <span className="rounded-img">
                  <BusinessCenterIcon className="rounded-icon" />
                </span>
                <h2 className="timeline-h2">2022 - Halen</h2>
                <p>QTECH Bilgi Teknolojileri A.Ş. 'de</p>
                <p>Front End Web Developer olarak çalışıyorum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
