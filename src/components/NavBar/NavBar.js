import ShoppingCart from '../ShoppingCart/ShoppingCart.js';
const navBarCategoryLabelTemplate = (id) => `
    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-all-${id}" checked>
        <span>All</span>
    </label>

    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-clothes-${id}">
        <span>Clothes</span>
    </label>

    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-electro-${id}">
        <span>Electronics</span>
    </label>

    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-furniture-${id}">
        <span>Furniture</span>
    </label>

    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-toys-${id}">
        <span>Toys</span>
    </label>

    <label class="nav-bar__category-label">
        <input type="radio" class="nav-bar__category-option" name="category" id="cat-others-${id}">
        <span>Others</span>
    </label>
`;

export default class NavBar extends HTMLElement {
    #navbarMenu;
    constructor() {
        super();
        this.render();
        this.#navbarMenu = this.querySelector('.nav-bar__menu');
    }
    
    connectedCallback() {
        this.querySelector('.nav-bar__categories').insertAdjacentHTML('afterbegin', navBarCategoryLabelTemplate(1));
        this.querySelector('.nav-bar__menu-title').insertAdjacentHTML('afterend', navBarCategoryLabelTemplate(2));
    }

    render() {
        this.innerHTML = `
            <nav class="nav-bar">
                <button type="button" class="nav-bar__menu-btn btn">
                    <img src="./assets/icons/icon_menu.svg" alt="menu">
                </button>
                
                <div class="nav-bar__section-logo-categories">
                    <a class="nav-bar__link" href="./index.html">
                        <img class="nav-bar__logo" src="./assets/logos/logo_yard_sale.svg" alt="Yard Sale">
                    </a>
                    
                    <form class="nav-bar__categories"></form>
                </div>
            
                <div class="nav-bar__section-email-cart">
                    <div class="dropdown d-none d-initial--lg">
                        <span class="dropdown__title nav-bar__email">example@email.com</span>
                        <button type="button" class="dropdown__btn btn">
                            <img class="dropdown__btn-icon dropdown__btn-icon--sm" src="./assets/icons/arrow.svg" alt=">">
                        </button>
                        <menu class="dropdown__content dropdown__content--slide-bottom">
                            <a href="./my-orders.html" class="dropdown__option link-unstyled">My orders</a>
                            <a href="./my-account.html" class="dropdown__option link-unstyled">My account</a>
                            
                            <hr class="my-3">
            
                            <button type="button" id="navBarSignOutBtnDesktop" class="dropdown__option btn btn--link-primary">
                                Sign out
                            </button>
                        </menu>
                    </div>
                    
                    <button type="button" class="nav-bar__cart-btn btn" title="Shopping cart">
                        <img class="nav-bar__cart-icon" src="./assets/icons/icon_shopping_cart.svg" alt="Cart 🛒">
                    </button>
                </div>
                
            </nav>

            <dialog class="nav-bar__menu slide-right">
                <form class="nav-bar__menu-categories" method="dialog">
                    <button type="submit" class="btn-close" title="Close"></button>
                    <h2 class="nav-bar__menu-title">CATEGORIES</h2>
        
                    <hr class="my-3">
                    
                    <a href="./my-orders.html" class="link-unstyled mb-2">My orders</a>
                    <a href="./my-account.html" class="link-unstyled">My account</a>
                    
                    <section class="nav-bar__menu-section-email">
                        <p class="nav-bar__menu-email">example@email.com</p>
                        <button type="button" id="navBarSignOutBtnMobile" class="btn btn--link-primary nav-bar__menu-sign-out-btn">Sign out</button>
                    </section>
                </form>
            </dialog>
            
            <shopping-cart></shopping-cart>
        `;
        
        this.querySelector('.nav-bar__menu-btn').addEventListener('click', () => this.onClickMenuBtn());
        this.querySelector('.nav-bar__cart-btn').addEventListener('click', () => this.onClickCartBtn());
        this.querySelectorAll('[id^="navBarSignOutBtn"]').forEach(x => x.addEventListener('click', () => this.onClickSignOutBtn()));
        window.matchMedia('(min-width: 992px)').addEventListener('change', (e) => this.onChangeNavbarMenu(e));
    }

    onClickMenuBtn() {
        this.#navbarMenu.showModal();
    }

    onClickCartBtn() {
        const cart = this.querySelector('.shopping-cart');
        
        if (cart.hasAttribute('open')) {
            cart.close();
        }
        else {
            window.scroll(0,0);
            cart.show();
        }
    }

    onClickSignOutBtn() {
        location.href = './login.html';
    }

    onChangeNavbarMenu(event) {
        if (event.matches && this.#navbarMenu.hasAttribute('open')) {
            this.#navbarMenu.close();
        }
    }
}

customElements.define("shopping-cart", ShoppingCart);
customElements.define("nav-bar", NavBar);