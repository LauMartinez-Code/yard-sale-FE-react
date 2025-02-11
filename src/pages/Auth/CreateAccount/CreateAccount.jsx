import { useRef } from 'react';
import { useNavigate } from 'react-router';
import Label from "@components/FormVertical/Label";

const CreateAccount = () => {
    const navigate = useNavigate();
    const userRef = useRef({name: '', email: ''});

    const handleChange = e => {
        userRef.current[e.target.name] = e.target.value;
    };

    const createAccount = e => {
        e.preventDefault();
        
        localStorage.setItem('yardSaleUser',JSON.stringify(
            userRef.current
        ));

        navigate('/account');
    }
    
    return (
        <>
            <h1 className="title-h1">Sign up</h1>
            <h4 className="subtitle">Fill the information to create your account</h4>

            <form className="form-vertical" onSubmit={createAccount}>
                <Label text="Name" errorMessage="Enter a valid name">
                    <textarea type="text" name="name" className="form-vertical__input" 
                        placeholder="Enter name" maxLength="80" rows="1" required
                        onChange={handleChange} />
                </Label>
                <Label text="Email address" errorMessage="Enter a valid email address">
                    <input type="email" name="email" className="form-vertical__input"
                        placeholder="example@example.com" maxLength="80" required 
                        onChange={handleChange} />
                </Label>
                <Label text="Password" 
                    helpText="It must contain 8 or more characters, in which there is at least one number and one upper and lower case letter">
                    <input type="password" className="form-vertical__input" placeholder="Enter password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
                </Label>
                <Label text="Confirm password" errorMessage="Passwords do not match">
                    <input type="password" className="form-vertical__input" placeholder="Confirm password" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxLength="80" required />
                </Label>
                <button type="submit" className="btn btn--primary fixed-bottom-flex fixed-bottom-reset--md mb-3">
                    Create account
                </button>
            </form>
        </>
    )
}

export default CreateAccount;