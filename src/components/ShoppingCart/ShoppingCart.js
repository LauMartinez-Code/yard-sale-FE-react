import { toCurrencyFormat } from '../CommonUtilities.js';
import ProductItem from '../ProductItem/ProductItem.js';
import PRODUCT_LIST from '../../assets/data/ProductList.js';

export default class ShoppingCart extends HTMLElement {

    amount = 0;

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <dialog class="shopping-cart slide-bottom">
                <div class="shopping-cart__container">
                    <form method="dialog">
                        <h1 class="shopping-cart__title title-h1 mb-4">
                            <span>Shopping cart</span>
                            <button type="submit" class="btn-close" title="Close"></button>
                        </h1>
                    </form>
                    
                    <section class="shopping-cart__body"></section>
                    
                    <footer class="shopping-cart__footer">
                        <div class="shopping-cart__amount-card">
                            <span>Total</span>
                            <span class="shopping-cart__amount">$0</span>
                        </div>

                        <button type="button" class="btn btn--primary btn--block">Checkout</button>
                    </footer>
                </div>
            </dialog>
        `;

        //Fixed list of products just as example
        PRODUCT_LIST.forEach( product => {
            this.amount += product.price;
            this.querySelector('.shopping-cart__body').append(
                new ProductItem(product, true)
            );
        });
        
        this.#updateAmount();
        
        this.addEventListener('shopping-cart:removed-product', (e) => this.onRemoveProduct(e));
    }
    
    #updateAmount() {
        this.querySelector('.shopping-cart__amount').textContent = toCurrencyFormat(this.amount);
    }
    
    onRemoveProduct(event) {
        this.amount -= event.srcElement?.price;
        this.#updateAmount();
        event.stopPropagation();
        
        if(this.amount <= 0) {
            const cartBody = this.querySelector('.shopping-cart__body');

            cartBody.classList.add('shopping-cart__body--cart-empty');
            cartBody.insertAdjacentHTML('beforeend', `
                <img class="mb-3" src="./assets/icons/shopping_bag_icon.svg" alt="🛒" width="100">
                <h1 class="title-h2">Shopping cart is empty!</h1>
                <p>The products you add to the cart will be seen here</p>
            `);

            this.querySelector('.shopping-cart__footer').classList.add('d-none');
        }
    }
}