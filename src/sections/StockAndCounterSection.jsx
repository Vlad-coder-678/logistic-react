import React from "react";

const StockAndCounterSection = () => {
  return (
    <div className="section__firstScreen">
      <div className="container">
        <div className="firstScreen__title">
          <h2>Комфорт и удобство</h2>
        </div>
        <div className="firstScreen__content">
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece4ec5b50c3200011cc872/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>Пассажирские сиденья с регулируемым наклоном спинки</h3>
              <p>
                С откидывающимися спинками и подлокотниками, установленными в
                стандартной комплектации «Тренд», Ваши пассажиры могут
                расслабиться и наслаждаться путешествием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockAndCounterSection;
