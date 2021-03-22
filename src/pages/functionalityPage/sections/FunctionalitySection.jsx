import React from "react";

const FunctionalitySection = () => {
  return (
    <div className="section__functionality">
      <div className="container">
        <div className="functionality__title">
          <h2>Функциональность</h2>
        </div>
        <div className="functionality__content">
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece4fa7b50c3200011cc873/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>Ступенька грузового отделения</h3>
              <p>
                В задний бампер встроена широкая ступенька с хорошим сцеплением,
                которая позволяет легко подняться в грузовое отделение при
                погрузке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalitySection;
