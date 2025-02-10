import { useNavigate } from "react-router";
import Label from "@components/FormVertical/Label";

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
            <Label label="Password"
                helpText="It must contain 8 or more characters, in which there is at least one number and one upper and lower case letter">
                <input type="password" className="form-vertical__input" placeholder="Enter password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
            </Label>

            <Label label="Re-enter password" errorMessage="Enter a valid password">
                <input type="password" className="form-vertical__input" placeholder="Re-enter password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
            </Label>

            <button type="submit" className="btn btn--primary">
                Confirm
            </button>
        </form>
    </>)
}

export default CreatePassword;