import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import img1 from "../Learning/Intro-2astros.png";
import "./HomePage.css";

const useStyles = makeStyles({
  top: {
    width: "100%",
    // display: "flex",
    // flexDirection: "column",
    height: "75vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/Q1-Q2-bkg.jpg")`,
    backgroundSize: "cover",
  },
  bottom: {
    width: "100%",
    // display: "flex",
    height: "25vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/bkg-wall2.jpg")`,
    backgroundSize: "cover",
    // backgroundPosition: "top center",
  },
  button: {
    // marginLeft: "1600px",
    // flex: 1,
    // flexDirection: "row",
    alignItems: "center",
  },
});

const Page1 = () => {
  const classes = useStyles();
  const history = useHistory();
  const [click, setclick] = useState(false);
  const handlePage = () => {
    setclick(!click);
    console.log("hello");
    history.push("/l1p2");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.top}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{
              marginRight: "20px",
              marginTop: "20px",
              backgroundColor: "#a100ff",
              borderRadius: "20px",
              color: "white",
            }}
          >
            Exit Course
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={img1}
            // class="page"
            width="1250px"
            height="710px"
            style={{
              marginTop: "-40px",
              // marginRight: "-1000px",
              // backgroundPosition: "50%",
              // backgroundSize: "cover",
              // backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/Intro-2astros-glow.png")`,
            }}
          />
          <img
            class="page"
            src="https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/Intro-2astros-glow.png"
            width="auto"
            height="680px"
            style={{ marginLeft: "-1250px", marginTop: "-20px" }}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <p
            style={{
              width: "1000px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#213f5f",
              color: "white",
              border: "5px solid #747474 ",
              borderRadius: "15px 0 0 15px",
              fontSize: "30px",
              textAlign: "center",
              fontFamily: "Graphik",
            }}
          >
            Between our internal data and our clients' data, Accenture handles a
            lot of precious cargo.
          </p>
          <Button
            style={{
              backgroundColor: "#9563ee",
              border: "5px solid #6e46b4",
              borderRadius: "0 15px 15px 0",
              color: "white",
              width: "130px",
              height: "110px",
              marginTop: "30px",
              fontSize: "20px",
            }}
            onClick={handlePage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
