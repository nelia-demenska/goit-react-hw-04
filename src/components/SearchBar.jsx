import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);

useEffect(() => {
    if (error) {
    const timer = setTimeout(() => {
        setError(null); 
    }, 3000);

        return () => clearTimeout(timer); 
        }
    }, [error]);

    const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(null);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") {
        setError("Please enter your query");
        return;
    }

    onSearch(inputValue);
    setInputValue(""); 
    };

    return (
    <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.searchbar}>
                <button type="submit" className={css.button}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search images and photos"
            className={`css.input ${error ? "input-error" : ""}`}
        />
        </form>
        {error && <p className={css.errorMessage}>{error}</p>}
    </header>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};