import React from "react";
import Header from './components/Layout/Header';
import Gear from './components/Gear/Gear';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Gear/>
      </main>
    </React.Fragment>
  );
}

export default App;
