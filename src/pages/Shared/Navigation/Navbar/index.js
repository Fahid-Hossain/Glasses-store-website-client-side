import React from "react"
import { MaterialUINav } from "material-ui-responsive-nav"
// import useAuth from '../../../../hooks/useAuth';
// import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
// import { Button, Typography } from "@material-ui/core";

const Navbar = ({ children }) => {
    // const { user, logOut } = useAuth();

    // let links = {
    //     internal: [
    //         {
    //             label: "Home",
    //             link: "/",
    //         },
    //         {
    //             label: "Products",
    //             link: "/products",
    //         },
    //         {
    //             label: "Login",
    //             link: "/login",
    //         },
            
    //     ]
    // }
    let linksLogin = {
        internal: [
            {
                label: "Home",
                link: "/",
            },
            {
                label: "Products",
                link: "products",
            },
            {
                label: "Dashboard",
                link: "/dashboard",
            },
            {
                label: "Login",
                link: "/login",
            },
            
        ]
    }

    return (
        <>
            {/* ---------------------- */}
                    <MaterialUINav
                        global={{
                            siteTitle: "CHASMISH",
                            mobileBreakpoint: "xs",
                        }}
                        navbarConfig={{
                            elevate: false,
                        }}
                        mobileMenuConfig={{
                            slideTransition: true,
                        }}

                        // links={links}
                        links={linksLogin}
                        />
                    {children}


                 
                {/* {
                    user?.email ? <NavBtn onClick={logOut}>
                        <NavBtnLink to="/login" style={{ color: 'white' }}>Logout</NavBtnLink>
                    </NavBtn> : <NavBtn>
                        <NavBtnLink to="/login" style={{ color: 'white' }}>Login</NavBtnLink>
                    </NavBtn>
                } */}
                {/* ---------------------- */}


        </>

    )
}
export default Navbar;