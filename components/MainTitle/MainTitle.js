
export default class MainTitle extends HTMLElement {
    initialTitle;
    title;
    constructor(title = null) {
        super();
        this.initialTitle = title ?? this.getAttribute('title-text');
        this.title = this.initialTitle;
        this.render();
    }

    static get observedAttributes() {
        return ['title-text'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.onChangeTitle(newValue);
    }

    render() {
        this.innerHTML = `
            <h1 class="title-h1 mb-4">
                <button type="button" class="btn p-0 me-1 d-none" title="Back">
                    <img src="./assets/icons/arrow.svg" alt=">" class="title-h1__back-btn">
                </button>
                <span>${this.title}</span>
            </h1>
        `;
    }

    onChangeTitle(value = null) {
        this.title = value ?? this.initialTitle;
        this.querySelector('span').textContent = this.title;
    }
    
    setOnClickBtnEvent(callback) {
        this.querySelector('button').classList.remove('d-none');
        this.querySelector('button').addEventListener('click', callback, { once: true });
    }
}

customElements.define("main-title", MainTitle);