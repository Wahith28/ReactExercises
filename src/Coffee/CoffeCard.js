import {
  Avatar,
  Button,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 400,
    // width: "100%",
    // minHeight: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Ccard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  // console.log(props);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent style={{ height: 100 }}>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginBottom: "10px" }}>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default Ccard;
