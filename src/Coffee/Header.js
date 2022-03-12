import { makeStyles, Typography } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  typo: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typo}>Abdul Wahith</Typography>
        <MenuIcon />
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
