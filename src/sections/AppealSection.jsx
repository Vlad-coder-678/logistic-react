import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Link, Typography } from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  appeal__section: {
    backgroundColor: theme.palette.shadow.black1,
  },
  appeal__title: {
    color: "#fff",
    padding: "10px 0",
  },
  appeal__content: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      alignItem: "center",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItem: "flex-start",
    },
  },
  appeal__contactsDesc: {
    marginBottom: "20px",
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "start",
      textIndent: "10px",
    },
  },
  appeal__contentContacts: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
      order: "1",
      flexBasis: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
      order: "2",
      flexBasis: "45%",
    },
  },
  appeal__contactsMail: {
    display: "flex",
    marginBottom: "5px",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  colorSecondary: {
    color: "#13c3c9",
    margin: "0 5px",
  },
  appeal__contactsPhoneWrapper: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  appeal__contactsPhone: {
    color: "#fff",
  },
  appeal__contactsSocial: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginBottom: "20px",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  appeal__contactsSocialVK: {
    color: "#fff",
  },
  appeal__contentMap: {
    overflow: "hidden",
    margin: "0 auto",
    marginBottom: "20px",
    [theme.breakpoints.up("xs")]: {
      flexBasis: "100%",
      order: "2",
      width: "290px",
      height: "170px",
    },
    [theme.breakpoints.up("sm")]: {
      order: "1",
      flexBasis: "45%",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "20px",
    },
  },
  appeal__sitesRules: {
    textAlign: "center",
    color: "#fff",
  },
  appeal__sitesOwner: {
    textAlign: "center",
    color: "#fff",
  },
  appeal__sitesCreator: {
    paddingBottom: "70px",
    textAlign: "center",
    color: "#fff",
  },
}));

