import React from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './styles'
import Product from './Product/Product'
import Footer from './Footer';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.productsContent}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  )
}

export default Products
