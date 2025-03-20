import css from './Loader.module.css';
import { DotLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className={css.loader}>
            <DotLoader size={60} color="#36d7b7" />
        </div>
    );
};
