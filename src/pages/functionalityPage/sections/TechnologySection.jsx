import React from "react";

const TechnologySection = () => {
  return (
    <div className="section__technology">
      <div className="container">
        <div className="technology__title">
          <h2>Технологии</h2>
        </div>
        <div className="technology__content">
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece3eedb50c3200011cbec5/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>
                Система круиз-контроля с регулируемым ограничителем скорости
              </h3>
              <p>
                Круиз-контроль позволяет Вам выбрать и поддерживать заданную
                скорость движения. Также Вы можете задать максимально
                разрешенную скорость движения, что позволит избежать
                непреднамеренного нарушения скоростного режима.
              </p>
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <h3>Система помощи при трогании в гору (HLA)</h3>
              <p>
                Система помощи при трогании на подъеме временно не позволяет
                автомобилю катиться назад или вперед в начале движения на
                склоне. Система поддерживает давление в тормозной системе на 2–3
                секунды дольше, что дает больше времени и возможностей контроля
                при перемещении ноги с педали тормоза на педаль газа. Эта
                функция также полезна при остановке и последующем трогании на
                скользкой поверхности.
              </p>
            </div>
            <div className="content__right">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece3f4cb50c3200011cbec8/1024/0"
                alt="car's ring"
              />
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece3fa438618e0001ac9f2c/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>Индикатор необходимости переключения передач</h3>
              <p>
                Специальный индикатор на приборной панели подскажет водителю,
                когда следует сменить передачу с целью максимальной экономии
                топлива. Это простой, но эффективный способ сделать поездку
                более экономичной.
              </p>
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <h3>Система помощи при экстренном торможении</h3>
              <p>
                Система помощи при экстренном торможении Emergency Brake Assist
                помогает Вашему автомобилю достичь максимальной эффективности
                торможения в экстренной ситуации. Управление этой системой
                автоматически осуществляет электронная система динамической
                стабилизации Electronic Stability Control, которая определяет
                интенсивность давления на педаль тормоза и при необходимости
                автоматически увеличивает его.
              </p>
            </div>
            <div className="content__right">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece403438618e0001ac9f2d/1024/0"
                alt="car's ring"
              />
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece40dab50c3200011cbed7/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>
                Интеллектуальная система регенеративной подзарядки аккумулятора
              </h3>
              <p>
                В отличие от аналогов, интеллектуальная система регенеративной
                подзарядки осуществляет подзарядку аккумулятора только тогда,
                когда это действительно нужно, по мере возможности не делая
                этого при нажатой педали газа. Такой алгоритм работы служит для
                экономии топлива и снижения уровня выбросов CO2.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default TechnologySection;
