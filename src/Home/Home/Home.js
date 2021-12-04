import React from 'react';
import Canvas from './Canvas/Canvas/Canvas';
import Header from './Header/Header';
import HeaderSearch from './Header/HeaderSearch/HeaderSearch';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            
            <Header ></Header>
            
            <HeaderSearch></HeaderSearch>
            <Canvas></Canvas>
         
            
           
        </div>
    );
};

export default Home;