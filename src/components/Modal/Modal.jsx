/* eslint-disable react/prop-types */
import { useImperativeHandle, useRef } from 'react';
import './Modal.css';

const Modal = ({ title, children, footer, ref }) => {
    const dialogRef = useRef(null);

    useImperativeHandle(ref, () => ({
        openModal: () => dialogRef.current.showModal(),
    }));

    return (
        <dialog ref={dialogRef} className="modal modal--md scale-up-center">
            <form method="dialog">
                <header className="modal__header">
                    <h4 className="modal__title">{title}</h4>
                    <button type="submit" className="btn-close" title="Close" role="button"></button>
                </header>
                
                <div className="modal__body">
                    {children}
                </div>
                
                {footer && <footer className="modal__footer">{footer}</footer>}
            </form>
        </dialog>
    )
}

export default Modal;