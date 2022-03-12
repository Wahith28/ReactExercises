import React from "react";
import coffeMakerList from "./Coffee/Constants";
import Ccard from "./Coffee/CoffeCard";
import {
  Button,
  Card,
  Grid,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import ShareIcon from "@material-ui/icons/Share";
import "./styles.css";

const SafaPage_C = () => {
  return (
    <div>
      <Grid container spacing={0} style={{ padding: "0px 50px" }}>
        {coffeMakerList.map((item, index) => (
          //   <Ccard {...item} />

          <Grid item xs={4} style={{ padding: "20px" }}>
            <Card>
              <CardMedia
                style={{
                  height: "150px",
                  imageRendering: "pixelated",
                }}
                image={item.imageUrl}
              />
            </Card>
            {/* <Card>
              <CardHeader
                avatar={<Avatar src={item.avatarUrl} />}
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={item.subtitle}
              />
              <CardMedia
                style={{
                  height: "150px",
                  imageRendering: "pixelated",
                }}
                image={item.imageUrl}
              />
              <CardContent style={{ height: 50 }}>
                <Tooltip title={item.description} arrow>
                  <Typography variant="body2" component="p" className="wah">
                    {item.description}
                  </Typography>
                </Tooltip>
              </CardContent>
              <CardActions style={{ marginBottom: "5px" }}>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
              </CardActions>
            </Card> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SafaPage_C;
