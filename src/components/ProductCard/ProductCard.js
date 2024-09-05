import { toCurrencyFormat, setTextEllipsis } from '../CommonUtilities.js';
export default class ProductCard extends HTMLElement {
    title;
    price;
    coverSrc;
    isInCart;

    constructor(product) {
        super();
        this.title = product.title;
        this.price = product.price;
        this.coverSrc = product.coverSrc;
        this.isInCart = product.isInCart;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <article class="product-card">
                <figure>
                    <img class="product-card__image" src="${this.coverSrc}" alt="product cover" loading="lazy">
                </figure>
                <div class="product-card__info">
                    <div>
                        <p class="product-card__title"></p>
                        <p class="product-card__price">${toCurrencyFormat(this.price)}</p>
                    </div>
            
                    <button type="button" class="btn product-card__cart-button">
                        <img class="product-card__cart-button-icon" alt="cart icon">
                    </button>
                </div>
            </article>
        `;
        
        setTextEllipsis(this.querySelector('.product-card__title'), this.title);
        this.setCartButton();
        this.querySelector('.product-card__cart-button').addEventListener('click', () => this.onClickCartButton());
        this.isInCart && this.classList.add('product-in-cart');
    }

    setCartButton() {
        if (this.isInCart) {
            this.querySelector('.product-card__cart-button').setAttribute('title', 'Remove from cart');
            this.querySelector('.product-card__cart-button-icon').setAttribute('src', './assets/icons/bt_added_to_cart.svg');
        }
        else {
            this.querySelector('.product-card__cart-button').setAttribute('title', 'Add to cart');
            this.querySelector('.product-card__cart-button-icon').setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        }
    }

    onClickCartButton() {
        this.classList.toggle('product-in-cart');
        this.isInCart = !this.isInCart;
        this.setCartButton();
    }

}

customElements.define("product-card", ProductCard);