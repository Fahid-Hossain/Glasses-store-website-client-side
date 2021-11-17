import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    //handle cancel order
    const handleCancel =(id)=>{
        const proceed = window.confirm("Are you sure you want to cancel?");
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
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

    //update status
    const updated = {
        status:"Approved"
    }

    //handle Approve 
    const handleApprove =(id)=>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setDisabled(true);
                alert("This order successfully Approved.")
            })
    }


    return (
            <Box sx={{ flexGrow: 1 }}>
                <h2><i> Manage All Order ({orders.length})</i></h2><hr/>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {orders.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={product?.myorder?.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product?.myorder?.name}
                                        </Typography>
                                        <Typography variant="body2" color="green" style={{fontSize:"16px"}}>
                                       Ordered By: {product?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{fontSize:"16px"}}>
                                            {product?.road},{product?.city}
                                        </Typography>
                                        
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="outlined" onClick={()=>handleCancel(product._id)} size="small" color="primary">
                                        Cancel
                                    </Button>
                                   <Button onClick={()=>handleApprove(product._id)}variant="outlined">Shipped</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
    );
};

export default ManageAllOrder;