import { useEffect } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
    useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
        onClose();
        }
    };

    if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
    }, [isOpen, onClose]);

    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay} 
    >
        <img className={css.image} src={image.largeImageURL} alt={image.tags} />
    </Modal>
    );
}