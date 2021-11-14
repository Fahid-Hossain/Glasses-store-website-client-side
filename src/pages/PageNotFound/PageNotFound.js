import { Button } from '@mui/material';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1 style={{color:"red",marginTop:"120px"}}>404</h1>
            <h1>Page Not Found</h1>
            <NavLink style={{textDecoration: "none"}} to="/home"><Button variant="outlined">Go Back Home</Button></NavLink>
        </div>
    );
};

export default PageNotFound;