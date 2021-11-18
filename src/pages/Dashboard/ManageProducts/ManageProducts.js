import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://thawing-lake-33684.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    //handle Delete Product
    const handleDelete =(id)=>{
        const proceed = window.confirm("Are you sure you want to Delete?");
        if(proceed){
            const url = `https://thawing-lake-33684.herokuapp.com/products/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert("Successfully Deleted")
                    const remaining = products.filter(product=>product._id !==id);
                    setProducts(remaining);
                }
            })
        }
    }
    return (
            <Box sx={{ flexGrow: 1 }}>
                <h2><i>Manage All Products ({products.length})</i></h2><hr />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {
                        products.map(product => <Grid item xs={12} sm={6} md={4} key={product._id}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product?.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product?.name} <br />
                                            ${product?.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {product?.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="outlined"onClick={()=>handleDelete(product._id)} color="secondary">
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Box>
    );
};

export default ManageProducts;