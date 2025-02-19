import orderList from '@utils/data/OrderList.js';
import OrderItem from '@components/OrderItem/OrderItem.jsx';
import MainTitle from '@components/MainTitle/MainTitle';

const Orders = () => {

    return (
        <>
            <MainTitle className="mb-4">My orders</MainTitle>
            <section>
                {orderList.map(order => (
                    <OrderItem key={order.orderID} {...order} showDetailsBtn />
                ))}
            </section>
        </>
    )
}

export default Orders;