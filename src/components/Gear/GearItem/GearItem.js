import { useContext } from 'react';

import classes from './GearItem.module.css';
import GearItemForm from './GearItemForm';
import CartContext from '../../../store/cart-context';

const GearItem = props => {
    const cartCtx = useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <li className={classes.gear}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <GearItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
};

export default GearItem;