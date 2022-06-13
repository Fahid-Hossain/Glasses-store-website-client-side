import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const GlassesAbout = () => {
    return (
        <Box style={{ marginTop: "5rem"}}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 218,
                                height: 128,
                            },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Paper elevation={1}>
                            <h4>01.Search Your Chasmish</h4>
                            <p>What are you looking for check out here..</p>
                        </Paper>
                        <Paper />
                        <Paper elevation={0}>
                            <h4>02.Customize Your Chasmish</h4>
                            <p>You can customize of your own choice..</p>
                        </Paper>
                        <Paper />
                        <Paper elevation={0}>
                            <p>It's very simple & easy</p>
                            <h3>BUY OUR PRODUCTS VERY SIMPLE WAY</h3>
                        </Paper>
                        <Paper />
                        <Paper elevation={3}>
                            <h4>03.Quickly checkout</h4>
                            <p>We provide quick checkout Service..</p>
                            </Paper>
                        <Paper elevation={3}/>
                        <Paper elevation={3} >
                            <h4>04.Receive your chasmish</h4>
                            <p>Receive your chasmish without any charge..</p>
                            </Paper>
                        <Paper elevation={3}>
                            <p>It's WODIS</p>
                            <h3>STYLISH & BEAUTY CHASMISH</h3>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src="https://img.freepik.com/free-photo/smiling-blonde-business-woman-eyeglasses-pointing-away_171337-6307.jpg?t=st=1655120608~exp=1655121208~hmac=91d9be84c2b59fdbe6817308f4d08e99b174402abbc9991217dd882a5154f702&w=996" alt="" width="100%" />
                <h1>Let's style is your own Way</h1>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GlassesAbout;