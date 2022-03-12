import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../WeatherApp/Images/bg.jpg";
import Form from "./Form";

const useStyles = makeStyles({
  component: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    margin: "0px auto",
    width: "70%",
  },
  leftContainer: {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    // backgroundPosition: "center top",
    backgroundRepeat: "no - repeat",
    height: "80%",
    width: "30%",
    borderRadius: "20px 0 0 20px",
  },
  rightContainer: {
    background: "linear-gradient(to right, #e74c3c, #e67e22)",
    height: "80%",
    width: "70%",
  },
});

const Weather = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
        <Form />
      </Box>
    </Box>
  );
};

export default Weather;
