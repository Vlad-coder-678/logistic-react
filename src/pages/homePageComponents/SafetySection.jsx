import React from "react";

const SafetySection = () => {
  return (
    <div className="section__safety">
      <div className="container">
        <div className="safety__title">
          <h2>Защита и безопасность</h2>
        </div>
        <div className="safety__content">
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece423b38618e0001ac9f2e/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>
                Система помощи при экстренном торможении Emergency Brake Assist
              </h3>
              <p>
                Система помощи при экстренном торможении EBA обеспечивает
                максимальную эффективность торможения в критических ситуациях.
                Она отслеживает, какое тормозное усилие прилагает водитель, и
                при необходимости автоматически увеличивает его. Для еще
                большего уменьшения тормозного пути служит функция
                гидравлического усиления задних тормозов, которая работает при
                активированной системе ABS.
              </p>
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <h3>Электронная система курсовой устойчивости (ESC)</h3>
              <p>
                Электронная система динамической стабилизации (Electronic
                Stability Control) постоянно контролирует траекторию движения
                Вашего автомобиля. Она чувствует любые отклонения от выбранного
                направления движения, например когда машину начинает заносить, и
                автоматически корректирует Ваше положение на дороге, помогая
                удерживать контроль над автомобилем.
              </p>
            </div>
            <div className="content__right">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece42d6b50c3200011cbee3/1024/0"
                alt="car's ring"
              />
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece43d238618e0001ac9f3c/1024/0"
                alt="car's ring"
              />
            </div>
            <div className="content__right">
              <h3>Система предотвращения опрокидывания</h3>
              <p>
                Система контроля вертикальной стабильности отслеживает поведение
                автомобиля с целью защиты от переворачивания. В случае
                возникновения такой опасности она задействует тормозную систему
                и регулирует крутящий момент двигателя, чтобы стабилизировать
                ситуацию.
              </p>
            </div>
          </div>
          <div className="content__block">
            <div className="content__left">
              <h3>Подушки безопасности</h3>
              <p>
                Ford Transit оснащается подушками безопасности, четкая работа
                которых обеспечивается датчиками, расположенными в ключевых
                местах автомобиля. Пассажирская подушка безопасности может быть
                отключена (например, при перевозке ребенка), при этом ее
                деактивированный статус будет отображаться специальным
                индикатором на приборной панели.
              </p>
            </div>
            <div className="content__right">
              <img
                src="https://cdn.kodixauto.ru/media/resized_image/webp/5ece44e1b50c3200011cbef0/1024/0"
                alt="car's ring"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;
