import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://thawing-lake-33684.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    const myorder = orders.filter(td=>td.email === user.email);

    //handle cancel order
    const handleCancel =(id)=>{
        const proceed = window.confirm("Are you sure you want to cancel?");
        if(proceed){
            const url = `https://thawing-lake-33684.herokuapp.com/orders/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert("Successfully Canceled")
                    const remaining = orders.filter(order=>order._id !==id);
                    setOrders(remaining);
                }
            })
        }
    }


    return (
            <Box sx={{ flexGrow: 1 }}>
                <h2><i>My Orders ({myorder.length})</i></h2><hr/>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {myorder.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product?.myorder?.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product?.myorder?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {product?.myorder?.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={()=>handleCancel(product._id)} size="small" color="primary">
                                        Cancel
                                    </Button>
                                    <span style={{color:"blue",marginLeft:"6rem"}}>status: {product?.status?.status}</span>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
    );
};

export default MyOrders;