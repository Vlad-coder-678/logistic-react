import React from "react";

const BurgerMenuComponent = () => {
  // const burger = document.querySelector(".header__burger-svg");
  // const burgerActive = document.querySelector(".header__burger-svg--active");
  // const menu = document.querySelector(".header__menu");
  // const body = document.querySelector("body");
  // const btnTop = document.getElementById("btn__top");

  // burger.addEventListener("click", function (evt) {
    // burger.classList.add("active");
    // menu.classList.add("active");
    // body.classList.add("lock");
  // });
  // burgerActive.addEventListener("click", function (evt) {
    // burger.classList.remove("active");
    // menu.classList.remove("active");
    // body.classList.remove("lock");
  // });

  return (
    <div className="burgerMenu__component">
      <div class="menu__burgerIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
          />
        </svg>
      </div>

      <nav class="menu__nav">
        {/* <!-- close --> */}
        <div class="menu__burgerIcon__active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
            />
          </svg>
        </div>

        <ul class="menu__list">
          <li>
            <a href="#header" class="menu__link">
              Главная
            </a>
          </li>
          <li>
            <a href="#how" class="menu__link">
              Чем я могу Вам помочь
            </a>
          </li>
          <li>
            <a href="#about" class="menu__link">
              Обо мне
            </a>
          </li>
          <li>
            <a href="#client" class="menu__link">
              Отзывы о моих работах
            </a>
          </li>
          <li>
            <a href="#footer" class="menu__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenuComponent;
