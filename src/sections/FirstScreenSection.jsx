import React from "react";

// import firstScreenImage750jpg from "../assets/images/firstScreenSection/firstScreenImage_750x562.jpg";
// import firstScreenImage750webp from "../assets/images/firstScreenSection/firstScreenImage_750x562.webp";
import firstScreenImage970jpg from "../assets/images/firstScreenSection/firstScreenImage_970x545.jpg";
import firstScreenImage970webp from "../assets/images/firstScreenSection/firstScreenImage_970x545.webp";
import firstScreenImage1170jpg from "../assets/images/firstScreenSection/firstScreenImage_1170x658.jpg";
import firstScreenImage1170webp from "../assets/images/firstScreenSection/firstScreenImage_1170x658.webp";
import firstScreenImage1920jpg from "../assets/images/firstScreenSection/firstScreenImage_1920x970.jpg";
import firstScreenImage1920webp from "../assets/images/firstScreenSection/firstScreenImage_1920x970.webp";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section__firstScreen: {
    position: "relative",
    overflow: "hidden",
    marginTop: "43px",
  },
  firstScreen_bg: {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    // objectFit: "cover",
  },
  firstScreen__bgImg: {
    transform: "translateY(5px)",
  },
  firstScreen__container: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "100%",
  },
  firstScreen__content: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("xs")]: {
      marginTop: "-5px",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "5px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0px",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "5%",
    },
  },
  firstScreen__contentItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: theme.palette.shadow.white05,
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.4), 0 0 15px 0 rgba(0, 0, 0, 0.9)",
    [theme.breakpoints.up("xs")]: {
      marginTop: "25px",
      height: "50px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "80px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
      height: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "350px",
    },
  },
  firstScreen__title: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    fontWeight: "800",
    textShadow: `0 5px 40px ${theme.palette.shadow.black1}`,
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.1rem",
      lineHeight: "1.7rem",
      marginBottom: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
      marginBottom: "10px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "30px",
      fontSize: "2.5rem",
      letterSpacing: "0.01rem",
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
      letterSpacing: "0.01rem",
      lineHeight: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
      letterSpacing: "0.1rem",
      lineHeight: "4rem",
    },
  },
  firstScreen__titleDescript: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    fontWeight: "400",
    textShadow: `0 5px 25px ${theme.palette.shadow.black1}`,
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9rem",
      letterSpacing: "0.001rem",
      lineHeight: "0.9rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      letterSpacing: "0.001rem",
      lineHeight: "1.1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      letterSpacing: "0.01rem",
      lineHeight: "1.5rem",
      marginBottom: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.8rem",
      letterSpacing: "0.01rem",
      lineHeight: "1.8rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
      letterSpacing: "0.1rem",
      lineHeight: "2.5rem",
    },
  },
  firstScreen__button: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.shadow.black1,
    border: `3px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      filter: "contrast(85%)",
      backgroundColor: theme.palette.shadow.black1,
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
      fontSize: "0.8rem",
      lineHeight: "1.1rem",
      borderRadius: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1rem",
      letterSpacing: "0.01rem",
      lineHeight: "2rem",
      borderRadius: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      borderRadius: "40px",
      fontSize: "1.5rem",
      fontWeight: 400,
      letterSpacing: "0.1rem",
      lineHeight: "2rem",
      padding: theme.spacing(3),
    },
  },
}));

const FirstScreenSection = () => {
  const classes = useStyles();
  return (
    <Box variant="div" className={classes.section__firstScreen}>
      <CssBaseline />
      <picture className={classes.firstScreen_bg}>
        <source
          srcSet={`${firstScreenImage1920webp} 1920w, ${firstScreenImage1170webp} 1280w, ${firstScreenImage970webp} 960w, ${firstScreenImage970webp} 600w`}
          type="image/webp"
        />
        <source
          srcSet={`${firstScreenImage1920jpg} 1920w, ${firstScreenImage1170jpg} 1280w, ${firstScreenImage970jpg} 960w, ${firstScreenImage970jpg} 600w`}
        />
        <img
          src={firstScreenImage1170jpg}
          alt={"mercedes benz transfer passenger"}
          loading="lazy"
          className={classes.firstScreen__bgImg}
        />
      </picture>
      <Container fixed className={classes.firstScreen__container}>
        <Grid className={classes.firstScreen__content} container spacing={2}>
          <Grid
            className={classes.firstScreen__contentItem}
            item
            xs={11}
            md={5}
            xl={6}
          >
            <Typography
              align="center"
              color="inherit"
              variant="h2"
              className={classes.firstScreen__title}
            >
              Пассажирские перевозки
            </Typography>
            <Typography
              align="center"
              color="inherit"
              variant="subtitle1"
              className={classes.firstScreen__titleDescript}
            >
              по Крыму и всей России
            </Typography>
            <Button
              variant="contained"
              href="#services"
              className={classes.firstScreen__button}
            >
              подробнее..
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FirstScreenSection;
