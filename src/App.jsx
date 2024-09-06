import ProductCard from './components/ProductCard/ProductCard.jsx';
import PRODUCT_LIST from './assets/data/ProductList.js';
import './base-styles.css';
// import NavBar from './components/NavBar/NavBar.jsx';

function App() {

    return (
        <>
            {/* <NavBar/> */}
    
            <div className="container">
                <main className="products-grid">
                    {PRODUCT_LIST.map(product => 
                        <ProductCard {...product} key={product.id}/>
                    )}
                </main>
            </div>
        </>
    )
}

export default App;