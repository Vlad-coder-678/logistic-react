import React from "react";
import { CardAttainment } from "../components";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";

import checkmark from "../assets/images/attainmentSection/checkmark2.png";
import mapPoint from "../assets/images/attainmentSection/mappoint.png";
// import RoomIcon from "@material-ui/icons/Room";
import rating from "../assets/images/attainmentSection/rating.png";
// import StarsIcon from "@material-ui/icons/Stars";
import group from "../assets/images/attainmentSection/group.png";

const useStyles = makeStyles((theme) => ({
  section__attainment: {
    background: theme.palette.background.white,
    border: "1px solid transparent",
    paddingBottom: "30px",
  },
  attainment__card: {
    [theme.breakpoints.up("xs")]: {
      width: "145px",
      margin: "0",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 20px",
      width: "170px",
    },
  },
}));

const cards = [
  {
    imgPath: checkmark,
    alt: "Mercedes-Benc in forest",
    amount: "4000",
    desc: "успешных поездок",
  },
  {
    imgPath: mapPoint,
    alt: "the bride at the wedding",
    amount: "200",
    desc: "посещаемых мест",
  },
  {
    imgPath: rating,
    alt: "transportation of workers",
    amount: "1000",
    desc: "положительных отзывов",
  },
  {
    imgPath: group,
    alt: "school graduation",
    amount: "20000",
    desc: "довольных клиентов",
  },
];

const AttainmentSection = () => {
  const classes = useStyles();
  return (
    <Box varian="div" className={classes.section__attainment}>
      <Container fixed>
        <Box component="div" m={3}>
          <Typography
            align="center"
            variant="h2"
            className={classes.attainment__title}
            gutterBottom
          >
            Наши Достижения
          </Typography>
        </Box>
        <Grid container justify="center" spacing={2}>
          {cards.map((item) => (
            <Grid key={item.desc} item className={classes.attainment__card}>
              <CardAttainment props={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AttainmentSection;

/*
            const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={-200}
          >
            <Typography
              align="center"
              color="inherit"
              variant="h2"
              className={classes.firstScreen__title}
              gutterBottom
            >
              Пассажирские перевозки
            </Typography>
          </Collapse> */
