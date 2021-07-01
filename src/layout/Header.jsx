import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Typography variant="h4" component="h3">Header</Typography>
    </header>
  );
};

export default Header;
