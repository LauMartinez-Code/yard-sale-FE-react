import orderList from '@utils/data/OrderList.js';
import OrderItem from '@components/OrderItem/OrderItem.jsx';

const Orders = () => {

    return (
        <>
            <h1 className="title-h1 mb-4">My orders</h1>
            <section>
                {orderList.map(order => (
                    <OrderItem key={order.orderID} {...order} showDetailsBtn />
                ))}
            </section>
        </>
    )
}

export default Orders;