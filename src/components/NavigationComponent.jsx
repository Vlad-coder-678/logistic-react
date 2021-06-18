import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Hidden } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNavLink: {
    color: theme.palette.shadow.white1,
    flexBasis: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0",
    "&::after": {
      content: "''",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: "1px",
      backgroundColor: "#fff",
      height: "25px",
    },
    "&:last-child": {
      "&::after": {
        display: "none",
      },
    },
    "&:active": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.shadow.white025,
    },
    [theme.breakpoints.up("xs")]: {
      padding: "13px 0 4px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "20px 0 13px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "6px 0 3px",
    },
  },
  buttonInnerNavLink: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textButtonNavLink: {
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.up("md")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2rem",
    },
  },
}));

const nav = [
  { text: "Главная", href: "#top", icon: <HomeIcon /> },
  { text: "Услуги", href: "#services", icon: <ListAltIcon /> },
  { text: "Прайс", href: "#price", icon: <LocalOfferIcon /> },
  { text: "Контакты", href: "#contacts", icon: <ContactsIcon /> },
];

const NavigationComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.buttonContainer}>
      {nav.map((item) => (
        <Button
          href={item.href}
          key={item.text}
          className={classes.buttonNavLink}
        >
          <Box className={classes.buttonInnerNavLink}>
            <span className={classes.iconButtonNavLink}>{item.icon}</span>
            <Hidden smDown>
              <span className={classes.textButtonNavLink}>{item.text}</span>
            </Hidden>
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default NavigationComponent;
