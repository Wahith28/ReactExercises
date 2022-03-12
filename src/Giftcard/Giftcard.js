import {
  makeStyles,
  Typography,
  Card,
  TextField,
  Button,
  Avatar,
} from "@material-ui/core";
import React, { useState } from "react";
import mnimg from "../Giftcard/manmatters.png";
import gift from "../Giftcard/Gift.png";
import go from "../Giftcard/GoKwik.svg";
import wts from "../Giftcard/Whatsapp.png";
import img2 from "../Giftcard/img2.jpg";
import img3 from "../Giftcard/img3.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  top: {
    backgroundColor: "black",
    width: "100%",
    height: "28vh",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    background: "-webkit-linear-gradient(#fb00ff, #ffa500)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  card: {
    width: "320px",
    height: "200px",
    borderRadius: "20px",
  },
  textfield: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
    },
    "& .MuiInputBase-input": {
      textAlign: "center",
      fontSize: "large",
    },
  },
});

const Giftdetails = () => {
  return (
    <div>
      <Typography style={{ marginLeft: "55px", marginBottom: "10px" }}>
        <b> Where will I get the gift card?</b>
      </Typography>
      <div style={{ display: "flex", width: "300px" }}>
        <div>
          <img src={wts} width="40px" />
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "20px" }}>
          <span>You will recieve it on Whatsapp/SMS on your mobile.</span>
        </div>
      </div>
      <Typography style={{ marginLeft: "55px", marginBottom: "10px" }}>
        <b> When will I recieve the Gift card?</b>
      </Typography>
      <div style={{ display: "flex", width: "300px" }}>
        <div>
          <img src={img2} width="50px" style={{ marginLeft: "-5px" }} />
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "20px" }}>
          <span>Within 48 hours, when your Man Matters order is delivered</span>
        </div>
      </div>
      <Typography style={{ marginLeft: "55px", marginBottom: "10px" }}>
        <b>What if I cancel the order?</b>
      </Typography>
      <div style={{ display: "flex", width: "300px" }}>
        <div>
          <img src={img3} width="40px" />
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "20px" }}>
          <span>The voucher will not delivered if you cancel the order</span>
        </div>
      </div>
    </div>
  );
};

const Validate = ({ page, handleCheck }) => {
  const [text, settext] = useState(false);
  // const [page, setpage] = useState(false);
  const classes = useStyles();
  const handleValidate = (e) => {
    const check =
      /^(\+91[\s]?)?[0]?(91)?[6789]\d{9}$/i.test(e.target.value) === true
        ? true
        : false;
    settext(check);
  };

  return (
    <div className={classes.body}>
      <Typography style={{ marginBottom: "5px" }}>
        You have WON Paytm Gift
      </Typography>
      <Typography style={{ marginBottom: "5px" }}>
        Card of Rs.200 for <b>placing the order</b>
      </Typography>
      <Typography style={{ marginBottom: "5px" }}>
        <b>on Man Matters</b>
      </Typography>

      <TextField
        placeholder="Enter Mobile Number"
        variant="outlined"
        fullWidth
        className={classes.textfield}
        onChange={handleValidate}
        helperText={
          <Typography variant="caption" style={{ marginLeft: "10px" }}>
            Enter the same number used on Man Matters
          </Typography>
        }
      />

      <Button
        variant="contained"
        color="primary"
        disabled={!text}
        style={{ borderRadius: "20px", marginTop: "10px", height: "50px" }}
        onClick={handleCheck}
      >
        Wow! get my Paytm Gift card&nbsp;
        <ArrowForwardIosIcon style={{ width: "20px" }} />
      </Button>
    </div>
  );
};

const Giftcard = () => {
  const classes = useStyles();
  const [page, setpage] = useState(false);
  const handleCheck = () => {
    setpage("true");
    console.log(page);
  };
  return (
    <>
      <div className={classes.top}>
        <div className={classes.body}>
          <img
            src={mnimg}
            height="110px"
            width="230px"
            style={{ marginTop: "20px" }}
          />
          <h2>
            <span className={classes.text}>Congratulations</span>
            🥳
          </h2>
          <Card className={classes.card}>
            <img src={gift} width="320px" height="210px" />
          </Card>
          <br />
          {page ? (
            <Giftdetails />
          ) : (
            <Validate page={page} handleCheck={handleCheck} />
          )}

          <br />
          <div className={classes.body}>
            <span>
              Powered by
              <br />
              <img
                src={go}
                height="30px"
                style={{ marginTop: "5px", marginLeft: "-10px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giftcard;
