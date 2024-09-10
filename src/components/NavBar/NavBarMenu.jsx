/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const NavBarMenu = ({ children, onClickSignOutBtn }) => {

    const dialogRef = useRef(null);

    useEffect(() => {
        const onChangeNavBarMenu = (event) => {
            if (event.matches && dialogRef.current.hasAttribute('open')) {
                dialogRef.current.close();
            }
        }

        window.matchMedia('(min-width: 992px)').addEventListener('change', (e) => onChangeNavBarMenu(e));
        
        return () => {
            window.removeEventListener('change', onChangeNavBarMenu);
        };
    }, []);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    return (
    <>
        <button type="button" className="nav-bar__menu-btn btn" onClick={openDialog}>
            <img src="/src/assets/icons/icon_menu.svg" alt="menu"/>
        </button>

        <dialog className="nav-bar__menu slide-right" ref={dialogRef}>
            <form className="nav-bar__menu-categories" method="dialog">
                
                <button type="submit" className="btn-close" title="Close"></button>
                <h2 className="nav-bar__menu-title">CATEGORIES</h2>

                {children}

                <hr className="my-3"/>
        
                <a href="./my-orders.html" className="link-unstyled mb-2">My orders</a>
                <a href="./my-account.html" className="link-unstyled">My account</a>
        
                <section className="nav-bar__menu-section-email">
                    <p className="nav-bar__menu-email">example@email.com</p>
                    <button type="button" id="navBarSignOutBtnMobile"
                        className="btn btn--link-primary nav-bar__menu-sign-out-btn"
                        onClick={onClickSignOutBtn}>
                            Sign out
                    </button>
                </section>
            </form>
        </dialog>
    </>);
}

export default NavBarMenu;