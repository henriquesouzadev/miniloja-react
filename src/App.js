import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { GlobalCart } from './Context/CartContext'

function App() {

  return (
    <div className="App">
      <GlobalCart>
        <Header />
        <Home />
        <Footer />
      </GlobalCart>
    </div >
  );

}
export default App;
