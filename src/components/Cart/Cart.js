import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const CartPage = ({ onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const cart = useSelector((state) => state.cart);
    const classes = useStyles(); // Вставьте вашу функцию стилей useStyles из старого кода

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart,
            <Link className={classes.link} to="/">
                start adding some
            </Link>
            !
        </Typography>
    );

    const renderCart = () => (
        <>
            <Grid container spacing={4}>
                {cart.items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        {/*
              Здесь вам нужно передать функции onUpdateCartQty и onRemoveFromCart
              из пропсов, так как они используются внутри CartItem.
            */}
                        <CartItem
                            item={lineItem}
                            onUpdateCartQty={onUpdateCartQty}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">
                    Subtotal: <b>{cart.subtotal.formatted_with_symbol}</b>
                </Typography>
                <div>
                    <Button
                        className='emptyButton'
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >
                        Empty cart
                    </Button>
                    <Button
                        className='checkoutButton'
                        component={Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className={classes.toolbar} />
            <div className={classes.title} variant="h5" gutterBottom>
                <b>Your Shopping Cart</b>
            </div>
            <hr />
            {cart.items.length === 0 ? renderEmptyCart() : renderCart()}
        </>
    );
};

export default CartPage;





