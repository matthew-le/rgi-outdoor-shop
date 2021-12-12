import classes from './MainHeader.module.css';
import React from 'react';


const MainHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>RGI Outdoors</h1>
        </header>
    );
};


export default MainHeader;