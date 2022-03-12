import {
  Avatar,
  Card,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "skyblue",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const cardStyle = {
    padding: 20,
    height: "88vh",
    overflow: "auto",
  };
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid item xs={8} sm={4} lg={4} md={3}>
        <Card elevation={20} style={cardStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "green" }}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2>Signup</h2>
            <Typography
              style={{ marginTop: "-10px", fontSize: "small", fontWeight: 200 }}
            >
              Please fill the form to create an account !
            </Typography>
          </Grid>
          <TextField
            label="Name"
            placeholder="Enter your name"
            fullWidth
            required
          ></TextField>
          <TextField
            label="Email"
            placeholder="Enter your email"
            fullWidth
            required
          ></TextField>
          <br></br>
          <br></br>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ display: "initial" }}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>{" "}
          <TextField label="Phone Number" fullWidth></TextField>
          <TextField label="Password" type="password" fullWidth></TextField>
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
          ></TextField>
          <br></br>
          <br></br>
          <Button
            type="Sumbit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            SIGN UP
          </Button>
          <Typography>
            <Link
              href="/Login"
              style={{
                color: "#ff6600",
                justifyContent: "center",
                display: "flex",
                marginTop: "2px",
              }}
            >
              Already have an account?{" "}
            </Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Signup;
