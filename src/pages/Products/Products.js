import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Products = () => {
    //load product from database
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
  
    return (
        <Box sx={{ flexGrow: 1,marginTop:"21px" }}>
            <h1>NEW ARRIVALCHASMISH</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {products.map((product, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
            <img src={product.img} alt="" width="100%"/>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Button variant="outlined">Buy Now</Button>

            </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default Products;