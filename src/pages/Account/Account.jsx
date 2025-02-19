import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import Label from "@components/FormVertical/Label";
import NavBar from "@components/NavBar/NavBar.jsx";
import MainTitle from "@components/MainTitle/MainTitle";
import '@components/FormVertical/FormVertical.css';

const Account = () => {
    const initialUserData = useRef(null);
    const [userData, setUserData] = useState({ name: '', email: ''});
    const [isReadOnly, setReadOnly] = useState(true);

    useEffect(() => {
        initialUserData.current = JSON.parse(localStorage.getItem('yardSaleUser')) ?? { name: 'John Doe', email: 'john.doe@email.com'};
        setUserData({...initialUserData.current});
    }, []);
    
    const handleInputsChange = e => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const handleCancelClick = () => {
        setUserData({...initialUserData.current});
        setReadOnly(!isReadOnly);
    }

    const saveChanges = event => {
        event.preventDefault();
        localStorage.setItem('yardSaleUser', JSON.stringify({...userData}));
        initialUserData.current = {...userData};
        setReadOnly(!isReadOnly);
    }

    return (
        <div className="container-flex-center--md">
            <header className="container-flex-center__header">
                <NavBar />
            </header>

            <main className="container-flex-center__body container-sm--md">
                <form className="form-vertical" readOnly={isReadOnly} onSubmit={saveChanges}>
                    <MainTitle className="mb-2">My account</MainTitle>
                    <Label text="Name" errorMessage="Enter a valid name">
                        <textarea type="text" name="name" className="form-vertical__input"
                            placeholder="Enter name" maxLength="80" rows="1" required
                            value={userData.name}
                            readOnly={isReadOnly}
                            onChange={handleInputsChange}></textarea>
                    </Label>
                    <Label text="Email address" errorMessage="Enter a valid email address">
                        <input type="email" name="email" className="form-vertical__input"
                            placeholder="example@example.com" maxLength="80" required
                            value={userData.email}
                            readOnly={isReadOnly}
                            onChange={handleInputsChange} />
                    </Label>
                    {isReadOnly ? <>
                            <div>
                                <Label text="Password"></Label>
                                <Link to="/create-password" className="link">Change password</Link>
                            </div>
                            <button type="button" className="btn btn--outline-primary fixed-bottom fixed-bottom-reset--md my-3"
                                onClick={() => setReadOnly(!isReadOnly)}>
                                Edit
                            </button>
                        </>
                        :
                        <div className="btn-group fixed-bottom fixed-bottom-reset--md">
                            <button type="submit" className="btn btn--primary">
                                Save
                            </button>
                            <button type="button" className="btn btn--outline-primary mb-3"
                                onClick={handleCancelClick}>
                                Cancel
                            </button>
                        </div>
                    }
                </form>
            </main>
        </div>
    );
};

export default Account;