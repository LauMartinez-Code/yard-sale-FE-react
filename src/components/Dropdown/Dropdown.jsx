import { Link } from 'react-router';
import './Dropdown.css';

/** 
 * Dropdown component that displays a list of options and an optional footer button.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the dropdown.
 * @param {{text:string, link:string }[]} [props.optionsItems=[]] - The list of options to display in the dropdown.
 * @param {Object} [props.footerOption=null] - A separate option to display at the bottom of the dropdown.
 * @param {string} props.footerOption.text - The text of the footer option.
 * @param {Function} props.footerOption.action - The action to perform when the footer option is clicked.
 * @returns {React.JSX.Element} The rendered Dropdown component.
 */
const Dropdown = ({ title, optionsItems = [], footerOption = null }) => {
    return (
        <div className="dropdown d-none d-initial--lg">
            <span className="dropdown__title nav-bar__email">{title}</span>
            <button type="button" className="dropdown__btn btn">
                <img className="dropdown__btn-icon dropdown__btn-icon--sm" src="/icons/arrow.svg" alt=">"/>
            </button>
            <menu className="dropdown__content dropdown__content--slide-bottom">
                {optionsItems.length > 0 ?
                    <>
                        {optionsItems.map(item =>
                            <Link key={item.link} to={item.link}
                                className="dropdown__option link-unstyled">
                                    {item.text}
                            </Link>
                        )}
                        
                        {footerOption &&
                            <>
                                <hr className="my-3"/>
                                
                                <button type="button"
                                    className="dropdown__option btn btn--link-primary"
                                    onClick={footerOption.action}>
                                    {footerOption.text}
                                </button>
                            </>
                        }
                    </>
                    : <p style={{textWrap:"nowrap"}}><small><em>No options available</em></small></p>
                }
            </menu>
        </div>
    )
}

export default Dropdown;