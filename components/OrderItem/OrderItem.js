//import orderList from '../../assets/data/OrderList';
import { toCurrencyFormat } from '../CommonUtilities.js';
export default class OrderItem extends HTMLElement {
    orderID;
    date;
    amount;
    items;
    itemsID;

    /** 
     * @param isForOrderDetail - Represents a copy of an OrderItem that's showing from #OrderDetail
     * and it has a different background-color but it hasn't a "See details" button.
     *  */
    constructor(order, isForOrderDetail = false) {
        super();
        this.orderID = order.orderID;
        this.date = order.date;
        this.amount = order.amount;
        this.items = order.items;
        this.itemsID = order.itemsID;
        this.render(isForOrderDetail);
    }

render(isForOrderDetail) {
        this.innerHTML = `
            <article class="order-item">
                <div>
                    <p class="order-item__date">${this.date}</p>
                    <p>
                        <small class="order-item__quantity">${this.items} article${this.items > 1 ? 's' : ''}</small>
                    </p>
                </div>
                <div>
                    <span class="order-item__amount">${toCurrencyFormat(this.amount)}</span>
                    <button type="button" class="order-item__btn-details btn p-0" title="See details">
                        <img src="./assets/icons/arrow.svg" alt=">" class="order-item__btn-details-icon">
                    </button>
                </div>
            </article>
        `;

        if (isForOrderDetail) {
            this.querySelector('button').remove();
            this.querySelector('.order-item').style.backgroundColor = 'var(--text-input-field)';
            document.querySelector('main-title').setAttribute('title-text', `Order #${this.orderID}`) ;
            document.querySelector('main-title').setOnClickBtnEvent(this.onClickMainTitleCallback.bind(this));
            //add product list
        }
        else {
            this.querySelector('button').addEventListener('click', () => this.onClickDetailsBtn());
        }
    }
    
    onClickDetailsBtn() {
        document.getElementById('OrderList').classList.add('d-none');
        document.getElementById('OrderDetail').classList.toggle('d-none');
        document.getElementById('OrderDetail').append(new OrderItem(this, true));
    }
    
    onClickMainTitleCallback() {
        document.getElementById('OrderList').classList.toggle('d-none');
        document.getElementById('OrderDetail').classList.toggle('d-none');
        document.querySelector('main-title').onChangeTitle();
        document.querySelector('main-title button').classList.add('d-none');
        this.remove();
    }

}

customElements.define("order-item", OrderItem);