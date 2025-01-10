import NavBar from '@components/NavBar/NavBar.jsx';
import ProductCard from '@components/ProductCard/ProductCard.jsx';
import PRODUCT_LIST from '@assets/data/ProductList.js';

const Home = () => {
    return (
        <>
            <NavBar />
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

export default Home;