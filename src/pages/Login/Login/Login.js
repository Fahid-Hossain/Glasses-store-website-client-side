import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    const [loginData,setLoginData] =useState({})

    const handleOnBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = (e) => {
       e.preventDefault();
       alert("submitting")
    }
    return (
        <div>
            <h1 style={{ color: "blue", marginTop: "60px" }}>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    variant="standard"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                />
                <Button sx={{ width: "50%", m: 2 }} variant="contained" type="submit">Login</Button>

            </form>
        </div>
    );
};

export default Login;