import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user}= useAuth();
    const [success,setSuccess]=useState(false);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch("http://localhost:5000/reviews",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                setSuccess(true);
                reset();
            }
        })

    }
    return (
        <div className="add-product">
        <h1 style={{color: 'green'}}>Add your Review on our products </h1>
        {
            success && <Alert severity="success" style={{ width: "50%", margin: "0 auto" }}>Thanks for your valuable feedback !</Alert>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
        <input value={user?.displayName || ""} {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="Products Name" {...register("productName", { required: true, maxLength: 20 })} />
            <textarea placeholder="Add your experience" {...register("description")} />
            <input placeholder="Rating" {...register("rating")} />
            <input type="submit" />
        </form>
    </div>
    );
};

export default Review;