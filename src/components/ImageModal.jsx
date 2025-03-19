import css from './ImageModal.module.css'

export default function ImageModal({ image, onClose }) {
    return (
    <div className={css.modalOverlay} onClick={onClose}>
        <div className={css.modalContent}>
            <img className={css.image} src={image.urls.regular} alt={image.alt_description} />
        </div>
    </div>
    );
};
