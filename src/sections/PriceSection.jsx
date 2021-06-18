import React from "react";
import { CardPrice } from "../components";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";

import bg from "../assets/images/priceSection/bg.jpg";

import target from "../assets/images/priceSection/target.png";
import clock from "../assets/images/priceSection/clock2.png";
import case2 from "../assets/images/priceSection/case2.png";
import star from "../assets/images/priceSection/star.png";

const useStyles = makeStyles((theme) => ({
  section__price: {
    position: "relative",
  },
  price__bgWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: theme.palette.shadow.black1,
    zIndex: "-1",
  },
  price__bg: {
    minWidth: "100%",
    opacity: "0.25",
  },
  priceContainer: {
    paddingBottom: "30px",
  },
  price__title: {
    color: "#fff",
    margin: "30px 0px",
  },
  price__cardWrapper: {
    padding: "0",
    [theme.breakpoints.up("xs")]: {
      margin: "0",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 15px",
    },
  },
}));

const cards = [
  {
    imgPath: target,
    alt: "базовый",
    title: "Базовый",
    desc: "35 руб / км",
  },
  {
    imgPath: clock,
    alt: "Стандарт",
    title: "Стандарт",
    desc: "1500 руб / час",
  },
  {
    imgPath: case2,
    alt: "Бизнес",
    title: "Бизнес",
    desc: "10 000 руб / сут",
  },
  {
    imgPath: star,
    alt: "Премиум",
    title: "Премиум",
    desc: "по договорённости",
  },
];

const PriceSection = () => {
  const classes = useStyles();
  return (
    <Box varian="div" id="price" className={classes.section__price}>
      <Box variant="div" className={classes.price__bgWrapper}>
        <img
          src={bg}
          alt={"calculate"}
          loading="lazy"
          className={classes.price__bg}
        />
      </Box>
      <Container fixed className={classes.priceContainer}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h2"
              className={classes.price__title}
            >
              Стоимость услуг
            </Typography>
          </Grid>
          {cards.map((item) => (
            <Grid key={item.desc} item className={classes.price__cardWrapper}>
              <CardPrice props={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PriceSection;

/*
            const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={-200}
          >
            <Typography
              align="center"
              color="inherit"
              variant="h2"
              className={classes.firstScreen__title}
              gutterBottom
            >
              Пассажирские перевозки
            </Typography>
          </Collapse> */
