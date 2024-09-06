import { useState } from 'react';
import { toCurrencyFormat, setTextEllipsis } from '../CommonUtilities.js';
import './ProductCard.css';

const ProductCard = ({title, price, coverSrc, isInCart: intialIsInCart}) => {
    const [isInCart, setIsInCart] = useState(intialIsInCart);
    const productCardClassName = 'product-card' + (isInCart ? ' product-in-cart' : '');
    const cartButtonTitle = isInCart ? 'Remove from cart' : 'Add to cart';
    const cartButtonIconSrc = '/src/assets/icons/' + (isInCart ? 'bt_added_to_cart.svg' : 'bt_add_to_cart.svg');

    return (
        <article className={productCardClassName}>
            <figure>
                <img className="product-card__image" src={coverSrc} alt="product cover" loading="lazy"/>
            </figure>
            <div className="product-card__info">
                <div>
                    <p className="product-card__title" title={title}>{setTextEllipsis(title)}</p>
                    <p className="product-card__price">{toCurrencyFormat(price)}</p>
                </div>
        
                <button type="button" 
                    className="btn product-card__cart-button"
                    title={cartButtonTitle}
                    onClick={() => setIsInCart(!isInCart)}>
                    <img className="product-card__cart-button-icon" src={cartButtonIconSrc} alt="cart icon"/>
                </button>
            </div>
        </article>
    )
}

export default ProductCard;