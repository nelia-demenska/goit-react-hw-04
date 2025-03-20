import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
    return (
    <li className={css.imageCard}>
        <img src={image.webformatURL} alt={image.tags} onClick={() => onClick(image)} />
    </li>
    );
}
