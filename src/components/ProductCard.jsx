import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductCard = ({
  name, imageUrl, weight, size, count, id, handleDelete,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container item spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={imageUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Name:
                    {' '}
                    {name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Weight:
                    {' '}
                    {weight}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    height:
                    {' '}
                    {size?.height}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    width:
                    {' '}
                    {size?.width}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <Link to={`/product/${id}`}>
                      Open detailed
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="secondary" variant="contained" onClick={handleDelete(id)}>Delete</Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  In stock:
                  {' '}
                  {count}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
};

ProductCard.defaultProps = {
  size: {
    width: 50,
    height: 50,
  },
  count: 1,
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  count: PropTypes.number,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default ProductCard;
