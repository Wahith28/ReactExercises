import {
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import servicesList from "./Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    height: "100vh",
  },
}));    
 
const SafaPage5 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Typography
          style={{
            justifyContent: "center",
            display: "flex",
            fontFamily: "fantasy",
            borderBottom: "1.5px solid black",
            width: "80px",
          }}
          variant="h4"
        >
          OUR&nbsp;SERVICES
        </Typography>
        {/* <Typography
          style={{
            borderBottom: "0.5px solid black",
            width: "80px",
          }}
        ></Typography> */}
      </Grid>
      <Grid
        container
        spacing={0}
        style={{ padding: "0px 50px", marginTop: "80px" }}
      >
        {servicesList.map((item, index) => (
          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card style={{ borderRadius: "0px" }}>
              <CardMedia
                style={{
                  height: "220px",
                  imageRendering: "pixelated",
                  backgroundImage: " url(" + item.imageUrl + ")",
                }}
                // image={item.imageUrl}
              />
              <Button style={{ marginTop: "-100px" }}>{item.title}</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SafaPage5;
