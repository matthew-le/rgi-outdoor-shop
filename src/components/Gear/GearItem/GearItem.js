import classes from './GearItem.module.css';
import GearItemForm from './GearItemForm';

const GearItem = props => {
    const price=`$${props.price.toFixed(2)}`;

    return <li className={classes.gear}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <GearItemForm id={props.id}/>
        </div>
    </li>
};

export default GearItem;