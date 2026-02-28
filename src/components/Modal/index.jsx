import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import { useEffect } from "react";
import clsx from "clsx";

function Modal({
    closeTimeoutMS = 0,
    isOpen = false,
    children,
    onRequestClose,
    className,
    overlayClassName,
    bodyOpenClassName,
    shouldCloseOnOverlayClickk = true,
    shouldCloseOnEsc = true,
}) {
    const handleRequestClose = () => {
        setTimeout(onRequestClose, closeTimeoutMS);
    };

    useEffect(() => {
        if (!shouldCloseOnEsc) return;
        const handle = (e) => {
            console.log(e.code);
            if (e.code === "Escape") {
                handleRequestClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handle);
        }

        // Closure
        return () => {
            document.removeEventListener("keydown", handle);
        };
    }, [shouldCloseOnEsc, onRequestClose, isOpen, handleRequestClose]);

    useEffect(() => {
        document.body.classList.add(bodyOpenClassName);
        return () => {
            document.body.classList.remove(bodyOpenClassName);
        };
    }, [bodyOpenClassName]);

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={clsx(styles.content, className)}>
                {/* Close button */}
                <button
                    className={styles.closeBtn}
                    onClick={handleRequestClose}
                >
                    &times;
                </button>

                {/* Children */}
                <div className={styles.body}>{children}</div>
            </div>

            {/* Overlay */}
            <div
                className={clsx(styles.overlay, overlayClassName)}
                onClick={() => {
                    if (shouldCloseOnOverlayClickk) handleRequestClose();
                }}
            />
        </div>
    );
}

Modal.prototype = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    bodyOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClickk: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
};

export default Modal;
