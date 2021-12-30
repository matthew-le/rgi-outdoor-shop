import GearSummary from './GearSummary';
import AvailableGear from './AvailableGear';
import React from 'react';


const Gear = () => {
    return <React.Fragment>
        <GearSummary/>
        <AvailableGear/>
    </React.Fragment>
};

export default Gear;