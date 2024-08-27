import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';

export const MyContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isopenNavigation, setIsopenNavigation] = useState(false);

  const signOut = () => {
    setIsLogin(false);
  };

  const contextValue = {
    cartItems,
    setCartItems,
    isLogin,
    setIsLogin,
    isopenNavigation,
    setIsopenNavigation,
    signOut,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        <Header />
      </div>
    </MyContext.Provider>
  );
}

export default App;
