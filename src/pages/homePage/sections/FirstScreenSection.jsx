import React from "react";
import firstScreenImage from "../../../assets/images/firstScreenSection/firstScreenImage.jpeg";
import { ButtonContactsComponent } from "../../../components";

const FirstScreenSection = () => {
  return (
    <div className="section__firstScreen">
      <div className="image_bg">
        <img src={firstScreenImage} alt="firstScreenImage" />
      </div>
      <div className="container">
        <div className="firstScreen__content">
          <div className="block__content">
            <h2>Экскурсии, трансфер, деловые поездки, обслуживание торжеств</h2>
            <ButtonContactsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreenSection;
