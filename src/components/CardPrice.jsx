import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardPrice: {
    backgroundColor: theme.palette.background.white,
    borderRadius: "10px",
    boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, .35)",
    margin: "2px",
    [theme.breakpoints.up("xs")]: {
      width: "141px",
    },
    [theme.breakpoints.up("md")]: {
      width: "175px",
    },
  },
  cardMediaWrapper: {
    overflow: "hidden",
    margin: "30px 0px 5px",
    [theme.breakpoints.up("xs")]: {
      height: "30px",
    },
    [theme.breakpoints.up("md")]: {
      height: "50px",
    },
  },
  cardMedia: {
    height: "100%",
  },
  cardContent: {
    marginBottom: "15px",
  },
  cardTitle: {
    marginBottom: "20px",
    letterSpacing: "0.01rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
  },
  cardDesc: {
    letterSpacing: "0.01rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  },
}));

const CardPrice = ({ props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardPrice}>
      <CardActionArea>
        <Box align="center" variant="div" className={classes.cardMediaWrapper}>
          <img
            src={props.imgPath}
            alt={props.alt}
            className={classes.cardMedia}
          />
        </Box>
        <CardContent className={classes.cardContent}>
          <Typography align="center" variant="h4" className={classes.cardTitle}>
            {props.title}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            className={classes.cardDesc}
          >
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPrice;
