import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button, CircularProgress } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, error, isLoading } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData?.email, loginData?.password);
        e.preventDefault();
    }
    return (
        <div>
            <h1 style={{ color: "blue", marginTop: "60px" }}>Login</h1>
            {
                !isLoading && <form onSubmit={handleLoginSubmit}>
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
            }

            {
                isLoading && <CircularProgress />
            }
            {
                user?.email && <Alert severity="success" style={{ width: "50%", margin: "0 auto" }}>Logged in successfully !</Alert>
            }
            {
                error && <Alert style={{ width: "50%", margin: "0 auto" }} severity="error">{error}</Alert>
            }


            <h4>New User ?</h4>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outlined" type="submit">Please Register</Button>
            </NavLink>
        </div>
    );
};

export default Login;