import axios from "axios";

const API_KEY = "yqyJLUNL1Fr6NbTPi7LbXW18waP03bn7-ahBXVDtc68";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query,
        page,
        per_page: 12,
      },
    });

    return response.data.results.map((img) => ({
      id: img.id,
      webformatURL: img.urls.small, 
      largeImageURL: img.urls.regular, 
      tags: img.alt_description || "image", 
    }));;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};