import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    height: "100vh",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Safapage3 = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage:
          " url(" +
          "https://lh3.googleusercontent.com/SI-3Pfc4sQxF33dZ3jOZliHfN0tvReUeYgXep7WeDyKuJ6m3ws3BAjB9xbxejKq9lo_c_KjVY-36pn4uZw=s1600" +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Grid className={classes.grid}>
        <img
          src="https://lh3.googleusercontent.com/M1zpeBFS-Yzb-KctNCvqK8BXyjdyIddtDo6qDUPR1bJHua86VAd-tu2W0GFCMQSH7ynkG0KGc4HD4RXy=s1500"
          style={{ width: "75%" }}
        />
      </Grid>
      <Grid style={{ color: "white", fontSize: "40px" }} align="center">
        Our Interior Design Process
      </Grid>
    </div>
  );
};

export default Safapage3;
