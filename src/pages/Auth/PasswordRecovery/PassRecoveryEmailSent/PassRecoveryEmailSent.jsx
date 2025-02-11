import { useRef } from 'react';
import { Link } from "react-router";
import Modal from "@components/Modal/Modal";

const PassRecoveryEmailSent = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current?.openModal();
    };

    const modalFooter = (
        <div className="btn-group btn-group--md-row">
            <Link className="btn btn--primary btn--block order-1--md" to="/create-password" replace>
                Try &quot;Password reset&quot;
            </Link>
            <Link className="btn btn--outline-primary btn--block" to="/login" replace>
                Go to Login
            </Link>
        </div>
    );

    return (
        <>
            <h1 className="title-h1">Email has been sent!</h1>
            <h4 className="subtitle">Please check your inbox for instructions<br/>on how to reset the password</h4>
        
            <figure className="circle-wrapper mb-5">
                <img className="email-icon" src="/icons/email.svg" width="80" alt="email icon" />
            </figure>
            <button type="button" className="btn btn--primary btn--block mb-4" onClick={openModal}>
                Login
            </button>
            <p>
                <small>
                    Didn&apos;t recieve the email?&nbsp;
                    <button type="button" className="btn btn--link-primary">Resend</button>
                </small>
            </p>

            <Modal title='Would you like to try the "Password reset" feature?'
                footer={modalFooter}
                ref={modalRef}>
                <p>
                    This would be the next step in the flow, after you checked the email sent to your inbox.
                </p>
            </Modal>
        </>
    )
}

export default PassRecoveryEmailSent;