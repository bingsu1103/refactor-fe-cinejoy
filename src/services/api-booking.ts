import axios from "../configs/axios.config";
const bookingApi = {
  createBooking: async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/api/v1/bookings`);
    return response;
  },
  getAllBooking: async (page: number, limit?: number) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${backendUrl}/api/v1/bookings`, {
      params: {
        page,
        limit,
      },
    });
    return response;
  },
};
export default bookingApi;
