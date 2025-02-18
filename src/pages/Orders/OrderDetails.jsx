import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router';
import OrderItem from '@/components/OrderItem/OrderItem.jsx';
import ProductItem from '@components/ProductItem/ProductItem.jsx';
import orderList from '@utils/data/OrderList.js';
import PRODUCT_LIST from '@utils/data/ProductList.js';

const OrderDetails = () => {
    const { orderId } = useParams();
    const { state } = useLocation();
    const [order, setOrder] = useState(state ? {...state} : null);
    const [productList, setProductList] = useState([]);
    
    // If the order is not in the state, find it in the orderList. E.g. when the user updates the :orderId in the URL
    useEffect(() => {
        if (!state) {
            const data = orderList.find(order => order.orderID == orderId);
            
            if (!data) {
                throw new Error('Order not found');
            }

            setOrder(data);
        }
    }, []);

    // Get the products from the order
    useEffect(() => {
        if (order) {
            const products = order.itemsID.map(itemId => {
                return PRODUCT_LIST.find(prod => prod.id == itemId);
            });
            
            setProductList(products);
        }
    }, [order]);
    
    return (
        <>
            <h1 className="title-h1 mb-4">
                <Link to="/orders" className="btn p-0 me-2" title="Back" >
                    <img src="/icons/arrow.svg" alt=">" className="title-h1__back-btn" />
                </Link>
                <span>Order #{orderId}</span>
            </h1>
            {order &&
                <section>
                    <OrderItem {...order} />
                    {productList.map( product => 
                        <ProductItem {...product} key={product.id} />
                    )}
                </section>
            }
        </>
    )
}

export default OrderDetails;