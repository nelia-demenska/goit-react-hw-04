import { useState } from "react";
import ImageModal from "./ImageModal";
import css from './ImageCard.module.css'

export default function ImageCard  ({ image })  {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        <li className={css.imageCard} onClick={() => setIsOpen(true)}>
            <img src={image.urls.small} alt={image.alt_description} />
        </li>
        {isOpen && <ImageModal image={image} onClose={() => setIsOpen(false)} />}
    </>
    );
};
