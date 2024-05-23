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
    }
}