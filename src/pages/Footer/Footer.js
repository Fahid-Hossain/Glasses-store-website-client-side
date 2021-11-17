import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '69vh',
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} style={{margin:"auto"}}>
                            <Typography variant="body1">
                                Chasmish Glasses Store
                            </Typography>
                            <Copyright />
                        </Grid>
                        <Grid item xs={12} md={6} style={{margin:"auto"}}>
                           <Typography variant="body1">
                           <b>Get to Touch</b>
                            </Typography>
                           <Typography variant="body1">
                                Bijoy-Sharoni 45/7 b,Elephant Road,Dhaka
                            </Typography>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Box>
    );
};

export default Footer;