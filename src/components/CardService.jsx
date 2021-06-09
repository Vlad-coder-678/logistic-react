import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardWrapper: {
    maxWidth: 345,
  },
  cardActionArea: {},
  cardMedia: {
    height: "200px",
    backgroundPosition: "center",
  },
});

export default function CardService({ card }) {
  const classes = useStyles();
  return (
    <Card className={classes.cardWrapper}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardMedia}
          image={card.src}
          title={card.alt}
        />
        <CardContent>
          <Typography variant="body2" color="inherit" component="p">
            {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
