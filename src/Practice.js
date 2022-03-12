import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Link,
} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Form, Formik, Field } from "formik";
import { useForm } from "react-hook-form";

// const useStyles = makeStyles({
//   main: { display: "flex", justifyContent: "center" },
//   card: {
//     width: "500px",
//     height: "100px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(to right, #e74c3c, #e67e22)",
//     margin: "10px 20px",
//     borderRadius: "10px 0 0 10px",
//     // borderColor: "green",
//     // borderWidth: "100px",
//     // borderBottomWidth: "200px",
//   },
// });

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    // width: "100%",
  },
  box: {
    // display: "flex",
    justifyContent: "center",
    // width: "100%",
  },
  card: {
    // display: "flex",
    width: "400px",
    height: "70vh",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Practice = () => {
  const [product, setproduct] = useState([]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const getData = async () => {
  //   try {
  //     const data = await axios.get(
  //       "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  //     );
  //     console.log(data.data);
  //     setproduct(data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        {/* <Button style={{ width: "50%" }}> SIGN IN</Button>
        <Button style={{ width: "50%" }}>SIGN UP</Button> */}
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab style={{ width: "50%" }} label="Sign In" {...a11yProps(0)} />
            <Tab style={{ width: "50%" }} label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Signin />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>

        {/* <Signin /> */}
      </Card>
      {/* <Box>
        {product.map((item) => (
          <a
            target="-blank"
            href="https://www.google.com/`${item.price}`"
            // onclick="location.href=this.href+'?xyz='+val;return false;"
          >
            <Card className={classes.card}>{item.name}</Card>
          </a>
        ))}
      </Box> */}
    </div>
  );
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const initialValues = { username: "", password: "", remember: false };
  // // const onSubmit = (values, props) => {
  //   console.log(values);
  // };
  var a = "wahith";
  var b = "www.google.com";
  return (
    <Box className={classes.box}>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("Name", { required: true, maxLength: 20 })} />
        {errors.Name?.type === "required" && "name is required"}
        {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
        {errors.firstName?.type === "required" && "First name is required"}
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
      {/* <input type="submit" /> */}
      {/* </form> */}
      <Grid style={{ marginTop: "20px" }}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "darkblue" }}>
            <LockOpenIcon />
          </Avatar>
          <h1>Sign In</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  required
                  fullWidth
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  required
                  fullWidth
                />
                <Field
                  as={FormControlLabel}
                  style={{ marginRight: "210px", marginTop: "10px" }}
                  name="remember"
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      // name="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Button variant="contained" color="primary" fullWidth>
                  SIGN IN
                </Button>
              </Form>
            )}
          </Formik>
          <br />
          <br />
        </Grid>
      </Grid>
      <Link href={<Signup />}>Forgot Password ?</Link>

      <Typography>
        Don't have an account?{" "}
        <Link href={"https://www.google.com/search?q=" + a}>Sign Up</Link>
      </Typography>
    </Box>
  );
};

const Signup = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const [name, setName] = useState("");
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    window.localStorage.setItem("name", name);
  };

  return (
    <Box className={classes.box}>
      <Grid>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "darkblue" }}>
            <LockOpenIcon />
          </Avatar>
          <h1>Sign UP</h1>
          <h4>Please fill the form to create an account</h4>
          <TextField
            label="Name"
            required
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField label="Email" required fullWidth />
          <Grid align="left" style={{ marginTop: "20px" }}>
            <FormLabel component="legend">Gender</FormLabel>
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              // style={{ marginRight: "170px" }}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              // style={{ marginLeft: "-100px" }}
            />
          </Grid>
          <TextField label="Phone Number" required fullWidth />
          <TextField label="Password" type="password" required fullWidth />
          <TextField
            label="Confirm Password"
            type="password"
            required
            fullWidth
          />
          <FormControlLabel
            style={{ marginTop: "10px", marginRight: "80px" }}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="I accept the terms and conditions"
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Practice;
