import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useAuth from "../../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";


const navigationLinks = [
    { name: "Home", to: "home" },
    { name: "Products", to: "products" },
    { name: "Dashboard", to: "Dashboard" },
    { name: "Login", to: "/login" },
];

// user check an conditon  

const navigationLinks2 = [
    { name: "Home", to: "/home" },
    { name: "Products", to: "/products" },
    { name: "Dashboard", to: "/Dashboard" },
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: "auto",
        color: "white",
        backgroundColor: "black",
        borderRadius: 0,
        height: 30,
        fontSize:"12px",
        border: "2px solid gray",
        borderLeft: "12px solid transparent",
        borderRight: "12px solid transparent",
        paddingLeft:"27px",
        paddingRight:"27px"
    },
}));

const Navbar = () => {
    const { user, logOut } = useAuth();
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky" color="default">
            <Container maxWidth="md">
                <ToolBar disableGutters>
                    <Avatar className={styles.avatar}>Eye_Care</Avatar>
                    

                    {/*-------------- //user check an conditon for Logout -------------*/}
                    {
                        user?.email ? <Hidden xsDown>
                            {navigationLinks2.map((item) => (
                                <NavLink
                                    className={styles.link}
                                    color="textPrimary"
                                    variant="Button"
                                    underline="none"
                                    to={item.to}
                                    key={item.name}
                                >
                                    {item.name}

                                </NavLink>


                            ))
                            }
                            <Button variant='contained' color='secondary' onClick={logOut}>logOut</Button>
                            <span style={{ marginLeft: "1rem", color: "rgb(235 111 82)", fontWeight: "bold" }}>{user?.displayName}</span>
                        </Hidden> : <Hidden xsDown>
                            {navigationLinks.map((item) => (
                                <NavLink
                                    className={styles.link}
                                    color="textPrimary"
                                    variant="button"
                                    underline="none"
                                    to={item.to}
                                    key={item.name}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </Hidden>
                    }

                    <Hidden smUp>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </ToolBar>
            </Container>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <div
                    onClick={() => setOpen(false)}
                    onKeyPress={() => setOpen(false)}
                    role="button"
                    tabIndex={0}
                >
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                {
                    user?.email ? <List>
                        {navigationLinks2.map((item) => (
                            <ListItem key={item.name}>
                                <NavLink
                                    className={styles.link}
                                    color="textPrimary"
                                    variant="button"
                                    underline="none"
                                    to={item.to}
                                >
                                    {item.name}
                                </NavLink>

                            </ListItem>
                        ))}
                        <Button style={{ marginLeft:"1rem" }}variant='contained' color='secondary' onClick={logOut}>logOut</Button>
                        <div style={{ marginTop: "1rem",marginLeft:"1rem", color: "rgb(235 111 82)", fontWeight: "bold" }}>{user?.displayName}</div>
                    </List> : <List>
                        {navigationLinks.map((item) => (
                            <ListItem key={item.name}>
                                <NavLink
                                    className={styles.link}
                                    color="textPrimary"
                                    variant="button"
                                    underline="none"
                                    to={item.to}
                                >
                                    {item.name}
                                </NavLink>

                            </ListItem>
                        ))}
                    </List>
                }

            </SwipeableDrawer>
        </AppBar>
    );
};

export default Navbar;