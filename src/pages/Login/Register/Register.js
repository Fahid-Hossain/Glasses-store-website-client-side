import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user,registerUser, isLoading,error } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value); 
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("your password did not match");
            return;
        }
        registerUser(loginData.email, loginData.password);

    }
    return (
        <div>
            <h1 style={{ color: "blue", marginTop: "60px" }}>Register</h1>
            {
                !isLoading && <form onSubmit={handleRegistration}>
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
                    <TextField
                        sx={{ width: "50%", m: 1 }}
                        id="standard-basic"
                        label="Confirm Password"
                        variant="standard"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                    />
                    <Button sx={{ width: "50%", m: 2 }} variant="contained" type="submit">Register</Button>


                </form>
            }

            {
                isLoading && <CircularProgress/>
            }
            {
                user?.email && <Alert severity="success" style={{width:"50%",margin:"0 auto"}}>Your Registration successfully done !</Alert>
            }
            {
                error && <Alert style={{width:"50%",margin:"0 auto"}} severity="error">{error}</Alert>
            }
            <h4>Already Registered ?</h4>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="outlined" type="submit">Please Login</Button>
            </NavLink>
        </div>
    );
};

export default Register;