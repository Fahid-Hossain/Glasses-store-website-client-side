import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link as NavLink } from 'react-router-dom';

const Products = () => {
  //load product from database
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://thawing-lake-33684.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <Box sx={{ flexGrow: 1, marginTop: "21px" }}>
      <h1>NEW ARRIVAL CHASMISH</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={product.img} alt="" width="100%" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <NavLink style={{textDecoration: "none"}} to={`/order/${product._id}`}>
              <Button variant="outlined">Buy Now</Button>
            </NavLink>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;