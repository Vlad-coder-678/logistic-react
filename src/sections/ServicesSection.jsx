import React from "react";
import { CardService } from "../components";

import imgPhoto_1 from "../assets/images/servicesSection/Photo_1.jpg";
import imgPhoto_2 from "../assets/images/servicesSection/Photo_2.jpg";
import imgPhoto_3 from "../assets/images/servicesSection/Photo_3.jpg";
import imgPhoto_4 from "../assets/images/servicesSection/Photo_4.jpg";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  servicesSection: {
    background: theme.palette.background.grey,
    paddingBottom: "30px",
  },
}));

const cards = [
  {
    src: imgPhoto_1,
    alt: "Mercedes-Benc in forest",
    desc: "Аренда автобуса для экскурсий",
  },
  {
    src: imgPhoto_2,
    alt: "the bride at the wedding",
    desc: "Аренда автобуса для торжеств",
  },
  {
    src: imgPhoto_3,
    alt: "transportation of workers",
    desc: "Аренда для перевозки сотрудников",
  },
  {
    src: imgPhoto_4,
    alt: "school graduation",
    desc: "Аренда автобуса для выпускных",
  },
];

const ServicesSection = () => {
  const classes = useStyles();
  return (
    <Box
      variant="div"
      name={"servicesSection"}
      className={classes.servicesSection}
    >
      <CssBaseline />
      <Container fixed>
        <Box component="div" p={3}>
          <Typography
            align="center"
            color="inherit"
            variant="h2"
            className={classes.services__title}
          >
            Наши Услуги
          </Typography>
        </Box>
        <Grid
          className={classes.services__content}
          container
          justify="center"
          spacing={2}
        >
          {cards.map((item) => (
            <Grid key={item.alt} item xs={6} md={3}>
              <CardService card={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
