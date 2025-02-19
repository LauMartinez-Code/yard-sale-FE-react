import { Link, useNavigate } from "react-router";
import MainTitle from "@components/MainTitle/MainTitle";

const PasswordRecovery = () => {
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();
        navigate('/password-recovery/email-sent');
    }

    return (
        <>
            <MainTitle>Password recovery</MainTitle>
            <h4 className="subtitle">Inform the email address used<br/>to create your account</h4>

            <form className="form-vertical" onSubmit={handleFormSubmit}>
                <label className="form-vertical__label">
                    Email address
                    <input type="email" 
                        className="form-vertical__input"
                        placeholder="example@example.com"
                        maxLength="80" required />
                    <span className="form-vertical__invalid-feedback">
                        Enter a valid email address
                    </span>
                </label>
                <button type="submit" className="btn btn--primary">
                    Submit
                </button>
                <Link className="link mt-2 mx-auto" to="/login">
                    Back to log in
                </Link>
            </form>
        </>
    )
}

export default PasswordRecovery;