import { ResetTv } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css"


const AddProducts = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        //post api via axios
        axios.post("http://localhost:5000/products",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Successfully added product");
                reset();
            }
        })

    }
    return (
        <div className="add-product">
            <h1 className="my-5 fw-bold">ADD A PRODUCT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Products Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="short description" {...register("description")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input placeholder="img url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;