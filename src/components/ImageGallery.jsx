import ImageCard from "./ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({ images }) {
    return (
        <ul className={css.gallery} >
        {images.map((img) => (
        <ImageCard key={img.id} image={img} />
        ))}
    </ul>
    );
};
