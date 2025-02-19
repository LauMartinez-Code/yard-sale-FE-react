import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from 'react-router';

const OrdersLayout = () => {
    return (
        <>
            <NavBar />
            <main className="container container-md mx-auto--md">
                <Outlet />
            </main>
        </>
    )
}

export default OrdersLayout;