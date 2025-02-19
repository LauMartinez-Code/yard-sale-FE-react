import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import OrderItem from '@/components/OrderItem/OrderItem.jsx';
import ProductItem from '@components/ProductItem/ProductItem.jsx';
import orderList from '@utils/data/OrderList.js';
import PRODUCT_LIST from '@utils/data/ProductList.js';
import MainTitle from '@components/MainTitle/MainTitle.jsx';

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
            <MainTitle className="mb-4" linkBackTo="/orders">
                Order #{orderId}
            </MainTitle>
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