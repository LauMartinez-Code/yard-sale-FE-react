import { useState, useRef, useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem.jsx';
import { toCurrencyFormat } from '../CommonUtilities.js';
import PRODUCT_LIST from '../../assets/data/ProductList.js';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const [amount, setAmount] = useState(0);
    const [productList, setProductList] = useState(PRODUCT_LIST); //Fixed list of products as example
    const dialogRef = useRef(null);

    useEffect(() => {
        let totalAmount = 0;
    
        PRODUCT_LIST.forEach( product => {
            totalAmount += product.price;
        });

        setAmount(totalAmount);
    }, []);

    const isCartEmpty = productList.length == 0;
    const cartBodyClassName = 'shopping-cart__body' + (isCartEmpty ? ' shopping-cart__body--cart-empty' : '');
    const cartFooterClassName = 'shopping-cart__footer' + (isCartEmpty ? ' d-none' : '');
    const cartIconBtnSource = `/src/assets/icons/shopping_cart_${isCartEmpty ? 'outline' : 'filled'}.svg`;
    
    const onClickCartBtn = () => {
        if (dialogRef.current.hasAttribute('open')) {
            dialogRef.current.close();
        } else {
            window.scroll(0,0);
            dialogRef.current.show();
        }
    };

    const onRemoveProduct = (id, price) => {
        setProductList(p => p.filter(product => product.id != id));
        setAmount(a => +(a - price).toFixed(2));
    }

    return (
    <>
        <button type="button" className="shopping-cart__cart-btn btn" title="Shopping cart" onClick={onClickCartBtn}>
            <img className="shopping-cart__cart-icon" src={cartIconBtnSource} alt="Cart 🛒"/>
        </button>

        <dialog className="shopping-cart slide-bottom" ref={dialogRef}>
            <div className="shopping-cart__container">
                <form method="dialog">
                    <h1 className="shopping-cart__title title-h1 mb-4">
                        <span>Shopping cart</span>
                        <button type="submit" className="btn-close" title="Close"></button>
                    </h1>
                </form>
        
                <section className={cartBodyClassName}>
                    {
                        productList.map( product => 
                            <ProductItem {...product} isRemovable onRemoveProduct={onRemoveProduct} key={product.id} />
                        )
                    }
                    {
                        isCartEmpty && (
                        <>
                            <img className="mb-3" src="/src/assets/icons/shopping_bag_icon.svg" alt="🛒" width="100" />
                            <h1 className="title-h2">Shopping cart is empty!</h1>
                            <p>The products you add to the cart will be seen here</p>
                        </>
                    )}
                </section>
        
                <footer className={cartFooterClassName}>
                    <div className="shopping-cart__amount-card">
                        <span>Total</span>
                        <span className="shopping-cart__amount">{toCurrencyFormat(amount)}</span>
                    </div>
                    <button type="button" className="btn btn--primary btn--block">Checkout</button>
                </footer>
            </div>
        </dialog>
    </>);
}

export default ShoppingCart;