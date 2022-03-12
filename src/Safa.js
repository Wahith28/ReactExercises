import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { Grid, makeStyles, Card, Button } from "@material-ui/core";
import React from "react";
import { Skeleton } from "@material-ui/lab";
import AppBar from "@material-ui/core/AppBar";
import Safapage2 from "./SafaPage2";
import Safapage3 from "./SafaPage3";
import Safapage4 from "./SafaPage4";
import SafaPage5 from "./SafaPage5";
import SafaPage_C from "./SafaPage_Coffee";

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

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const useStyles = makeStyles((theme) => ({
  paperstyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100px",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiTab-root ": { minWidth: "120px" },
  },
  Backimg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  },
  Font1: {
    marginTop: "40px",
    color: "rgb(255 255 255)",
    marginLeft: "10px",
    fontFamily: "Fredericka the Great",
    backgroundColor: "rgba(255, 255, 255, 0)",
    letterSpacing: "0.05em",
    fontSize: "20px",
    direction: "ltr",
    textDecorationThickness: "initial",
    textDecorationStyle: "initial",
    textDecorationColor: "initial",
    display: "inline block",
    marginBottom: "30px",
  },
  card: {
    height: "50vh",
    width: "1200px",
    // opacity: "0.5",
  },
  font2: {
    lineHeight: "1.2em",
    fontFamily: "Qwigley",
    fontSize: "40px",
    pointerEvents: "auto",
    color: "rgb(255, 255, 255)",
    filter: "grayscale(100%)",
  },
  button: {
    variant: "contained",
    color: "primary",
  },
}));

const Safa = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(" +
            "https://lh3.googleusercontent.com/tq3b3L3doC4V-Gf9ym-avHlvGOaFIsj21KF3KhQHbkyA1zHbuiL6Toh5iRDemA0JQfT_TZZ4Ldt08Ns1jw=s1600" +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "left center",
          // WebkitFilter: "brightness(0.6)",
          color: "white",
          // backgroundBlendMode: "saturation(0.5)",
          // filter: "grayscale(10%)",
          // backgroundPosition: "47.8981% 59.2348%, 47.8981% 59.2348%",
        }}
      >
        <Grid container direction="row" display="flex">
          <img
            src="https://lh3.googleusercontent.com/Es7lHfLCDZ6oni1iiXXaDwWn_wo-QsgJaWJVolFljK1tuDsZiNOocM1jT8piPfy_R8bqE7KcvCUevpA_=s100"
            style={{
              height: "40px",
              width: "50px",
              marginLeft: "100px",
              marginTop: "30px",
              color: "rgb(0, 0, 0)",
            }}
          />

          <Grid className={classes.Font1}>SAFA INTERIORS</Grid>
          <Grid style={{ marginTop: "15px", marginLeft: "200px" }}>
            <div
              position="static"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "rgb(246, 246, 246)",
                lineHeight: "1.4em",
                borderRadius: "0px",
                marginTop: "10px",
                // marginLeft: "20px",
                // verticalAlign: "middle",
                // textAlign: "center",
                fontSize: "20px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                style={{ marginLeft: "200px" }}
              >
                <Tab label="HOME" {...a11yProps(0)} />
                <Tab label="ABOUT US" {...a11yProps(1)} />
                <Tab label="OUR WORKS" {...a11yProps(2)} />
                <Tab label="ENQUIRY" {...a11yProps(3)} />
              </Tabs>
            </div>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          display="flex"
          className={classes.paperstyle}
        >
          <Grid className={classes.card}>
            <Typography
              style={{
                fontSize: "80px",
                fontFamily: "Oxygen",
                letterSpacing: "0.1em",
                lineHeight: "4.5em",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                marginTop: "-80px",
              }}
            >
              SAFA INTERIORS
            </Typography>

            <Typography
              align="center"
              className={classes.font2}
              style={{ marginTop: "-100px" }}
            >
              One Stop Solution for
            </Typography>
            <Typography
              align="center"
              className={classes.font2}
              style={{ marginTop: "10px" }}
            >
              Complete Home Interior works!!
            </Typography>
            {/* <Skeleton />
          <Skeleton animation={false} />
          <Skeleton animation="pulse" /> */}
            <Grid className={classes.paperstyle}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "green",
                  borderRadius: "20px",
                  marginRight: "20px",
                  marginTop: "20px",
                }}
              >
                Call: 90908 08998
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "green",
                  borderRadius: "20px",
                  marginTop: "20px",
                }}
              >
                REQUEST A CALL
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <div>
        <Card style={{ height: "500px" }}>ABDUL WAHITH</Card>
      </div> */}

      <Safapage2 />
      <Safapage4 />
      <Safapage3 />
      <SafaPage5 />
      {/* <SafaPage_C /> */}
    </div>
  );
};

export default Safa;
