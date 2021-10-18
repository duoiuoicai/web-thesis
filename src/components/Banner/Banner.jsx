import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import logo from "../../assets/duck.png"
import useStyles from "./styles";

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <br/><br/>
                        <Typography className={classes.welcome} variant="h3">
                            Welcome to Duck Shop
                        </Typography>
                        <br/><br/><br/><br/>
                        <Button className={classes.shoppingbutton} href="#products" size="large" type="button" variant="contained" color="primary">
                            Shop Now
                        </Button>
                    </Grid>
                    <Grid className={classes.brand} item sm={6}>
                        <img src={logo} alt="sample" height="400px"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner
