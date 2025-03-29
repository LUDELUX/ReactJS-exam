import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

// 🔍 Получаване на всички филми
export const getMovies = async () => {
    const res = await axios.get(API_URL);
    return res.data;
  };
  
  // 🔍 Получаване на конкретен филм
  export const getMovieById = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  };
  
  // ➕ Добавяне на филм
  export const createMovie = async (movie) => {
    const res = await axios.post(API_URL, movie);
    return res.data;
  };
  
  // ✏️ Редактиране на филм
  export const updateMovie = async (id, movie) => {
    const res = await axios.put(`${API_URL}/${id}`, movie);
    return res.data;
  };
  
  // ❌ Изтриване на филм
  export const deleteMovie = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  };