// import React from 'react';
import PRODUCT_LIST from '@assets/data/ProductList.js';
import ProductCard from '@components/ProductCard/ProductCard.jsx';


const Home = () => {
    return (
        <div className="container">
            <main className="products-grid">
                {PRODUCT_LIST.map(product => 
                    <ProductCard {...product} key={product.id}/>
                )}
            </main>
        </div>
    )
}

export default Home;