const AppealSection = () => {
  const classes = useStyles();
  return (
    <Box variant="div" name="contacts" className={classes.appeal__section}>
      <Container fixed>
        <Box component="div" p={3}>
          <Typography
            align="center"
            variant="h2"
            gutterBottom
            className={classes.appeal__title}
          >
            Наши контакты
          </Typography>
        </Box>
        <Box variant="div" className={classes.appeal__content}>
          <Box variant="div" className={classes.appeal__contentContacts}>
            <Box variant="div" className={classes.appeal__contactsTitle}>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.appeal__contactsDesc}
              >
                Вы можете связаться с нами по телефону, написать на почту либо в
                социальных сетях
              </Typography>
            </Box>
            <Box variant="div" className={classes.appeal__contactsMail}>
              <EmailIcon
                fontSize={"small"}
                className={classes.colorSecondary}
              />
              <Typography variant="body2">glot_28@mail.ru</Typography>
            </Box>
            <Box variant="div" className={classes.appeal__contactsPhoneWrapper}>
              <Link></Link>
              <WhatsAppIcon
                fontSize={"small"}
                className={classes.colorSecondary}
              />
              <Link href="tel:+79788540106">
                <Typography
                  variant="body2"
                  className={classes.appeal__contactsPhone}
                >
                  +7 (978) 854 01 06
                </Typography>
              </Link>
            </Box>
            <Box variant="div" className={classes.appeal__contactsSocial}>
              <Link target="_blank" href="www.vk.com/id623752892">
                <svg
                  className={classes.colorSecondary}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 24 20"
                >
                  <path
                    fill="#13c3c9"
                    className="st0"
                    d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
                  />
                </svg>
              </Link>
              <Link target="_blank" href="www.vk.com/id623752892">
                <span className={classes.appeal__contactsSocialVK}>
                  vk.com/id623752892
                </span>
              </Link>
            </Box>
          </Box>
          <Box variant="div" className={classes.appeal__contentMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179592.851111377!2d36.374790196423284!3d45.30563186379943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eebb51ff5ff529%3A0x6d73815391b25ff6!2z0JrQtdGA0YfRjA!5e0!3m2!1sru!2s!4v1622396087317!5m2!1sru!2s"
              width="100%"
              height="100%"
              loading="lazy"
              title="This is a unique title"
            ></iframe>
          </Box>
        </Box>
        <Box variant="div" className={classes.appeal__sitesRules}>
          <Typography variant="body2">Правила сайта</Typography>
        </Box>
        <Box variant="div" className={classes.appeal__sitesOwner}>
          <Typography variant="body2">
            ИП Карпачев
            <span className={classes.colorSecondary}>© 2021</span>
          </Typography>
        </Box>
        <Box variant="div" className={classes.appeal__sitesCreator}>
          <Typography variant="body2">
            Дизайн от
            <span className={classes.colorSecondary}>@Vlad_coder_678</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppealSection;

// {/* <Link
//   target="_blank"
//   href="www.vk.com/id623752892"
//   className={classes.colorSecondary}
// >
//   <FacebookIcon className={classes.colorSecondary} />
// </Link> */}

// <svg
// clasName="viber_icon"
// width="24"
// height="24"
// xmlns="http://www.w3.org/2000/svg"
// fill-rule="evenodd"
// clip-rule="evenodd"
// fill="#13c3c9"
// >
// <path d="M12.892 13.745s.427.038.656-.247l.448-.563c.216-.28.738-.458 1.249-.174.676.382 1.55.982 2.149 1.541.33.278.407.688.182 1.121l-.002.009c-.232.408-.541.791-.932 1.148l-.009.006c-.44.367-.946.58-1.487.404l-.01-.014c-.972-.275-3.304-1.464-4.79-2.649-2.431-1.918-4.159-5.082-4.637-6.778l-.015-.01c-.176-.543.039-1.049.404-1.488l.007-.008c.357-.391.739-.701 1.148-.932l.009-.002c.432-.225.842-.149 1.121.182.367.379 1.056 1.291 1.54 2.149.284.51.106 1.033-.173 1.248l-.564.448c-.284.23-.247.657-.247.657s.834 3.156 3.953 3.952zm4.907-2.616c-.167 0-.303-.135-.304-.302-.014-1.83-.564-3.288-1.634-4.332-1.072-1.045-2.427-1.581-4.027-1.592-.168-.001-.303-.138-.301-.306.001-.167.136-.301.303-.301h.002c1.762.012 3.258.606 4.447 1.764 1.19 1.162 1.802 2.765 1.817 4.763.001.167-.133.304-.301.306h-.002zm-1.595-.624h-.007c-.168-.004-.301-.143-.297-.31.024-1.038-.273-1.878-.906-2.569-.63-.689-1.495-1.065-2.645-1.149-.167-.013-.293-.158-.281-.325.013-.167.158-.293.325-.281 1.294.095 2.32.548 3.049 1.345.733.8 1.092 1.807 1.065 2.992-.004.165-.139.297-.303.297zm-1.558-.522c-.161 0-.295-.126-.303-.289-.051-1.03-.537-1.534-1.527-1.588-.168-.009-.296-.152-.287-.319.009-.168.151-.296.319-.287 1.308.07 2.034.819 2.101 2.164.009.167-.12.31-.288.318l-.015.001zm6.817 3.469c-.605 4.877-4.172 5.185-4.83 5.396-.28.09-2.882.737-6.152.524 0 0-2.438 2.94-3.199 3.705-.119.119-.258.167-.352.145-.131-.032-.167-.188-.165-.414l.02-4.016v-.001c-4.762-1.323-4.485-6.295-4.431-8.898.054-2.603.543-4.736 1.996-6.17 2.61-2.364 7.987-2.011 7.987-2.011 4.541.02 6.717 1.387 7.222 1.845 1.675 1.434 2.528 4.867 1.904 9.895zm-.652-11.113c-.597-.548-3.007-2.298-8.375-2.322 0 0-6.33-.382-9.416 2.45-1.718 1.718-2.322 4.231-2.386 7.348-.063 3.118-.146 8.958 5.484 10.542l.006.002-.004 2.416s-.035.979.609 1.179c.779.241 1.236-.502 1.981-1.304.408-.44.971-1.086 1.397-1.58 3.851.322 6.812-.417 7.149-.526.777-.253 5.177-.816 5.893-6.657.738-6.022-.358-9.83-2.338-11.548z" />
// </svg>

// <a
//   target="_blank"
//   href="www.youtube.com/channel/UCMCgOm8GZkHp8zJ6l7_hIuA"
//   className="social__youtube"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="white"
//       d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
//     />
//   </svg>
//   <span>www.youtube.com/channel/UCMCgOm8GZkHp8zJ6l7_hIuA</span>
// </a>

// <a
//   target="_blank"
//   href="www.instagram.com/accounts/login/?next=/dengi_money_mi/"
//   className="social__icon social__instagram"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="white"
//       d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
//     />
//   </svg>
// </a>

//   <svg
//     className="fasebook"
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="white"
//       d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
//     />
//   </svg>
