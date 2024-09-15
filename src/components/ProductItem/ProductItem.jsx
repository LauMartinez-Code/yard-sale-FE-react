import { toCurrencyFormat, setTextEllipsis } from '../CommonUtilities.js';
import './ProductItem.css';

/**
 * @param isRemovable - If `true`, it shows a button to remove the item from the list
 **/
const ProductItem = ({id, title, price, coverSrc, isRemovable = false, onRemoveProduct}) => {
    return (
        <article className="product-item">
            <img className="product-item__image" src={coverSrc} loading="lazy" />
            <p className="product-item__title">{setTextEllipsis(title)}</p>

            <div className="product-item__price">
                <span>{toCurrencyFormat(price)}</span>
                {
                    isRemovable && (
                        <button type="button" 
                            className="btn-close btn-close--grey btn-close--thin" 
                            title="Remove product"
                            onClick={() => onRemoveProduct(id, price)}></button>
                    )
                }
            </div>
        </article>
    )
}

export default ProductItem;