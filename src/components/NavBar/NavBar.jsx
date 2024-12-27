import NavBarMenu from '@components/NavBar/NavBarMenu.jsx';
import NavBarCategoryLabel from '@components/NavBar/NavBarCategoryLabel.jsx';
import Dropdown from '@components/Dropdown/Dropdown.jsx';
import ShoppingCart from '@components/ShoppingCart/ShoppingCart.jsx';
import './NavBar.css';

const categories = [
    'All', 'Clothes', 'Electronics', 'Furniture', 'Toys', 'Others'
];

const dropdownItems = [
    { link: './my-orders.html', text: 'My orders' },
    { link: './my-account.html', text: 'My account' }
];

const NavBar = () => {

    const onClickSignOutBtn = () => location.href = './login.html';
    
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
                <a className="nav-bar__link" href="/">
                    <img className="nav-bar__logo" src="/logos/logo_yard_sale.svg" alt="Yard Sale"/>
                </a>
                
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