import classes from './AvailableGear.module.css';
import Card from '../UI/Card';
import GearItem from './GearItem/GearItem';

const DUMMY_GEAR = [
    {
      id: 'm1',
      name: 'Fishing Pole',
      description: 'One Piece Deep Sea Rig',
      price: 102.99,
    },
    {
      id: 'm2',
      name: 'RGI Light',
      description: 'Outdoor Camping Light',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'MRE',
      description: 'American, raw, meaty, ready to go meals',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Coleman two-burner',
      description: 'Cooking Stove',
      price: 38.99,
    },
  ];

const AvailableGear = () => {
    const gearList = DUMMY_GEAR.map(gear => <GearItem key={gear.id} name={gear.name} description={gear.description} price={gear.price}/> );
    return <section className={classes.gear}>
        <Card>
            {gearList}
        </Card>
    </section>
};

export default AvailableGear;