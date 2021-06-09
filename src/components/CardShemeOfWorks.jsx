import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardShemeOfWorks: {
    // backgroundColor: "green",
    // width: "150px",
    // height: "250px",
    // border: "2px solid red",
  },
}));

const CardShemeOfWorks = ({ props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardShemeOfWorks}>
      <CardActionArea>
        <CardMedia image={props.imgPath} title={props.imgDesc} />
        <CardContent>
          <Typography variant="body1">{props.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardShemeOfWorks;
