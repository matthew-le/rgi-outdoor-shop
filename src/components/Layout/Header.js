import React from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

import mountainImage from '../../assets/mountains.jpg';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>RGI OUTDOORS</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mountainImage} alt='rgi background logo'/>
        </div>

    </React.Fragment>
};

export default Header;