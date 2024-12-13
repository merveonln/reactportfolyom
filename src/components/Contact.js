import "../styles/Contact.css";
import React, { useState } from "react";
import axios from "axios";
import DownloadIcon from "@mui/icons-material/Download";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

import NearMeIcon from "@mui/icons-material/NearMe";

import CV from "../assets/Merve Önalan.pdf";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // formun varsayılan davranışını engelle

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    axios
      .post("/send", { name, email, message })
      .then((response) => {
        console.log(response.data);
        // e-posta gönderildiğinde kullanıcıya bir mesaj göstermek için burada bir işlem yapabilirsiniz
      })
      .catch((error) => {
        console.error(error);
        // hata durumunda kullanıcıya bir mesaj göstermek için burada bir işlem yapabilirsiniz
      });
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="text" name="phone" placeholder="Telefonunuz" />
            <input
              type="email"
              name="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Mesajınız"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn-cv" type="submit">
              <NearMeIcon /> Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export const Contact = () => {
  return <ContactForm />;
};
