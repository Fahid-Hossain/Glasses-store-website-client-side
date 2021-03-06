import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import Rating from 'react-rating';

const ReviewShow = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = React.useState([]);
    React.useEffect(() => {
        fetch("https://thawing-lake-33684.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <Box style={{ marginTop: "5rem" }}>
            <h1 style={{ marginBottom: "" }}>What people Say to About Our Products</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src="https://img.freepik.com/free-photo/beautiful-thinking-blonde-business-woman-isolated-white-wall_231208-9740.jpg?size=626&ext=jpg&ga=GA1.2.1475832121.1648969905" alt="" width="95%" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                            {
                                reviews.map(review => <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={user?.img} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={review.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    I take {
                                                        review.productName
                                                    }<br />
                                                </Typography>
                                                {review.description}<br />
                                                <Rating
                                                    initialRating={review.rating}
                                                    readonly
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    style={{color:"gold"}}


                                                />
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>)
                            }
                            <Divider variant="inset" component="li" />

                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReviewShow;