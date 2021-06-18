import React from "react";

import {
  ourTransport_1,
  ourTransport_2,
  ourTransport_3,
  ourTransport_4,
  ourTransport_5,
  ourTransport_6,
  ourTransport_7,
  ourTransport_8,
  ourTransport_9,
  ourTransport_10,
  ourTransport_11,
  ourTransport_12,
  ourTransport_13,
  ourTransport_14,
  ourTransport_15,
  ourTransport_16,
} from "../assets/images/gallerySection/ourTransport";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  Hidden,
} from "@material-ui/core";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const gallery = {
  name: "Наш транспорт",
  photos: [
    {
      imgPath: ourTransport_1,
      imgDesc: "ourTransport_1",
    },
    {
      imgPath: ourTransport_2,
      imgDesc: "ourTransport_2",
    },
    {
      imgPath: ourTransport_3,
      imgDesc: "ourTransport_3",
    },
    {
      imgPath: ourTransport_4,
      imgDesc: "ourTransport_4",
    },
    {
      imgPath: ourTransport_5,
      imgDesc: "ourTransport_5",
    },
    {
      imgPath: ourTransport_6,
      imgDesc: "ourTransport_6",
    },
    {
      imgPath: ourTransport_7,
      imgDesc: "ourTransport_7",
    },
    {
      imgPath: ourTransport_8,
      imgDesc: "ourTransport_8",
    },
    {
      imgPath: ourTransport_9,
      imgDesc: "ourTransport_9",
    },
    {
      imgPath: ourTransport_10,
      imgDesc: "ourTransport_10",
    },
    {
      imgPath: ourTransport_11,
      imgDesc: "ourTransport_11",
    },
    {
      imgPath: ourTransport_12,
      imgDesc: "ourTransport_12",
    },
    {
      imgPath: ourTransport_13,
      imgDesc: "ourTransport_13",
    },
    {
      imgPath: ourTransport_14,
      imgDesc: "ourTransport_14",
    },
    {
      imgPath: ourTransport_15,
      imgDesc: "ourTransport_15",
    },
    {
      imgPath: ourTransport_16,
      imgDesc: "ourTransport_16",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  section__ourTransport: {
    // backgroundColor: "#fff",
    textAlign: "center",
    paddingBottom: "20px",
  },
  ourTransport__title: {
    margin: "10px auto",
  },
  slider: {
    textAlign: "start",
    margin: "20px auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,.3)",
    [theme.breakpoints.up("xs")]: {
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
  },
  slider__buttonBgLeft: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "50%",
    zIndex: "1",
  },
  slider__buttonBgRight: {
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    width: "50%",
    zIndex: "1",
  },
  slider__buttonPrev: {
    position: "absolute",
    top: "50%",
    backgroundColor: "rgba(19,195,201,0.6)",
    color: "#fff",
    cursor: "pointer",
    zIndex: "10",
    userSelect: "none",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,.3)",
    "&:hover": {
      backgroundColor: "rgba(19,195,201,1)",
      transitionDuration: "1s ease",
    },
    "&:active": {
      transitionDuration: "1s ease",
      boxShadow: "2px 2px 5px 0px rgba(0,0,0,.5)",
    },
    [theme.breakpoints.up("xs")]: {
      left: "5px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "32px",
    },
  },
  slider__buttonNext: {
    position: "absolute",
    top: "50%",
    backgroundColor: "rgba(19,195,201,0.6)",
    color: "#fff",
    cursor: "pointer",
    zIndex: "10",
    userSelect: "none",
    transitionDuration: "1s ease",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,.3)",
    "&:hover": {
      backgroundColor: "rgba(19,195,201,1)",
      transitionDuration: "1s ease",
    },
    "&:active": {
      transitionDuration: "1s ease",
      boxShadow: "2px 2px 5px 0px rgba(0,0,0,.5)",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5px",
    },
    [theme.breakpoints.up("sm")]: {
      right: "32px",
    },
  },
  slider__track: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    borderTop: "5px solid #13c3c9",
  },
  slider__imageWrapper: {
    height: "52%",
    minWidth: "250px",
    backgroundColor: "rgba(19,195,201,0.1)",
    borderRadius: "10px",
    margin: "10px",
    opacity: "1",
    transitionDuration: "0.5s",
    transform: "scale(1)",
    flexBasis: "25%",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,.3)",
  },
  slider__imageCenterWrapper: {
    height: "92%",
    overflow: "hidden",
    borderRadius: "10px",
    opacity: "1",
    transform: "scale(1)",
    backgroundColor: "rgba(19,195,201,0.1)",
    boxShadow: "4px 4px 10px 0px rgba(0,0,0,.5)",
    [theme.breakpoints.up("xs")]: {
      flexBasis: "100%",
      margin: "0px",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      margin: "5px",
    },
  },
  slider__image: {
    position: "relative",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,.5)",
    borderRadius: "10px",
  },
}));

const OurTransportSection = () => {
  const [curr, setCurr] = React.useState(0);
  const length = gallery.photos.length;
  const classes = useStyles();

  React.useEffect(() => {
    let timeoutId = setTimeout(() => {
      setCurr(curr > length - 2 ? 0 : curr + 1);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  const handleNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  const handlePrev = () => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  if (!Array.isArray(gallery.photos) || gallery.photos.length <= 0) {
    return null;
  }

  return (
    <Box variant="div" className={classes.section__ourTransport}>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h2" className={classes.ourTransport__title}>
          {gallery.name}
        </Typography>
        <Box variant="div" className={classes.slider}>
          <Button onClick={handlePrev} className={classes.slider__buttonPrev}>
            <KeyboardArrowLeft />
          </Button>
          <Hidden mdUp>
            <Box
              variant="div"
              onClick={handlePrev}
              className={classes.slider__buttonBgLeft}
            ></Box>
          </Hidden>
          <Box variant="div" className={classes.slider__track}>
            <Hidden smDown>
              <Box
                onClick={handlePrev}
                variant="div"
                className={classes.slider__imageWrapper}
              >
                {/* {gallery.photos
                  .filter((index) => index === curr - 1)
                  .map((item) => (
                    <img
                      key={item.imgDesc}
                      src={item.imgPath}
                      alt={item.imgDesc}
                      className={classes.slider__image}
                    />
                  ))} */}
                {gallery.photos.map((item, index) => {
                  if (index === curr - 1) {
                    return (
                      <img
                        key={item.imgDesc}
                        src={item.imgPath}
                        alt={item.imgDesc}
                        className={classes.slider__image}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </Box>
            </Hidden>
            <Box variant="div" className={classes.slider__imageCenterWrapper}>
              {gallery.photos.map((item, index) => {
                if (index === curr) {
                  return (
                    <img
                      key={item.imgDesc}
                      src={item.imgPath}
                      alt={item.imgDesc}
                      className={classes.slider__image}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </Box>
            <Hidden smDown>
              <Box
                onClick={handleNext}
                variant="div"
                className={classes.slider__imageWrapper}
              >
                {gallery.photos.map((item, index) => {
                  if (index === curr + 1) {
                    return (
                      <img
                        key={item.imgDesc}
                        src={item.imgPath}
                        alt={item.imgDesc}
                        className={classes.slider__image}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </Box>
            </Hidden>
          </Box>
          <Hidden mdUp>
            <Box
              variant="div"
              onClick={handleNext}
              className={classes.slider__buttonBgRight}
            ></Box>
          </Hidden>
          <Button onClick={handleNext} className={classes.slider__buttonNext}>
            <KeyboardArrowRight />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTransportSection;
