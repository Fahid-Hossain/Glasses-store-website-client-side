import { Button, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import{Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"

const Navbar = () => {
    const {user,logOut}=useAuth();
    return (
        <Nav>
            <NavLink to="/">
            <img src="https://cdn.pixabay.com/photo/2020/03/10/10/39/skull-4918561_1280.png" width="10%" alt="glasses"/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left",marginLeft:"11px", color: "black" }}>
                    CHASMISH
                    </Typography>
            </NavLink>
            <Bars/>
            <NavMenu>
         
            <NavLink style={{textDecoration: "none",color:"black"}} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{textDecoration: "none",color:"black"}} to="/products"><Button color="inherit">Products</Button></NavLink>

                    {
                        user?.email && <NavLink style={{textDecoration: "none",color:"black"}} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                    }

            </NavMenu>
         {
             user?.email ?    <NavBtn onClick={logOut}>
             <NavBtnLink to="/login" style={{color: 'white'}}>Logout</NavBtnLink>
         </NavBtn> :    <NavBtn>
                <NavBtnLink to="/login" style={{color: 'white'}}>Login</NavBtnLink>
            </NavBtn>
         }
        </Nav>
    );
};

export default Navbar;