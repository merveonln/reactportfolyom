import React from "react";
import "../styles/Home.css";
import PC from "../assets/pc.png";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "../assets/CV Merve Önalan.pdf";
import StarRateIcon from "@mui/icons-material/StarRate";

export const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-img" style={{ backgroundImage: `url(${PC})` }} />
      </div>
      <h1 className="my">
        Merhaba, Ben Merve Önalan. Front End Web Geliştiricisiyim.
      </h1>
      <div className="hr-line">
        <hr />
        <hr />
      </div>
      <div id="about" className="about">
        <h1 className="h1-about">Hakkımda</h1>
        <p>
          <StarRateIcon className="star-icon" /> "Search, dream, discover."
        </p>
        <p>
          <StarRateIcon className="star-icon" /> "The difficult we do
          immediately, the impossible takes a little longer." ,
        </p>
        <p>
          inancıyla yola çıkarak yazılım sektöründe çalışmalarımı sürdürüyorum.
        </p>
        <a href={CV} download>
          <button className="btn-cv" type="button">
            Download CV <DownloadIcon />
          </button>
        </a>
      </div>
    </div>
  );
};
