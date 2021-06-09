import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardTestimonial: {
    backgroundColor: theme.palette.background.light,
    flexDirection: "column",
  },
  testimonial__header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  testimonial__imgWrapper: {
    width: "70px",
    height: "70px",
    margin: "20px",
  },
  testimonial__autor: {
    color: "#2a5885",
  },
  testimonnial__text: {
    margin: "0 20px",
    textIndent: "1rem",
    textAlign: "justify",
  },
}));

const CardTestimonial = ({ card }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardTestimonial}>
      <Box variant="div" className={classes.testimonial__header}>
        <Avatar
          alt={card.text}
          src={card.imgPath}
          className={(classes.large, classes.testimonial__imgWrapper)}
        />
        <Box variant="div">
          <Typography
            variant="subtitle1"
            className={classes.testimonial__autor}
          >
            {card.autor}
          </Typography>
          <Typography variant="subtitle2">{card.date}</Typography>
        </Box>
      </Box>
      <Paper square elevation={0} className={classes.testimonial__textWrapper}>
        <Typography
          variant={"body1"}
          align="left"
          className={classes.testimonnial__text}
        >
          {card.testimonial}
        </Typography>
      </Paper>
    </div>
  );
};

export default CardTestimonial;
