import React from "react";

const ComfortableSection = () => {
  return (
    <div className="section__comfort">
      <div className="container">
        <div className="comfort__title">
          <h2>Комфорт и удобство</h2>
        </div>
        <div className="comfort__content">
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
          <div className="content__block">
            <div className="content__left">
              <h3>Удобный доступ</h3>
              <p>
                Удобство входа/выхода обеспечивается просторным дверным проемом.
                Ширина достигает 1300 мм.
              </p>
            </div>
            <div className="content__right">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece4ef738618e0001ac9fe9/1024/0"
                alt="car's ring"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortableSection;
