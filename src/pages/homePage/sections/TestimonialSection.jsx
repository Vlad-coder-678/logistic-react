import React from "react";
import {
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4,
} from "../../../assets/images/testimonialsSection";

const TestimonialSection = () => {
  return (
    <div className="testimonial__section">
      <div className="container">
        <div className="testimonial__content">
          <div class="slider">
            <input
              type="radio"
              name="slide"
              id="slider__item__1"
              defaultChecked
            />
            <input type="radio" name="slide" id="slider__item__2" />
            <input type="radio" name="slide" id="slider__item__3" />
            <input type="radio" name="slide" id="slider__item__4" />

            <nav>
              <label htmlFor="slider__item__1"></label>
              <label htmlFor="slider__item__2"></label>
              <label htmlFor="slider__item__3"></label>
              <label htmlFor="slider__item__4"></label>
            </nav>

            <section class="slider__item slider__item__1">
              <div class="slider__img">
                <img src={testimonial_1} alt="autor1" />
              </div>
              <p class="slider__testimonial">
                Я самостоятельно искала экскурсионный автобус для поездки по
                Крыму. Я выступила в качестве гида, а по маршруту советовалась с
                водителем Константином. Согласовали остановки, даже музыку
                тематическую включали, было весело! Микроавтобус на 17 мест
                забрал нашу шумную толпу из аэропорта. Пунктуальный водитель уже
                ждал нас неподалеку на стоянке. Кресла удобные, салон ухоженный.
                Водитель пунктуальный, общительный, аккуратный. Все сидения
                оборудованы личным кондиционером, держателем для стаканов, даже
                Wi-Fi. Да и гидом работать удобно: микрофон хороший.
              </p>
              <span class="slider__autor">Татьяна Шаповал</span>
            </section>
            <section class="slider__item slider__item__2">
              <div class="slider__img">
                <img src={testimonial_2} alt="autor2" />
              </div>
              <p class="slider__testimonial">
                В наше время очень сложно найти по-настоящему хорошую кампанию
                по перевозкам с демократичными ценами и качественным
                обслуживанием. Ситуация получилась такая, что нужно было срочно
                найти микроавтобус для поездки с детьми от нашей школы в музей.
                Учителям известно, насколько это сложно и ответственно. Знакомая
                подсказала мне номер Константина. Я доверилась ей, и не
                напрасно! Микроавтобус подъехал вовремя, а самое главное:
                помогли оформить документы на перевозку детей! Это очень большой
                плюс. Отдельное спасибо водителю, стоически вытерпевшему наш
                класс)
              </p>
              <span class="slider__autor">Надежда Михайловская</span>
            </section>
            <section class="slider__item slider__item__3">
              <div class="slider__img">
                <img src={testimonial_3} alt="autor3" />
              </div>
              <p class="slider__testimonial">
                В мае со своим старшим ребенком ездили в Симферополь, наша
                группа из 7 человек и плюс родители ездили на соревнования,
                заодно побывали на красной площади. До Симферополя и по городу
                нас возил микроавтобус, тренер дал телефон Костантина.
                Перемещались с комфортом, внутри микроавтобуса было чисто,
                удивили белоснежные подголовники на креслах. Сэкономили время, и
                конечно нам не пришлось прыгать из одной маршрутки в другую.
                Водитель нас провез по местным достопримечательностям, сам
                рекомендовал, куда лучше съездить, что б в пробке не стоять и
                все это за адекватную цену.
              </p>
              <span class="slider__autor">Лариса Раева</span>
            </section>
            <section class="slider__item slider__item__4">
              <div class="slider__img">
                <img src={testimonial_4} alt="autor4" />
              </div>
              <p class="slider__testimonial">
                Люблю путешествовать по разным странам и городам, недавно
                отправился в Крым, на одном из сайтов нашел эту компанию
                предоставляющую услуги туристического автобуса, перезвонил к
                ним, чтобы узнать расценки, цены умеренные, также предложили
                место в одной из туристических групп. Автобус новый, в салоне
                чисто, водитель оказался опытный, посетили некоторые города и
                заглянули в несколько музеев, в общем понравилось, хотя в
                следующий раз лучше ездить со знакомыми и друзьями без компании
                не так весело.
              </p>
              <span class="slider__autor">Игнат Пелепенко</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
