import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name:"Hiking Boots", amount: 1, price: 85.00}].map((item) => <li>{item.name}</li>)}</ul>;

    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>101.82</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    );
};

export default Cart;