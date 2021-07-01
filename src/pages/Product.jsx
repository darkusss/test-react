import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  Container, Paper, Grid, makeStyles, Typography,
} from '@material-ui/core';
import Layout from '../layout/Layout';
import { fetchProduct } from '../firestore';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Product = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct = await fetchProduct(id);

      setProduct(fetchedProduct);
    }

    getProduct();
  }, []);

  return (
    <Layout>
      <Container>
        <Paper className={classes.paper}>
          {product ? (
            <Grid container direction="row">
              <Grid item className={classes.image}>
                <img src={product.imageUrl} alt="product item" className={classes.img} />
              </Grid>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h2" component="h2">{product.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="h2">
                    Weight:
                    {product.weight}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="h2">
                    Count:
                    {' '}
                    {product.count}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="h5">
                    Height:
                    {' '}
                    {product.size?.height}
                  </Typography>
                  <Typography variant="subtitle1" component="h5">
                    Width:
                    {' '}
                    {product.size?.width}
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          ) : 'No product'}
        </Paper>
      </Container>
    </Layout>
  );
};

export default Product;
