import React from "react";
import {
  schemeOfWork__destination,
  schemeOfWork__arrow,
  schemeOfWork__map,
  schemeOfWork__calculator,
  schemeOfWork__handShake,
} from "../../../assets/images/schemeOfWorkSection";

const SchemeOfWorkSection = () => {
  return (
    <div className="shemeOfWork__section">
      <div className="container">
        <div className="shemeOfWork__contentWrapper">
          <div className="shemeOfWork__title">
            <h2>Как мы работаем</h2>
          </div>
          <div className="shemeOfWork__content">
            <div className="content__block content__block__1">
              <div className="content__top">
                <img src={schemeOfWork__destination} alt="destination" />
              </div>
              <div className="content__bottom">
                <h3>Выбор пункта назначения</h3>
              </div>
            </div>
            <div className="content__arrow">
              <img src={schemeOfWork__arrow} alt="arrow" />
            </div>
            <div className="content__block content__block__2">
              <div className="content__top">
                <img src={schemeOfWork__map} alt="map" />
              </div>
              <div className="content__bottom">
                <h3>Составление маршрута движения, количества пассажиров</h3>
              </div>
            </div>
            <div className="content__arrow">
              <img src={schemeOfWork__arrow} alt="arrow" />
            </div>
            <div className="content__block content__block__3">
              <div className="content__top">
                <img src={schemeOfWork__calculator} alt="calculate" />
              </div>
              <div className="content__bottom">
                <h3>Расчёт стоимости услуги</h3>
              </div>
            </div>
            <div className="content__arrow">
              <img src={schemeOfWork__arrow} alt="arrow" />
            </div>
            <div className="content__block content__block__4">
              <div className="content__top">
                <img src={schemeOfWork__handShake} alt="handshake" />
              </div>
              <div className="content__bottom">
                <h3>Оформление услуги</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeOfWorkSection;
