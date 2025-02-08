import { useNavigate } from "react-router";

const CreatePassword = () => {
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();
        navigate('/login');
    }

    return (<>
        <h1 className="title-h1">Create a new password</h1>
        <h4 className="subtitle">Enter a new password for your account</h4>

        <form className="form-vertical" onSubmit={handleFormSubmit}>
            <label className="form-vertical__label">
                Password
                <input type="password" className="form-vertical__input" placeholder="Enter password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
                <small className="form-vertical__text-small">
                    It must contain 8 or more characters, in which there is at least one number and one upper and lower case letter
                </small>
            </label>
            <label className="form-vertical__label">
                Re-enter password
                <input type="password" className="form-vertical__input" placeholder="Re-enter password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
                <span className="form-vertical__invalid-feedback">
                    Enter a valid password
                </span>
            </label>
            <button type="submit" className="btn btn--primary">
                Confirm
            </button>
        </form>
    </>)
}

export default CreatePassword;