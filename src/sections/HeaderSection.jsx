import React from "react";
import { NavigationComponent } from "../components";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Hidden,
} from "@material-ui/core";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const useStyles = makeStyles((theme) => ({
  header__top: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: theme.palette.shadow.black1,
    zIndex: "100",
  },
  header__bottom: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.shadow.black1,
    zIndex: "100",
  },
  header__contentWrapper: {
    justifyContent: "space-around",
  },
  header__contentLeft: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header__contentLeftInner: {
    color: theme.palette.primary.textColorDark,
    fontFamily: theme.typography.fontFamily,
    margin: `0 ${theme.spacing(2)}`,
    [theme.breakpoints.up("xs")]: {
      // fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      // fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      // fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      // fontSize: "2rem",
    },
  },
  header__contentRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header__contentRightInner: {
    color: theme.palette.primary.textColorDark,
    margin: `0 ${theme.spacing(2)}`,
  },
  header__iconPhone: {
    color: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.header__top}>
        <Container fixed>
          <Grid container className={classes.header__contentWrapper}>
            <Grid
              item
              xs={6}
              sm={5}
              md={3}
              className={classes.header__contentLeft}
            >
              <Typography
                className={classes.header__contentLeftInner}
                variant="h6"
              >
                ИП Карпачёв
              </Typography>
            </Grid>
            <Grid
              item
              xs={false}
              md={6}
              lg={5}
              className={classes.header__contentCenter}
            >
              <Hidden smDown>
                <NavigationComponent />
              </Hidden>
            </Grid>
            <Grid
              item
              xs={6}
              sm={5}
              md={3}
              className={classes.header__contentRight}
            >
              <Hidden xsDown>
                <PhoneAndroidIcon
                  className={classes.header__iconPhone}
                  fontSize="small"
                />
              </Hidden>
              <Typography
                className={classes.header__contentRightInner}
                variant="body2"
                align="center"
              >
                {"+7 (978) 123-45-67"}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
      <Hidden mdUp>
        <Container fixed>
          <Toolbar className={classes.header__bottom}>
            <NavigationComponent />
          </Toolbar>
        </Container>
      </Hidden>
    </AppBar>
  );
};

export default Header;
