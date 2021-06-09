import React from "react";
import {
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4,
} from "../assets/images/testimonialsSection";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  MobileStepper,
  Typography,
} from "@material-ui/core";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CardTestimonial from "../components/CardTestimonial";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    testimonial:
      "Я самостоятельно искала экскурсионный автобус для поездки по Крыму. Я выступила в качестве гида, а по маршруту советовалась с водителем Константином. Согласовали остановки, даже музыку тематическую включали, было весело! Микроавтобус на 17 мест забрал нашу шумную толпу из аэропорта. Пунктуальный водитель уже ждал нас неподалеку на стоянке. Кресла удобные, салон ухоженный. Водитель пунктуальный, общительный, аккуратный. Все сидения оборудованы личным кондиционером, держателем для стаканов, даже Wi-Fi. Да и гидом работать удобно: микрофон хороший.",
    autor: "Татьяна Шаповал",
    date: "вчера",
    imgPath: testimonial_1,
    imgAlt: "autor_1",
  },
  {
    testimonial:
      "Люблю путешествовать по разным странам и городам, недавно отправился в Крым, на одном из сайтов нашел эту компанию предоставляющую услуги туристического автобуса, перезвонил к ним, чтобы узнать расценки, цены умеренные, также предложили место в одной из туристических групп. Автобус новый, в салоне чисто, водитель оказался опытный, посетили некоторые города и заглянули в несколько музеев, в общем понравилось, хотя в следующий раз лучше ездить со знакомыми и друзьями без компании не так весело.",
    autor: "Надежда Михайловская",
    date: "вчера",
    imgPath: testimonial_2,
    imgAlt: "autor_2",
  },
  {
    testimonial:
      "В мае со своим старшим ребенком ездили в Симферополь, наша группа из 7 человек и плюс родители ездили на соревнования, заодно побывали на красной площади. До Симферополя и по городу нас возил микроавтобус, тренер дал телефон Костантина. Перемещались с комфортом, внутри микроавтобуса было чисто, удивили белоснежные подголовники на креслах. Сэкономили время, и конечно нам не пришлось прыгать из одной маршрутки в другую. Водитель нас провез по местным достопримечательностям, сам рекомендовал, куда лучше съездить, что б в пробке не стоять и все это за адекватную цену.",
    autor: "Лариса Раева",
    date: "вчера",
    imgPath: testimonial_3,
    imgAlt: "autor_3",
  },
  {
    testimonial:
      "В наше время очень сложно найти по-настоящему хорошую кампанию по перевозкам с демократичными ценами и качественным обслуживанием. Ситуация получилась такая, что нужно было срочно найти микроавтобус для поездки с детьми от нашей школы в музей. Учителям известно, насколько это сложно и ответственно. Знакомая подсказала мне номер Константина. Я доверилась ей, и не напрасно! Микроавтобус подъехал вовремя, а самое главное: помогли оформить документы на перевозку детей! Это очень большой плюс. Отдельное спасибо водителю, стоически вытерпевшему наш класс)",
    autor: "Игнат Пелепенко",
    date: "вчера",
    imgPath: testimonial_4,
    imgAlt: "autor_4",
  },
];

const useStyles = makeStyles((theme) => ({
  testimonialsSection: {
    backgroundColor: theme.palette.background.grey,
    paddingBottom: "30px",
    border: "1px solid transparent",
  },
  testimonials__content: {
    backgroundColor: theme.palette.background.white,
    margin: "0 auto",
    maxWidth: 600,
    flexGrow: 1,
  },
}));

const TestimonialsSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box name={"testimonialsSection"} className={classes.testimonialsSection}>
      <CssBaseline />
      <Container fixed>
        <Box component="div" m={4}>
          <Typography
            align="center"
            variant="h2"
            className={classes.testimonials__title}
          >
            Отзывы наших клиентов
          </Typography>
        </Box>
        <Box className={classes.testimonials__content}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {testimonials.map((item) => (
              <div key={item.testimonial}>
                <CardTestimonial card={item} />
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
