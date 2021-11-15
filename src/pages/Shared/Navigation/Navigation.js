import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default">
               <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://image.freepik.com/free-photo/sunglasses_1203-7886.jpg" width="5%" alt="glasses"/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left",marginLeft:"11px" }}>
                    CHASMISH
                    </Typography>

                    <NavLink style={{textDecoration: "none",color:"black"}} to="/addproduct"><Button color="inherit">Add Product</Button></NavLink>
                    <NavLink style={{textDecoration: "none",color:"black"}} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{textDecoration: "none",color:"black"}} to="/products"><Button color="inherit">Products</Button></NavLink>

                   {
                       user?.email ?  <NavLink style={{textDecoration: "none",color:"black"}} to="/login"><Button onClick={logOut} color="inherit">Logout</Button></NavLink> :  <NavLink style={{textDecoration: "none",color:"black"}} to="/login"><Button color="inherit">Login</Button></NavLink>
                   }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;