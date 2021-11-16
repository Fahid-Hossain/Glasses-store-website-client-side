import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]= useState("");

    const handleOnBlur = (e)=>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit =(e)=>{
        e.preventDefault();

    }
    return (
        <div style={{marginTop:"5rem"}}>
            <h2 style={{color:"green"}}>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField style={{width: '30rem'}} id="standard-basic" label="Email" variant="standard" type="email" onBlur={handleOnBlur}/>
            </form>
            <Button style={{marginTop:"15px"}} variant="outlined">Submit</Button>
        </div>
    );
};

export default MakeAdmin;