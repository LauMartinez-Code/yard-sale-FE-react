import { Link } from 'react-router';
import { toCurrencyFormat } from '@components/CommonUtilities.js';
import '@components/OrderItem/OrderItem.css';

const OrderItem = ({orderID, date, amount, itemsID, showDetailsBtn = false}) => {
    
    const orderItemClassName = `order-item${showDetailsBtn ? '' : ' order-item--grey'}`;

    return (
        <article className={orderItemClassName}>
            <div>
                <p className="order-item__date">{date}</p>
                <p>
                    <small className="order-item__quantity">
                        {itemsID.length} article{itemsID.length > 1 && 's'}
                    </small>
                </p>
            </div>
            <div>
                <span className="order-item__amount">{toCurrencyFormat(amount)}</span>
                {showDetailsBtn &&
                    <Link to={`./${orderID}`} className="order-item__btn-details btn p-0"
                        title="See details"
                        state={{orderID, date, amount, itemsID}}>
                        <img src="/icons/arrow.svg" alt=">" className="order-item__btn-details-icon" />
                    </Link>
                }
            </div>
        </article>
    )
}

export default OrderItem;