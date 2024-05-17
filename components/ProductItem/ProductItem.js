import { toCurrencyFormat, setTextEllipsis } from '../CommonUtilities.js';

export default class ProductItem extends HTMLElement {
    id;
    title;
    price;
    imgSrc;

    /**
     * @param isRemovable - If `true`, it shows a button to remove the item from the list
     **/
    constructor(product, isRemovable = false) {
        super();
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.imgSrc = product.coverSrc;
        this.render(isRemovable);
    }

    render(isRemovable) {
        this.innerHTML = `
            <article class="product-item">
                <img class="product-item__image" src="${this.imgSrc}" />
                <p class="product-item__title"></p>

                <div class="product-item__price">
                    <span>${toCurrencyFormat(this.price)}</span>
                </div>
            </article>
        `;

        setTextEllipsis(this.querySelector('.product-item__title'), this.title);

        if (isRemovable) {
            this.querySelector('.product-item__price').insertAdjacentHTML('beforeend',`
                <button type="button" class="btn-close btn-close--grey btn-close--thin" title="Remove product"></button>
            `);
            this.querySelector('button').addEventListener('click', () => this.onClickRemoveBtn());
        }

    }

    onClickRemoveBtn() {
        this.remove();
        //TODO actualizar precio carrito
    }
}

customElements.define("product-item", ProductItem);