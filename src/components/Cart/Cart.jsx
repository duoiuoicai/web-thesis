import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmtyCart }) => {
    const classes = useStyles();

    // const isEmty = true;
    
    const EmtyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart, <Link to="/" className={classes.link}>start shopping now</Link>!</Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ))}
        </Grid>

        <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emtyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmtyCart}>Emty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
        </div>
        </>
    );

    if(!cart.line_items) return "Loading cart items...";

    // if(!cart.line_items) return (
    //     <Container>
    //         <Typography className={classes.title} variant="h4">Loading...</Typography>
    //     </Container>
    // );
    // console.log(cart);

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Cart</Typography>
            { !cart.line_items.length ? <EmtyCart /> : <FilledCart/> }
        </Container>
    )
}

export default Cart
