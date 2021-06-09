import React from "react";
import { CardShemeOfWorks } from "../components";

import {
  schemeOfWork__destination,
  // schemeOfWork__arrow,
  schemeOfWork__map,
  schemeOfWork__calculator,
  schemeOfWork__handShake,
} from "../assets/images/schemeOfWorkSection";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  shemeOfWorksSection: {
    backgroundColor: theme.palette.background.white,
    border: "2px solid red",
  },
  shemeOfWorks__content: {
    display: "flex",
  },
  shemeOfWorks__cardWrapper: {
    // border: "2px solid red",
    backgroundColor: "green",
    width: "150px",
    height: "250px",
    border: "2px solid red",
  },
}));

const cards = [
  {
    text: "Выбор пункта назначения",
    imgPath: schemeOfWork__destination,
    imgDesc: "Выбор пункта назначения",
  },
  {
    text: "Составление маршрута",
    imgPath: schemeOfWork__map,
    imgDesc: "Составление маршрута движения",
  },
  {
    text: "Расчёт стоимости услуги",
    imgPath: schemeOfWork__calculator,
    imgDesc: "Расчёт стоимости услуги",
  },
  {
    text: "Оформление услуги",
    imgPath: schemeOfWork__handShake,
    imgDesc: "Оформление услуги",
  },
];

const SchemeOfWorkSection = () => {
  const classes = useStyles();
  return (
    <Box variant="div" className={classes.shemeOfWorksSection}>
      <Container fixed>
        <Box component="div" m={3}>
          <Typography align="center" variant="h2" gutterBottom>
            Как мы работаем
          </Typography>
        </Box>
        <Box variant="div" className={classes.shemeOfWorks__content}>
          {cards.map((item) => (
            <Box
              variant="div"
              key={item.imgDesc}
              className={classes.shemeOfWorks__cardWrapper}
            >
              <CardShemeOfWorks props={item} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SchemeOfWorkSection;
