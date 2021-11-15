import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Order.css";

const Order = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});

    const {user}=useAuth();

    //single data load from database
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    }, [])

      // react hook form
      const { register, handleSubmit } = useForm();
      const onSubmit = data =>{
          console.log(data);
      }
    return (
        <div>
            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1>{order.name} ${order.price}</h1>
                        <img src={order.img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="order-form">
                            <h2 style={{marginTop:"29px"}}>ORDER NOW</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} value={user?.displayName || ""} />
                                <input {...register("email")} value={user?.email || ""} />
                                <input {...register("city")} placeholder="city" />
                                <input {...register("road")} placeholder="Road no" />
                                <input {...register("phone")} placeholder="Phone no" />
                                <input type="submit" value="Book now" />
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Order;