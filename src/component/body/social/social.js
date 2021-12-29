import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTiktok,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./social.scss";

export default function Social() {
  const faceBookLink = "https://www.facebook.com/dungnm25";
  const instagramLink = "https://www.instagram.com/dung212nguyen/";
  const tiktokLink = "";
  const youtubeLink = "";

  return (
    <div className="social">
      <ul className="social-list">
        <li className="social-item ">
          <a className="social-item-link facebook" href={faceBookLink}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social-item ">
          <a className="social-item-link youtube" href={youtubeLink}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li className="social-item ">
          <a className="social-item-link instagram" href={instagramLink}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-item ">
          <a className="social-item-link tiktok" href={tiktokLink}>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </li>
      </ul>
    </div>
  );
}
