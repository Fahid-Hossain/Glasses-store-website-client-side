import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AddProducts from '../../Products/AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const { logOut, admin } = useAuth();

    //nesting route 
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {/* //nesting navlink */}
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/products"><Button color="inherit">Products</Button></NavLink> <br />


            {
                !admin && <Box> <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}`}><Button color="inherit">My Order</Button></NavLink> <br />
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/payment`}><Button color="inherit">Payment</Button></NavLink> <br />
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/review`}><Button color="inherit">Review</Button></NavLink><br /></Box>
            }



            {
                admin && <Box> <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/addproduct`}><Button color="inherit">Add_Product</Button></NavLink><br />
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/makeadmin`}><Button color="inherit">Make_Admin</Button></NavLink><br/>
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/manageallorder`}><Button color="inherit">Manage-All-Order</Button></NavLink><br/>
                    <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/manageproducts`}><Button color="inherit">Manage-Products</Button></NavLink><br/>

                    </Box>
            }

            <br />
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/login"><Button onClick={logOut} color="inherit">Logout</Button></NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProducts />
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageallorder`}>
                        <ManageAllOrder />
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
