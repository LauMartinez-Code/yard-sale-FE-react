import { Link, useNavigate } from 'react-router';
import '@components/form-vertical.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <form className="form-vertical" onSubmit={() => navigate('/')} >
            <label className="form-vertical__label">
                Email address
                <input type="email" className="form-vertical__input" placeholder="example@example.com" maxLength="80" required />
                <span className="form-vertical__invalid-feedback">
                    Enter a valid email address
                </span>
            </label>
            <label className="form-vertical__label">
                Password
                <input type="password" className="form-vertical__input" placeholder="Enter password" 
                    maxLength="80" pattern=".{8,}" required />
                <span className="form-vertical__invalid-feedback">
                    Enter a valid password. <br/> Remember must be at least 8 characters long
                </span>
            </label>

            <button type="submit" className="btn btn--primary mt-3">
                Log in
            </button>

            <Link className="link mt-2 mb-5 mx-auto" 
                to="/password-recovery">
                    Forgot my password
            </Link>
            <Link className="btn btn--outline-primary fixed-bottom-flex fixed-bottom-reset--md mb-3"
                to="/create-account">
                    Sign up
            </Link>
        </form>
    )
}

export default Login;