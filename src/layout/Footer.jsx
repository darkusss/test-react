import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h4" component="h3">Footer</Typography>
    </footer>
  );
};

export default Footer;
