import {
  Card,
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  // const paperStyle={padding:20, height:'50vh'}
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    //    <Grid>
    //        <Paper elevation={10} style={paperStyle}>
    //            <Grid align="center">
    //            <Avatar style={avatarStyle}>
    //            <LockIcon/>
    //            </Avatar>
    //         <h2>Signin</h2>
    //         </Grid>
    //         <TextField label='Username' placeholder="Enter Username" fullWidth required />
    //         <TextField label='Password' placeholder="Enter Password" type='password' style={{marginBottom:"10px"}} fullWidth required />
    //         <FormControlLabel style={{marginRight:"140px"}}
    //     control={
    //       <Checkbox
    //       name="checkedB"
    //         color="primary"
    //         // style={{marginRight:"130px"}}
    //       />
    //     }
    //     label="Remember me"
    //   />
    //   <Button type='Sumbit' color='Primary' fullWidth variant="contained"
    //   style={{margin:"8px 0"}} >SIGN IN</Button>
    //   <Typography> <Link href="#">
    //     Forgot Password ?
    //     </Link>
    //     </Typography>
    //     <Typography>Do you have an account ?
    //     <Link href="#">
    //     Sign Up
    //     </Link>
    //     </Typography>
    //     </Paper>
    //    </Grid>
    <Grid container>
      <Grid
        style={{ height: "120px", width: "100%", backgroundColor: "#333333" }}
      >
        <img
          alt="Automation Anywhere"
          src="	https://apeople.automationanywhere.com/sso/resource/1576026771000/IDP_Resources/AAU_Logo2.png"
          style={{
            backgroundColor: "#333333",
            maxHeight: "100px",
            marginTop: "10px",
            marginLeft: "100px",
          }}
        ></img>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Grid item xs={8} sm={4} lg={3} md={3}>
          <Card elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#ffcc00" }}>
                <LockIcon />
              </Avatar>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter Username"
              fullWidth
              required
            ></TextField>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter Password"
              fullWidth
              required
              style={{ marginBottom: "10px" }}
            ></TextField>
            <FormControlLabel
              style={{ width: "100%", color: "#ff6600" }}
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="Submit"
              fullWidth
              variant="contained"
              style={{
                color: "black",
                backgroundColor: "#ffcc00",
                margin: "8px 0",
              }}
            >
              <b>SIGN IN</b>
            </Button>
            <Typography>
              <Link href="/Reset" style={{ color: "#ff6600" }}>
                Forgot Password?
              </Link>
            </Typography>
            <Typography>
              Do you have account?{" "}
              <Link href="/signup" style={{ color: "#ff6600" }}>
                SignUp
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
