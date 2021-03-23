import React from "react";

const ButtonContactsComponent = () => {
  return (
    <div className="menu__component">
      <div class="header__burger-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </div>
      {/* <!-- ********************************************* --> */}
      <nav class="header__menu">
        {/* <!-- close --> */}
        <div class="header__burger-svg--active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
          >
            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
          </svg>
        </div>
        <ul class="header__list">
          <li>
            <a href="#header" class="header__link">
              Главная
            </a>
          </li>
          <li>
            <a href="#how" class="header__link">
              Чем я могу Вам помочь
            </a>
          </li>
          <li>
            <a href="#about" class="header__link">
              Обо мне
            </a>
          </li>
          <li>
            <a href="#why" class="header__link">
              Почему Вы выберите меня
            </a>
          </li>
          <li>
            <a href="#project" class="header__link">
              Мои проекты
            </a>
          </li>
          <li>
            <a href="#client" class="header__link">
              Отзывы о моих работах
            </a>
          </li>
          <li>
            <a href="#program" class="header__link">
              Работаю в программах
            </a>
          </li>
          <li>
            <a href="#bonus" class="header__link">
              Мои бонусы
            </a>
          </li>
          <li>
            <a href="#footer" class="header__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ButtonContactsComponent;
