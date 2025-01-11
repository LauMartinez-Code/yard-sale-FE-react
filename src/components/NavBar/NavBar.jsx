import { Link, useNavigate } from 'react-router';
import NavBarMenu from '@components/NavBar/NavBarMenu.jsx';
import NavBarCategoryLabel from '@components/NavBar/NavBarCategoryLabel.jsx';
import Dropdown from '@components/Dropdown/Dropdown.jsx';
import ShoppingCart from '@components/ShoppingCart/ShoppingCart.jsx';
import './NavBar.css';

const categories = [
    'All', 'Clothes', 'Electronics', 'Furniture', 'Toys', 'Others'
];

const dropdownItems = [
    { link: './orders', text: 'My orders' },
    { link: './account', text: 'My account' }
];

const NavBar = () => {
    const navigate = useNavigate();

    const onClickSignOutBtn = () => navigate('/login');
    
    const getCategoryLabels = (id) => {
        return categories.map(cat =>
            <NavBarCategoryLabel id={id} category={cat} key={cat} />
        )
    }

    return (
        <nav className="nav-bar">
            <NavBarMenu onClickSignOutBtn={onClickSignOutBtn} >
                {getCategoryLabels(1)}
            </NavBarMenu>
            
            <div className="nav-bar__section-logo-categories">
                <Link className="nav-bar__link" to="/">
                    <img className="nav-bar__logo" src="/logos/logo_yard_sale.svg" alt="Yard Sale"/>
                </Link>
                
                <form className="nav-bar__categories">
                    {getCategoryLabels(2)}
                </form>
            </div>
        
            <div className="nav-bar__section-email-cart">
                <Dropdown title="example@email.com" 
                    optionsItems={dropdownItems} 
                    footerOption={{text: 'Sign out', action: onClickSignOutBtn}} />
                
                <ShoppingCart/>
            </div>
            
        </nav>
    );
}

export default NavBar;