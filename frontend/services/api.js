import axios from 'axios';

// Replace the base URL with your backend URL (e.g., Neon deployment URL)
const api = axios.create({
  baseURL: 'http://localhost:3000', // Or your deployed backend URL
});

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products'); // Use the `api` instance
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Throw the error for the caller to handle
  }
};

export default api;
