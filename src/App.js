import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Gear from './components/Gear/Gear';
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Gear />
      </main>
    </Fragment>
  );
};

export default App;
