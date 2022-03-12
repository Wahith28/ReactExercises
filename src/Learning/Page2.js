import React, { useState } from "react";
import { Button, Grid, makeStyles, Tooltip } from "@material-ui/core";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "75vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/Intro-bkg-3.jpg")`,
    backgroundSize: "cover",
    // backgroundPosition: " bottom ",
  },
  bottom: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
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

const Page2 = () => {
  const classes = useStyles();
  const [click, setclick] = useState(false);
  const [link, setlink] = useState("");
  const history = useHistory();

  const handleClick = () => {
    setclick(!click);
    // setlink("/l1p3");
    if (click == true) {
      history.push("/l1p1");
    }
  };

  const page = () => {
    history.push("/l1p1");
  };

  switch (click) {
    case "true":
      console.log("world");
      break;
    case click:
      console.log("world2");
      break;

    default:
      console.log("world1");
      break;
  }
  return (
    <div>
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
            border: "10px solid #222",
            width: "920px",
            height: "480px",
            marginLeft: "500px",
            marginTop: "60px",
            position: "absolute",
            backgroundColor: "black",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              border: "10px solid #187a96",
              width: "900px",
              height: "460px",
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              class="image"
              src="https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/screencapture-protectingaccenture.png"
              width="100%"
              //   height="auto"
            />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Tooltip
            arrow
            title={
              <div style={{ fontSize: "15px" }}>
                <p>
                  Click here to access the{" "}
                  <b>How to Store and Share Information Page </b> and track down
                  the missing information!
                </p>
              </div>
            }
            placement="top"
          >
            <Button
              style={{
                backgroundColor: "#9563ee",
                borderRadius: "75px",
                width: "140px",
                height: "140px",
                border: "5px solid #6e46b4",
                marginRight: "100px",
                marginTop: "10px",
              }}
              href="https://in.accenture.com/protectingaccenture/determine-data-classification/"
              target="blank"
            >
              <img src="https://mylearning.accenture.com/ScormEngine/ScormCourses/LiS-package_20210430-562021101107AM/scormcontent/images/button-help-inner.png" />
            </Button>
          </Tooltip>

          <div style={{ display: "flex", marginRight: "150px" }}>
            <p
              style={{
                width: "1000px",
                height: "100px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#213f5f",
                color: "white",
                border: "5px solid #747474 ",
                borderRadius: "15px 0 0 15px",
                fontSize: "25px",
                textAlign: "center",
                fontFamily: "Graphik",
                // marginTop: "100px",
              }}
            >
              {click ? (
                <p>
                  Put the page into practice by successfully completing a 3-step
                  mission.
                  <span>
                    Make sure to use the Store and Share button to help you
                    along the way!
                  </span>
                </p>
              ) : (
                <span>
                  Accenture’s new{" "}
                  <b>
                    <a
                      href="https://in.accenture.com/protectingaccenture/determine-data-classification/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#9563ee" }}
                    >
                      How to Store and Share Information Page
                    </a>
                  </b>{" "}
                  has the tools you need to protect the data you store and share
                  every day.
                </span>
              )}
            </p>

            <Button
              // href={link}
              style={{
                backgroundColor: "#9563ee",
                border: "5px solid #6e46b4",
                borderRadius: "0 15px 15px 0",
                color: "white",
                width: "130px",
                height: "110px",
                marginTop: "25px",
                fontSize: "20px",
                // marginLeft: "-100px",
              }}
              onClick={handleClick}
            >
              {click ? "Lets Go" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
