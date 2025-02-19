import { Link } from 'react-router';

/**
 * MainTitle component renders a title with optional navigation back link.
 * @component
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed within the title.
 * @param {string} [props.className] - Additional CSS classes for the title.
 * @param {string} [props.linkBackTo] - URL to navigate back to.
 *
 * @returns {React.JSX.Element} The MainTitle component.
 * @example
 *   <MainTitle linkBackTo="/home">
 *     My title content
 *   </MainTitle>
 */
const MainTitle = ({ children, className = '' , linkBackTo }) => {
    return (
        <h1 className={`title-h1 ${ className }`}>
            {linkBackTo &&
                <Link to={linkBackTo} className="btn p-0 me-2" title="Back" >
                    <img src="/icons/arrow.svg" alt=">" className="title-h1__back-btn" />
                </Link>
            }
            <span>{children}</span>
        </h1>
    )
}

export default MainTitle;