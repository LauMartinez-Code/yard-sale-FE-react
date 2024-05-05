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
                    <a class="nav-bar__link" href="/index.html">
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
                            <a href="#" class="dropdown__option link-unstyled">My orders</a>
                            <a href="./my-account.html" class="dropdown__option link-unstyled">My account</a>
                            
                            <hr class="my-3">
            
                            <button type="button" class="dropdown__option btn btn--link-primary">
                                Sign out
                            </button>
                        </menu>
                    </div>
                    
                    <button type="button" class="nav-bar__cart-btn btn">
                        <img class="nav-bar__cart-icon" src="./assets/icons/icon_shopping_cart.svg" alt="Cart 🛒">
                    </button>
                </div>
                
                <dialog class="nav-bar__menu slide-right">
                    <form class="nav-bar__menu-categories" method="dialog">
                        <button type="submit" class="btn-close" title="Close"></button>
                        <h2 class="nav-bar__menu-title">CATEGORIES</h2>
            
                        <hr class="my-3">
                        
                        <a href="#" class="link-unstyled mb-2">My orders</a>
                        <a href="./my-account.html" class="link-unstyled">My account</a>
                        
                        <section class="nav-bar__menu-section-email">
                            <p class="nav-bar__menu-email">example@email.com</p>
                            <button type="button" class="btn btn--link-primary nav-bar__sign-out-btn">Sign out</button>
                        </section>
                    </form>
                </dialog>
            </nav>
        `;
        
        this.querySelector('.nav-bar__menu-btn').addEventListener('click', () => this.onClickMenuBtn());
        window.matchMedia('(min-width: 992px)').addEventListener('change', (e) => this.onChangeNavbarMenu(e));
    }

    onClickMenuBtn() {
        this.#navbarMenu.showModal();
    }

    onChangeNavbarMenu(event) {
        if (event.matches && this.#navbarMenu.hasAttribute('open')) {
            this.#navbarMenu.close();
        }
    }
}

customElements.define("nav-bar", NavBar);