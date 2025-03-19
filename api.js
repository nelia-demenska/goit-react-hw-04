import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: API_KEY, 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};