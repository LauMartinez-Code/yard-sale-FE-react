import { toCurrencyFormat } from '../CommonUtilities.js';
export default class OrderItem extends HTMLElement {
    orderID;
    date;
    amount;
    items;
    constructor(order) {
        super();
        this.orderID = order.orderID;
        this.date = order.date;
        this.amount = order.amount;
        this.items = order.items;
        this.render();
    }

    render() {
        this.innerHTML = `
            <article class="order-item">
                <div class="order-item__info">
                    <p class="order-item__date">${this.date}</p>
                    <p>
                        <small class="order-item__quantity">${this.items} article${this.items > 1 ? 's' : ''}</small>
                    </p>
                </div>
                <div>
                    <span class="order-item__amount">${toCurrencyFormat(this.amount)}</span>
                    <button type="button" class="btn p-0" title="See details">
                        <img src="./assets/icons/arrow.svg" alt=">" class="order-item__btn-icon">
                    </button>
                </div>
            </article>
        `;

        this.querySelector('button').addEventListener('click', () => this.onClickDetailsBtn());
    }

    onClickDetailsBtn() {
        document.getElementById('OrderList').classList.add('d-none');
        document.getElementById('OrderDetail').classList.toggle('d-none');
    }
}

customElements.define("order-item", OrderItem);