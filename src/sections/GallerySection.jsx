import React from "react";
import {
  abkhazia_1,
  abkhazia_2,
  abkhazia_5,
} from "../assets/images/gallerySection/abkhazia_04.19";
import {
  sochi_1,
  sochi_3,
  sochi_4,
  sochi_5,
  sochi_6,
  sochi_7,
  sochi_8,
  sochi_9,
} from "../assets/images/gallerySection/sochi_08.18";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Container, CssBaseline, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const gallery = [
  {
    desc: "Абхазия",
    date: "Апрель 2019",
    imgPath: abkhazia_1,
    imgDesc: "abkhazia_1",
  },
  {
    desc: "Абхазия",
    date: "Апрель 2019",
    imgPath: abkhazia_2,
    imgDesc: "abkhazia_2",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_1,
    imgDesc: "sochi_1",
  },
  {
    desc: "Абхазия",
    date: "Август 2018",
    imgPath: abkhazia_5,
    imgDesc: "abkhazia_5",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_3,
    imgDesc: "sochi_3",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_4,
    imgDesc: "sochi_4",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_5,
    imgDesc: "sochi_5",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_6,
    imgDesc: "sochi_6",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_7,
    imgDesc: "sochi_7",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_8,
    imgDesc: "sochi_8",
  },
  {
    desc: "Сочи",
    date: "Август 2018",
    imgPath: sochi_9,
    imgDesc: "sochi_9",
  },
];

const useStyles = makeStyles((theme) => ({
  gallerySection: {
    backgroundColor: theme.palette.background.grey,
    paddingBottom: "30px",
    border: "1px solid transparent",
  },
  gallery__content: {
    maxWidth: "100%",
  },
  gallery__trackWrap: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      height: "220px",
    },
    [theme.breakpoints.up("md")]: {
      height: "420px",
    },
  },
  gallery__track: {
    position: "absolute",
    top: "0",
    display: "flex",
    flexWrap: "wrap",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      width: "200%",
      left: "-30%",
    },
    [theme.breakpoints.up("lg")]: {
      left: "-10%",
    },
  },
  gallery__buttonText: {
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "20px",
    padding: "0 10px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#13c3c9",
    fontSize: "30px",
    cursor: "pointer",
    zIndex: "1",
  },
  gallery__imgWrap: {
    margin: "5px",
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      height: "100px",
    },
    [theme.breakpoints.up("md")]: {
      height: "200px",
    },
  },
  gallery__img: {
    height: "100%",
  },
  slider__imgWrapper: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
  slider__img: {
    position: "absolute",
    top: "0",
    left: "50%",
    height: "93%",
    transform: "translateX(-50%)",
    zIndex: "-1",
  },
}));

const GallerySection = () => {
  const classes = useStyles();
  const [handleOpen, setHandleOpen] = React.useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box name={"gallerySection"} className={classes.gallerySection}>
      <CssBaseline />
      <Container fixed>
        <Box component="div" m={4}>
          <Typography
            align="center"
            variant="h2"
            className={classes.gallery__title}
          >
            Фотогалерея
          </Typography>
        </Box>
        <Box variant="div" className={classes.gallery__content}>
          <Box
            variant="div"
            onClick={handleClick}
            className={classes.gallery__trackWrap}
          >
            <Box variant="div" className={classes.gallery__button}>
              <Typography
                variant="body1"
                className={classes.gallery__buttonText}
              >
                Смотреть
              </Typography>
            </Box>
            <Box variant="div" className={classes.gallery__track}>
              {gallery.map((item, index) => (
                <Box
                  key={item.imgDesc}
                  variant="div"
                  className={classes.gallery__imgWrap}
                >
                  <img
                    src={item.imgPath}
                    alt={item.imgDesc}
                    className={classes.gallery__img}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <AutoRotatingCarousel
            open={handleOpen.open}
            onClose={() => {
              setHandleOpen({ open: false });
            }}
            onStart={() => {
              setHandleOpen({ open: false });
            }}
            mobile={isMobile}
            autoplay={true}
            className={classes.slider}
          >
            {gallery.map((item) => (
              <Slide
                key={item.imgDesc}
                mediaBackgroundStyle={{
                  backgroundColor: "transparent",
                }}
                media={
                  <img
                    src={item.imgPath}
                    alt={item.imgDesc}
                    className={classes.slider__img}
                  />
                }
                // mediaStyle={{ border: "2px solid red"}}
                title={item.desc}
                // titleStyle={{
                //   color: "red",
                // }}
                subtitle={item.date}
                // subtitleStyle={{
                //   border: "2px solid red",
                // }}
                className={classes.slider__imgWrapper}
              ></Slide>
            ))}
          </AutoRotatingCarousel>
        </Box>
      </Container>
    </Box>
  );
};

export default GallerySection;
