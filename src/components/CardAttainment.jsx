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
  cardAttainment: {
    backgroundColor: theme.palette.background.white,
    borderRadius: "10px",
    boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, .35)",
  },
  cardMediaWrapper: {
    height: "50px",
    overflow: "hidden",
    margin: "20px 0px 0px",
  },
  cardMedia: {
    height: "100%",
  },
  cardContent: {
    marginBottom: "10px",
  },
}));

const CardAttainment = ({ props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardAttainment}>
      <CardActionArea>
        <Box align="center" variant="div" className={classes.cardMediaWrapper}>
          <img
            src={props.imgPath}
            alt={props.alt}
            className={classes.cardMedia}
          />
        </Box>
        <CardContent className={classes.cardContent}>
          <Typography align="center" variant="body1">
            более
          </Typography>
          <Typography align="center" variant="h3">
            {props.amount}
          </Typography>
          <Typography align="center" variant="body1">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAttainment;
