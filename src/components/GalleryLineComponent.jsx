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

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Box, Button, MobileStepper, Typography } from "@material-ui/core";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const gallery = {
  name: "Наш ранспорт",
  photos: [
    {
      imgPath: ourTransport_1,
      imgAlt: "ourTransport_1",
    },
    {
      imgPath: ourTransport_2,
      imgAlt: "ourTransport_2",
    },
    {
      imgPath: ourTransport_3,
      imgAlt: "ourTransport_3",
    },
    {
      imgPath: ourTransport_4,
      imgAlt: "ourTransport_4",
    },
    {
      imgPath: ourTransport_5,
      imgAlt: "ourTransport_5",
    },
    {
      imgPath: ourTransport_6,
      imgAlt: "ourTransport_6",
    },
    {
      imgPath: ourTransport_7,
      imgAlt: "ourTransport_7",
    },
    {
      imgPath: ourTransport_8,
      imgAlt: "ourTransport_8",
    },
    {
      imgPath: ourTransport_9,
      imgAlt: "ourTransport_9",
    },
    {
      imgPath: ourTransport_10,
      imgAlt: "ourTransport_10",
    },
    {
      imgPath: ourTransport_11,
      imgAlt: "ourTransport_11",
    },
    {
      imgPath: ourTransport_12,
      imgAlt: "ourTransport_12",
    },
    {
      imgPath: ourTransport_13,
      imgAlt: "ourTransport_13",
    },
    {
      imgPath: ourTransport_14,
      imgAlt: "ourTransport_14",
    },
    {
      imgPath: ourTransport_15,
      imgAlt: "ourTransport_15",
    },
    {
      imgPath: ourTransport_16,
      imgAlt: "ourTransport_16",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
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
  },
  gallery__photo: {
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

const GalleryLineComponent = () => {
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
    <Box variant="div" className={classes.gallery__line}>
      <Typography variant="body1" className={classes.gallery__lineTitle}>
        {gallery.name}
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.gallery__track}
      >
        {gallery.photos.map((item) => (
          <div key={item.imgAlt} className={classes.gallery__photoWrapper}>
            <img
              src={item.imgPath}
              alt={item.imgAlt}
              className={classes.gallery__photo}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={gallery.photos.length}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === gallery.photos.length - 1}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
};

export default GalleryLineComponent;
