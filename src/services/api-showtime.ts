/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "../configs/axios.config";
import addDays from "../utils/render-day-review";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const showtimeApi = {
  getAll: (page: number, size: number) => {
    return axios.get(
      `${backendUrl}/api/v1/showtimes?page=${page}&size=${size}`
    );
  },

  create: (data: any) => {
    return axios.post(`${backendUrl}/api/v1/showtimes`, data);
  },

  update: (id: number, data: any) => {
    return axios.put(`${backendUrl}/api/v1/showtimes/${id}`, data);
  },

  delete: (id: number) => {
    return axios.delete(`${backendUrl}/api/v1/showtimes/${id}`);
  },

  getById: (id: number) => {
    return axios.get(`${backendUrl}/api/v1/showtimes/${id}`);
  },

  getListShowtimeByFilmAndDate: async (date: string, filmId: number) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const startDate = date;
    const endDate = addDays(date, 2);

    const filter = `date>='${startDate}' and date<='${endDate}' and film.id=${filmId}`;
    const response = await axios.get(`${backendUrl}/api/v1/showtimes`, {
      params: {
        filter,
      },
    });
    return response;
  },
};

export default showtimeApi;
