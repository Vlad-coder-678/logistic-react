import React from "react";
import {
  abkhazia_1,
  abkhazia_2,
  abkhazia_3,
  abkhazia_4,
  abkhazia_5,
  abkhazia_6,
} from "../assets/images/gallerySection/abkhazia_04.19";
import {
  sochi_1,
  sochi_2,
  sochi_3,
  sochi_4,
  sochi_5,
  sochi_6,
  sochi_7,
  sochi_8,
  sochi_9,
  sochi_10,
} from "../assets/images/gallerySection/sochi_08.18";

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

import { GalleryLineComponent } from "../components/";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const gallery = [
  {
    name: "Абхазия. Апрель 2019",
    photos: [
      {
        imgPath: abkhazia_1,
        imgAlt: "abkhazia_1",
      },
      {
        imgPath: abkhazia_2,
        imgAlt: "abkhazia_2",
      },
      {
        imgPath: abkhazia_3,
        imgAlt: "abkhazia_3",
      },
      {
        imgPath: abkhazia_4,
        imgAlt: "abkhazia_4",
      },
      {
        imgPath: abkhazia_5,
        imgAlt: "abkhazia_5",
      },
      {
        imgPath: abkhazia_6,
        imgAlt: "abkhazia_6",
      },
    ],
  },
  {
    name: "Сочи. Август 2018",
    photos: [
      {
        imgPath: sochi_1,
        imgAlt: "sochi_1",
      },
      {
        imgPath: sochi_2,
        imgAlt: "sochi_2",
      },
      {
        imgPath: sochi_3,
        imgAlt: "sochi_3",
      },
      {
        imgPath: sochi_4,
        imgAlt: "sochi_4",
      },
      {
        imgPath: sochi_5,
        imgAlt: "sochi_5",
      },
      {
        imgPath: sochi_6,
        imgAlt: "sochi_6",
      },
      {
        imgPath: sochi_7,
        imgAlt: "sochi_7",
      },
      {
        imgPath: sochi_8,
        imgAlt: "sochi_8",
      },
      {
        imgPath: sochi_9,
        imgAlt: "sochi_9",
      },
      {
        imgPath: sochi_10,
        imgAlt: "sochi_10",
      },
    ],
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
  gallery__line: {
    borderRadius: "10px",
    backgroundColor: theme.palette.background.white,
    borderTop: "5px solid #13c3c9",
    margin: "20px auto",
  },
  gallery__lineTitle: {
    padding: "10px",
  },
  gallery__track: {
    height: "250px",
    overflow: "hidden",
    margin: "auto 10px",
  },
  gallery__photoWrapper: {
    position: "relative",
    top: "0",
    left: "0",
    height: "250px",
    width: "350px",
    borderRadius: "10px",
    overflow: "hidden",
    // border: "2px solid red",
  },
  gallery__photo: {
    // border: "2px solid red",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: "100%",
    maxHeight: "150%",
    minWidth: "100%",
    maxWidth: "150%",
  },
}));

const GallerySection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [maxSteps, setMaxSteps] = React.useState(1);
  // const maxSteps = gallery.length;

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
          <GalleryLineComponent />
          {gallery.map((item, index) => {
            // let maxSteps = item.photos.length;
            return (
              <Box variant="div" className={classes.gallery__line}>
                <Typography
                  variant="body1"
                  className={classes.gallery__lineTitle}
                >
                  {item.name}
                </Typography>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  className={classes.gallery__track}
                >
                  {item.photos.map((item) => (
                    <div
                      key={item.imgAlt}
                      className={classes.gallery__photoWrapper}
                    >
                      <img
                        src={item.imgPath}
                        alt={item.imgAlt}
                        className={classes.gallery__photo}
                      />
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={item.photos.length}
                  position="static"
                  variant="text"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === item.photos.length - 1}
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
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default GallerySection;
