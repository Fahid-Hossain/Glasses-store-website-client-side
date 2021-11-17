import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const GlassesAbout = () => {
    return (
        <Box style={{ marginTop: "5rem" }}>
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
                    <img src="https://cdn.pixabay.com/photo/2016/07/28/10/40/sunglasses-1547492_1280.jpg" alt="" width="100%" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default GlassesAbout;