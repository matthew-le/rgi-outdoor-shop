import React from "react";
import Header from './components/Layout/Header';
import Gear from './components/Gear/Gear';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header/>
      <main>
        <Gear/>
      </main>
    </React.Fragment>
  );
}

export default App;
