import React from "react";
import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>RGI OUTDOORS</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img alt='rgi background logo'/>
        </div>

    </React.Fragment>
};

export default Header;