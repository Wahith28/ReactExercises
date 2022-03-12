import { Typography } from "@material-ui/core";
import { Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  fhalf: {
    backgroundColor: "white",
    height: "50vh",
  },
  Shalf: {
    backgroundColor: "#363839",
    height: "50vh",
  },
  align: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  About: {
    display: "flex",
    justifyContent: "center",
    width: "1200px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Oranienbaum",
  },
}));

const Safapage2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.fhalf}>
        <Grid
          className={classes.align}
          style={{
            color: "rgb(0, 134, 29)",
            fontSize: "20px",
            marginTop: "40px",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          WHAT WE DELIVER?
        </Grid>
        <Grid container direction="row">
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/5K0Eb6aCqHax3QEGJZQIRAoUwJ2k36p1OEqSP3gUyf_3A1WY36Rtfb5hpr0oq01et4h0JyV8qEZIdOMj=s140"
              style={{ width: "70px", marginLeft: "120px" }}
            />
            <Typography style={{ marginLeft: "110px", marginTop: "10px" }}>
              High Quality
            </Typography>
          </Grid>
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/ixP8E97HUOKwfqb3ce7viQ5c3C7Sik-S2mf0DW0lJD14yNqZfWAViNUuFSWEX0qsJ8-d_J-oavPgaPAN=s140"
              style={{ width: "70px", marginLeft: "100px" }}
            />
            <Typography style={{ marginLeft: "85px", marginTop: "10px" }}>
              Factory Made
            </Typography>
          </Grid>
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/BzaJpGPcTYRqTQHgeEEjHEGN3FN6xVbotXadt0N-hSjxmTGxfZN6BLLV4afLks1XBvfEA9Og0QiOl1a-=s140"
              style={{ width: "70px", marginLeft: "90px" }}
            />
            <Typography style={{ marginLeft: "85px", marginTop: "10px" }}>
              Fast Delivery
            </Typography>
          </Grid>
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/SmF34DG3mGAP9Vz63CwK2v6F_fcos2FJBV3wV8HSNj-bbxrduwboUZo5rws2sh5E72khiwmMVkvz4foa0Q=s140"
              style={{ width: "70px", marginLeft: "85px" }}
            />
            <Typography style={{ marginLeft: "85px", marginTop: "10px" }}>
              Best Price
            </Typography>
          </Grid>
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/1C48z_HMRJXQFK_XVmcrwk6PrRls_8PWbgcHliMwDi2mhS-GOqEzZ2x0DJx9cFRdOiTGBhqdedjNqBjHEA=s140"
              style={{ width: "70px", marginLeft: "90px" }}
            />
            <Typography style={{ marginLeft: "70px", marginTop: "10px" }}>
              Innovative Design
            </Typography>
          </Grid>
          <Grid>
            <img
              src="https://lh3.googleusercontent.com/kS9KlLu88OLgDivI9lfq-g4tL7B_LTq2hHYdSDEV6bQdG7QPxoIKxxOTtQIfWzTvPa5lZNtrscIHQI5vPVg=s140"
              style={{ width: "70px", marginLeft: "85px" }}
            />
            <Typography style={{ marginLeft: "60px", marginTop: "10px" }}>
              Creative Renovation
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.Shalf}>
        <Grid container direction="row" className={classes.Shalf}>
          <Grid
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Grid
              className={classes.align}
              style={{
                color: "white",
                fontSize: "20px",
                marginTop: "50px",
                //   fontWeight: "bold",
                fontFamily: "sans-serif",
                borderBottom: "0.5px solid #fff",
                width: "80px",
              }}
            >
              ABOUT&nbsp;US
            </Grid>
          </Grid>
          {/* <hr size="2" width="100px" color="#ddd" unselectable="on" /> */}
          <Typography className={classes.About} style={{ marginTop: "50px" }}>
            SAFA INTERIORS PLAYS A VITAL ROLE IN THE
          </Typography>
          <Typography className={classes.About} style={{ marginTop: "0px" }}>
            INTERIOR SOLUTIONS IN THE
          </Typography>
          <Typography className={classes.About}>
            CITY OF CHENNAI MORE THAN TWENTY YEARS.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Safapage2;
