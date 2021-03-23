import React from "react";
import { SocialComponent } from "../components";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__title">
          <h1>Пассажирские перевозки по Крыму и России</h1>
        </div>
        <div className="header__content">
          <div className="header__contentLeft">
            <p className="something">menu</p>
          </div>
          <div className="header__contentRight">
            <SocialComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;