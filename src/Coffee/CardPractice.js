import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import coffeMakerList from "./Constants";
import Ccard from "./CoffeCard";

const Coffeecard = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            {/* {coffeMakerList.map((item, index) => (
              <Ccard {...item} />
            ))} */}
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Coffeecard;
