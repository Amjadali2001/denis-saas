import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export const timeEntriesApi = {
  start: async (data: { projectId: number; description: string }) =>
    api.post('/time-entries/start', data),
  stop: async (id: number) =>
    api.post(`/time-entries/${id}/stop`),
  list: async (params: { startDate: string; endDate: string }) =>
    api.get('/time-entries', { params }),
};

export const projectsApi = {
  list: async () => api.get('/projects'),
  create: async (data: { name: string; description: string }) =>
    api.post('/projects', data),
  update: async (id: number, data: { name: string; description: string }) =>
    api.put(`/projects/${id}`, data),
  delete: async (id: number) =>
    api.delete(`/projects/${id}`),
};

export const authApi = {
  login: async (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  register: async (data: { email: string; password: string; fullName: string }) =>
    api.post('/auth/register', data),
  me: async () => api.get('/auth/me'),
};

export default api;