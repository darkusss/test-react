import React, { useState, useEffect } from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import Layout from '../layout/Layout';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/modals/AddProduct';
import { fetchAllProducts, deleteProduct, addProduct } from '../firestore';

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: '100%',
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

const Products = () => {
  const classes = useStyles();

  const [isModalOpen, setModalState] = useState(false);
  const [products, setProducts] = useState([]);

  const handleModalState = () => {
    setModalState(!isModalOpen);
  };

  const handleDelete = (id) => async () => {
    const newProducts = await deleteProduct(id);

    setProducts(newProducts);
  };

  const handleSave = async ({
    name = 'Empty', weight = '50g', imageUrl = '', width = 100, height = 100, count = 1,
  }) => {
    const newProducts = await addProduct({
      name,
      weight,
      imageUrl,
      size: {
        width,
        height,
      },
      count,
    });

    setProducts(newProducts);
    handleModalState();
  };

  useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchAllProducts();
      setProducts(fetchedProducts);
    }

    getProducts();
  }, []);

  return (
    <Layout>
      <Grid container xs={12} spacing={2}>
        {products.map(({
          name, imageUrl, weight, size, id, count,
        }) => (
          <ProductCard
            key={id}
            name={name}
            imageUrl={imageUrl}
            weight={weight}
            size={size}
            count={count}
            id={id}
            handleDelete={handleDelete}
          />
        ))}
      </Grid>
      <Grid container className={classes.grid} justify="center">
        <Button color="primary" variant="contained" onClick={handleModalState}>New product</Button>
      </Grid>
      <AddProductModal
        open={isModalOpen}
        handleClose={handleModalState}
        handleSave={handleSave}
      />
    </Layout>
  );
};

export default Products;
