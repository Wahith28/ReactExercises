import { Button } from "@material-ui/core";
import React from "react";
import "./HomePage.css";
import Page1 from "./Page1";

// const useStyles = makeStyles({

// });

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundPosition: "center center",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/Q1-Q2-bkg.jpg")`,
      }}
    >
      {/* <audio controls autoplay>
        <source
          id="audio-source"
          src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
          type="audio/mpeg"
          loop="loop"
        ></source>
      </audio> */}
      <div
        style={{
          width: "45%",
          marginLeft: "auto",
          marginTop: "10px",
          height: "96vh",
          position: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/intro-window-2.png")`,
        }}
      ></div>
      <div style={{ marginLeft: "auto" }}>
        <Button
          variant="contained"
          class="btn"
          style={{ width: "150px", height: "30px", marginTop: "20px" }}
        >
          Exit Course
        </Button>
      </div>
      <Button
        class="wah"
        href="/l1p1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "50px",
          marginTop: "550px",
          color: "white",
          textTransform: "capitalize",
          fontSize: "20px",
          fontFamily: "cursive",
          borderRadius: "50px",
          textDecoration: "none",
          // WebkitAnimation: "glowpulse 3s infinite",
        }}
      >
        START
      </Button>
    </div>
  );
};

export default HomePage;
