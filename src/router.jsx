
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import AuthLayout from '@/layouts/AuthLayout.jsx';
import OrdersLayout from '@/layouts/OrdersLayout.jsx';
import Home from '@/pages/Home/Home.jsx';
import Account from '@/pages/Account/Account.jsx';
import Orders from '@/pages/Orders/Orders.jsx';
import Login from '@/pages/Auth/Login/Login.jsx';
import CreateAccount from '@/pages/Auth/CreateAccount/CreateAccount.jsx';
import PasswordRecovery from '@/pages/Auth/PasswordRecovery/PasswordRecovery.jsx';
import PassRecoveryEmailSent from '@/pages/Auth/PasswordRecovery/PassRecoveryEmailSent/PassRecoveryEmailSent.jsx';
import CreatePassword from '@/pages/Auth/CreatePassword/CreatePassword.jsx';
import PageNotFound from '@/pages/error/PageNotFound/PageNotFound.jsx';
import OrderDetails from './pages/Orders/OrderDetails.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='account' element={<Account />} />
            <Route path='orders' element={<OrdersLayout />}>
                <Route index element={<Orders />} />
                <Route path=':orderId' element={<OrderDetails/>} errorElement={<h1>Order not found</h1>} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='create-account' element={<CreateAccount />} />
                <Route path='password-recovery'>
                    <Route index element={<PasswordRecovery />} />
                    <Route path='email-sent' element={<PassRecoveryEmailSent />} />
                </Route>
                <Route path='create-password' element={<CreatePassword />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Route>
    )
);

export default router;