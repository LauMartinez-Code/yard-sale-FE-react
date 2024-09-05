//import { useState } from 'react'
//import './App.css'
import ProductCard from './components/ProductCard/ProductCard.js';
import PRODUCT_LIST from './assets/data/ProductList.js';

function App() {

    return (
        <>
            {/* <nav-bar></nav-bar> */}
    
            <div className="container">
                <main className="products-grid">
                    {/* {PRODUCT_LIST.map(product => new ProductCard(product))} */}
                </main>
            </div>
        </>
    )
}

export default App;