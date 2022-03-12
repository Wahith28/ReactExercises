import React from "react";
import { Grid, TextField, Typography, Button, Link } from "@material-ui/core";

const Resetpass = () => {
  return (
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
          height: "80vh",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Grid item>
          <Typography variant="h4">Reset Account Password</Typography>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            height: "80vh",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Grid item>
            <Typography variant="h7" color="#555" style={{ fontSize: "14px" }}>
              Enter the email address or username that you use to log in to
            </Typography>
            <br></br>
            <Typography variant="h7" color="#555" style={{ fontSize: "14px" }}>
              Automation Anywhere and click on the button below:{" "}
            </Typography>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              height: "80vh",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Grid item>
              <TextField
                required
                label="Email"
                variant="outlined"
                color="#555"
                fullWidth
                style={{ backgroundColor: "LightGrey", width: "380px" }}
              />
              <br></br>
              <Button
                type="Submit"
                fullWidth
                variant="contained"
                style={{
                  color: "black",
                  backgroundColor: "#ffcc00",
                  width: "380px",
                  margin: "20px auto",
                }}
              >
                <b>Submit</b>
              </Button>
              <Typography>
                <Link
                  href="/Login"
                  style={{
                    color: "Blue",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Cancel
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resetpass;
