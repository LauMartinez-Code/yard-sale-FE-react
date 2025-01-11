import { Link } from 'react-router';
import NavBar from '@components/NavBar/NavBar.jsx';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="container-flex-center">
            <header className="container-flex-center__header">
                <NavBar />
            </header>
        
            <main className="container-flex-center__body">
                <h1 className="mb-3">Oops!</h1>
                <p className="subtitle mb-3">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist.
                </p>
                <img className="page-not-found__logo" src="/logos/404-not-found.png" alt="Error image" />
                <Link to="/" className="btn btn--primary mt-3">Go to Homepage</Link>
            </main>
        </div>
    )
}

export default PageNotFound;