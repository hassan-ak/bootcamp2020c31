// Imports
// React Imports
import React from "react";
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Images Imports
import "./blogPageEmpty.css";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Styling for home Component
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },
  componentGrid: {
    backgroundColor: "whitesmoke",
    padding: "20px",
    border: "0",
  },
  startButton: {
    backgroundColor: "#298155",
    textDecoration: "none",
    width: "50%",
    alignSelf: "center",
  },
}));

// Home Component
export const BlogPageEmpty = () => {
  //  useStyles
  const classes = useStyles();
  return (
    <div className='homeContainer'>
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='homeContent'>
            <Typography
              variant='h4'
              align='center'
              gutterBottom
              className='title'
            >
              Blogistan
            </Typography>
            <Typography variant='h6' gutterBottom className='homeDetail'>
              There is nothing to Read right now.
            </Typography>
            <Typography variant='h6' gutterBottom className='homeDetail'>
              We are currently working on some awsome content which will be
              posted in a short while.Hope to see you soon.
            </Typography>

            <Button
              variant='contained'
              className={classes.startButton}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='imageGridEmpty'>
            <StaticImage
              className='emptyImage'
              src='../../asserts/sad.png'
              alt='LandingImage'
              placeholder='none'
            />
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
