import { useState } from "react";
import { fetchImages } from "../api.js";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn.jsx";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal.jsx";
import { Toaster, toast } from "react-hot-toast";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(true);
    setError(null);

    try {
      const results = await fetchImages(newQuery, 1);
      setImages(results);
      if (results.length === 0) {
        toast.error("No images found. Try another search term.");
      }
    } catch (err) {
      setError("Something went wrong. Try to reload the page");
    }

    setLoading(false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);

    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const newImages = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (err) {
      setError("Could not load more images.");
    }

    setLoading(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {!loading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal isOpen={!!selectedImage} onClose={closeModal} image={selectedImage} />}
    </div>
  );
}
