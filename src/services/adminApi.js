import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://192.168.0.131:5000/api'  // Use your local IP when in development
  : 'http://localhost:5000/api';      // Use localhost in production

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const adminApi = {
    login: async (password) => {
        try {
          const response = await axiosInstance.post('/admin/login', {}, {
            headers: {
              'x-admin-password': password
            }
          });
          localStorage.setItem('adminPassword', password);
          return response.data;
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      },

  getBookings: async () => {
    try {
      const response = await axiosInstance.get('/admin/bookings', {
        headers: {
          'x-admin-password': localStorage.getItem('adminPassword')
        }
      });
      return response.data;
    } catch (error) {
      console.error('Get bookings error:', error);
      throw error;
    }
  },

  getInquiries: async () => {
    try {
      const response = await axiosInstance.get('/admin/inquiries', {
        headers: {
          'x-admin-password': localStorage.getItem('adminPassword')
        }
      });
      return response.data;
    } catch (error) {
      console.error('Get inquiries error:', error);
      throw error;
    }
  },

  logout: async () => {
    localStorage.removeItem('adminPassword');
  }
}; 