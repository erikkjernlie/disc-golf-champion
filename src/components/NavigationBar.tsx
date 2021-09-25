import React from "react";

import { makeStyles } from "@material-ui/styles";
import { AppBar, Box, createStyles, Link, Toolbar } from "@material-ui/core";

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Link href="/" className={classes.button} color="inherit">
            Home
          </Link>
        </Box>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      "&:hover": {
        textDecoration: "none",
      },
      "&:focus": {
        outline: "none",
      },
      margin: "0 0.5rem",
      fontWeight: "bold",
    },
  })
);
