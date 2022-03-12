import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Modal,
  Tooltip,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@material-ui/core";
import {
  Compare,
  Help,
  CompareArrows,
  Settings,
  ArrowDownward,
  ArrowDropDown,
  Bookmark,
  Home,
} from "@material-ui/icons";
import React, { useState } from "react";
import "../Misc/misc.css";
import AIDT from "../ProcessMining/AIDT.PNG";
import UiPath from "../ProcessMining/UiPath.PNG";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { ContactPage } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

const pages = [
  "Process Mining",
  "Task Mining",
  "Licenses & Permissions",
  "Installation & Upgradation",
  "Connectors",
  "FAQs",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    // width: "99vw",
    height: "100vh",
    backgroundImage: `url("https://everflow.ai/wp-content/uploads/2020/08/bi-vs-process-mining-min.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    width: "250px",
    height: "250px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      margin: "2%",
    },
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin: "1%",
    marginTop: "120px",
    // [theme.breakpoints.up("xl")]: {
    //   marginTop: "150px",
    // },
  },
  typo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  robo: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "0px",
  },
  menuicon: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  but: {
    color: "white",
    display: "block",
    height: "41px",
    borderRight: "2px solid white",
    borderLeft: "2px solid white",
    borderTop: "2px solid white",
    borderBottom: "2px solid #3277b2",
    // borderStyle: "outset",
    // borderColor: "red",
    borderWidth: "1px",
    borderRadius: "0px",
    backgroundColor: "#3277b2",
    marginBottom: "2px",
    "&:hover": {
      backgroundColor: "white",
      color: "#3277b2",
      borderBottom: "2px solid white",
    },
    "&:active": {
      backgroundColor: "orange",
    },
    // "&:click": {
    //   backgroundColor: "yellow",
    //   color: "white",
    // },
    // click: {
    //   backgroundColor: "yellow",
    //   color: "white",
    // },
  },
}));

const ProcessminingPage = () => {
  window.onload = function () {
    document.getElementById("popup").showpopup = function () {
      document.getElementById("popup").style.display = "block";
      document.getElementById("iframe").src =
        "https://www.gartner.com/reviews/market/process-mining/compare/celonis-vs-processgold-vs-uipath";
      document.getElementById("page").className = "darken";
      document.getElementById("page").style.display = "block";
    };

    document.getElementById("a").onclick = function (e) {
      e.preventDefault();
      document.getElementById("popup").showpopup();
    };

    document.getElementById("page").onclick = function () {
      if (document.getElementById("popup").style.display == "block") {
        document.getElementById("popup").style.display = "none";
        document.getElementById("page").style.display = "none";
        document.getElementById("page").className = "";
      }
    };
  };
  const classes = useStyles();
  const [modal, setmodal] = useState(false);
  const [open, setOpen] = useState(false);
  const [compare, setcompare] = useState(false);
  const [click, setclick] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => setmodal(true);
  const handleCl = () => {
    setmodal(false);
    setcompare(false);
  };
  const handleCompare = () => setcompare(true);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event, click) => {
    setAnchorElNav(event.currentTarget);
    setclick(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={classes.div}>
      <AppBar
        style={{
          backgroundColor: "#3277b2",
          width: "100vw",
          left: "0",
          top: "0",
          right: "0",
        }}
        position="fixed"
      >
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "white",
            height: "60px",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <img
                src="https://ts.accenture.com/sites/RoboExchange/Style%20Library/images/RoboXchangeLogoB.png"
                width="200px"
                height="50px"
                style={{ marginLeft: "-30px" }}
              />
            </Box>
            <Box>
              <Button style={{ color: "#3277b2" }}>
                <Home fontSize="small" /> Home
              </Button>
              <Button style={{ color: "#3277b2" }}>
                <MailIcon fontSize="small" /> Contact
              </Button>
              <Button style={{ color: "#3277b2" }}>
                <Bookmark fontSize="small" /> Bookmark
              </Button>
            </Box>
          </Toolbar>
        </Container>
        <Container
          maxWidth="xl"
          style={{ height: "40px", display: "flex", alignItems: "center" }}
        >
          <Toolbar disableGutters>
            {/* <Typography
              className={classes.typo}
              variant="h6"
              noWrap
              component="div"
              // style={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography> */}

            <Box className={classes.menuicon} style={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                style={{
                  display: { xs: "block", md: "none" },
                  marginTop: "50px",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{ width: "100vw" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  className={classes.but}
                  // class="button"
                  onClick={handleOpenNavMenu}
                  variant="contained"
                  // fullWidth
                  style={
                    {
                      // backgroundColor: click ? "yellow" : "#3277b2",
                    }
                  }
                >
                  {page}
                  <ArrowDropDown style={{ marginBottom: "-7px" }} />
                </Button>
              ))}
            </Box>

            <Box style={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ padding: 0 }}>
                  <Settings style={{ color: "white" }} />
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip> */}
              <Menu
                style={{ marginTop: "35px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Typography
        variant="h2"
        style={{
          display: "flex",
          alignItems: "center",
          color: "orange",
          marginLeft: "100px",
        }}
      >
        Process & Task Mining Tools
      </Typography> */}
      <Grid
        container
        style={
          {
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   marginTop: "1%",
          }
        }
      >
        {/* <Typography
          variant="h2"
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            color: "white",
            margin: "auto",
            backgroundColor: "blueviolet",
          }}
        >
          Process & Task Mining Tools
        </Typography> */}
        <Grid item xl={12} lg={12} md={6} xs={6} className={classes.grid}>
          <Card
            class="card"
            onClick={handleOpenNavMenu}
            // onClick={() => setmodal(true)}
            //onClick={() => setopen(true)}
          >
            {/* <Typography variant="h5">UiPath</Typography> */}
            <img
              src="https://images.ctfassets.net/5965pury2lcm/1OVj4PfkzVc4Vrm3IuDdAP/f415d995e5a286ddb2644cabafeb9578/UiPath-og-image-orange.png"
              alt=""
              //   width="250px"
              //   height="250px"
            />
            <p class="card-desc">
              UiPath Process Mining use the data from your business applications
              (like ERP and CRM) to give you a detailed understanding of complex
              business processes. You’ll know what to automate and how to do it
              best—and be able to prove impact, too.
            </p>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // style={{ overflow: "auto" }}
          >
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 1000,
                height: 600,
                backgroundColor: "white",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                overflow: "scroll",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                UiPath Process Mining
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                UiPath Process Mining use the data from your business
                applications (like ERP and CRM) to give you a detailed
                understanding of complex business processes. You’ll know what to
                automate and how to do it best—and be able to prove impact, too.
              </Typography>
              <br />
              <img src={UiPath} width="800px" height="600px" />
            </Box>
          </Modal>
          <Card
            class="card"
            style={{ backgroundColor: "white" }}
            onClick={handleClick}
          >
            {/* <Typography variant="h5">Celonis</Typography> */}
            <img
              src="https://www.processmining-software.com/wp-content/uploads/logos/celonis-process-mining-social.png"
              alt=""
              //   width="250px"
              //   height="250px"
            />
            <p class="card-desc">
              Celonis Process mining is the technology at the heart of the
              Celonis Execution Management System, enabling users to fully
              understand how their core business processes run and find the
              inefficiencies getting in the way of performance, before taking
              intelligent, automated action to remove process gaps.
            </p>
          </Card>
          <Modal
            open={modal}
            onClose={handleCl}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 1000,
                backgroundColor: "white",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Celonis Process Mining
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Celonis Process mining is the technology at the heart of the
                Celonis Execution Management System, enabling users to fully
                understand how their core business processes run and find the
                inefficiencies getting in the way of performance, before taking
                intelligent, automated action to remove process gaps.
              </Typography>
              <Typography variant="h6">Celonis EMS</Typography>
              <img src="https://images.ctfassets.net/zmrtlfup12q3/2P27YLpba3IKQyQBp5op68/0ed32924fa4f4fa194b51cef05153c08/Celonis_blueprint_-_2021_2x.png?fm=jpg&q=75&w=920" />
            </Box>
          </Modal>
          <Card class="card" style={{ backgroundColor: "white" }}>
            {/* <Typography variant="h5">PAFnow</Typography> */}
            <img
              src="https://pafnow.com/images/logo/pafnow-logo-2020.png"
              alt=""
              //   width="250px"
              //   height="250px"
            />
            <p class="card-desc">
              PAFnow is the leading Process Mining software implemented in Power
              BI. Find gems among piles of data, pinpoint processes with 100%
              accuracy, and drive corrective actions to your business processes.
            </p>
          </Card>
        </Grid>

        <Grid
          item
          xl={12}
          lg={12}
          md={6}
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card class="card">
            {/* <Typography variant="h5">Process Advisor</Typography> */}

            <img
              src="https://www.rpamaster.com/wp-content/uploads/2021/05/process-advisor.jpg"
              alt=""
            />
            <p class="card-desc">
              The process advisor feature allows you to gain a better
              understanding of your business processes so you can optimize them.
              It can also help you improve how you work by finding opportunities
              for automation. Process advisor offers task mining and process
              mining capabilities to do this.
            </p>
          </Card>
          <Card class="card">
            {/* <Typography variant="h5">AIDT</Typography> */}
            <img
              src="https://pbs.twimg.com/profile_images/1401933469618483203/dTiMXpYj_400x400.jpg"
              alt=""
            />
            <p class="card-desc">
              myInvenio(an IBM company) Process Mining is a process mining
              solution that automatically discovers, constantly monitors, and
              continuously optimizes the business processes.
            </p>
          </Card>
          <Card class="card">
            {/* <Typography variant="h5">IBM</Typography> */}
            <img src={AIDT} alt="" width="200px" />
            <p class="card-desc">
              An automation identification diagnostic tool (AIDT) is disclosed
              that records and analyzes actions within a program that are taken
              by an agent to accomplish certain tasks.
            </p>
          </Card>
        </Grid>
      </Grid>
      <Tooltip
        title={
          <div>
            <Typography variant="h6">What is process mining?</Typography>
            <Typography variant="body" style={{ fontSize: "15px" }}>
              Process mining is a technique designed to discover, monitor and
              improve real processes (i.e., not assumed processes) by extracting
              readily available knowledge from the event logs of information
              systems. Process mining includes: Automated process discovery
              (extracting process models from an event log)"
            </Typography>
          </div>
        }
        placement="left-start"
        arrow
      >
        <Help
          style={{
            position: "absolute",
            top: "140",
            right: "20",
            // backgroundColor: "white",
            color: "white",
          }}
        />
      </Tooltip>
      <Tooltip
        title={<Typography style={{ fontSize: "15px" }}>Compare</Typography>}
        placement="left-start"
        arrow
      >
        <Compare
          onClick={handleCompare}
          style={{
            position: "absolute",
            top: "200",
            right: "20",
            // backgroundColor: "white",
            color: "white",
          }}
        />
      </Tooltip>
      <Modal
        open={compare}
        onClose={handleCl}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Celonis Process Mining
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Celonis Process mining is the technology at the heart of the Celonis
            Execution Management System, enabling users to fully understand how
            their core business processes run and find the inefficiencies
            getting in the way of performance, before taking intelligent,
            automated action to remove process gaps.
          </Typography>
          <Typography variant="h6">Celonis EMS</Typography>
          <img src="https://images.ctfassets.net/zmrtlfup12q3/2P27YLpba3IKQyQBp5op68/0ed32924fa4f4fa194b51cef05153c08/Celonis_blueprint_-_2021_2x.png?fm=jpg&q=75&w=920" />
        </Box>
      </Modal>
      <Tooltip
        title={
          <Typography style={{ fontSize: "15px" }}>Peer Insights</Typography>
        }
        placement="left-start"
        arrow
      >
        <CompareArrows
          href=""
          id="a"
          style={{
            position: "absolute",
            top: "260",
            right: "20",
            // backgroundColor: "white",
            color: "white",
          }}
        />
      </Tooltip>
      {/* <a href="" id="a">
        Click me
      </a> */}

      <div id="page">
        <div id="popup">
          <div id="video">
            Gartner Peer insights
            <iframe id="iframe"></iframe>
          </div>
        </div>
      </div>
      <div>
        <span class="skeleton-loader"></span>
      </div>
    </div>
  );
};

export default ProcessminingPage;
