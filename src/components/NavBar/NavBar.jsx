import NavBarMenu from './NavBarMenu.jsx';
import NavBarCategoryLabel from './NavBarCategoryLabel.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import './NavBar.css';

const categories = [
    'All', 'Clothes', 'Electronics', 'Furniture', 'Toys', 'Others'
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
                <div className="dropdown d-none d-initial--lg">
                    <span className="dropdown__title nav-bar__email">example@email.com</span>
                    <button type="button" className="dropdown__btn btn">
                        <img className="dropdown__btn-icon dropdown__btn-icon--sm" src="/icons/arrow.svg" alt=">"/>
                    </button>
                    <menu className="dropdown__content dropdown__content--slide-bottom">
                        <a href="./my-orders.html" className="dropdown__option link-unstyled">My orders</a>
                        <a href="./my-account.html" className="dropdown__option link-unstyled">My account</a>
                        
                        <hr className="my-3"/>
        
                        <button type="button" id="navBarSignOutBtnDesktop" 
                            className="dropdown__option btn btn--link-primary"
                            onClick={onClickSignOutBtn}>
                            Sign out
                        </button>
                    </menu>
                </div>
                
                <ShoppingCart/>
            </div>
            
        </nav>
    );
}

export default NavBar;