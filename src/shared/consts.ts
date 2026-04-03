export const BASE_URL = import.meta.env.VITE_API_URL;
export const user = { email: 'user_email' };
export const tokens = { access: 'access_token', refresh: 'refresh_token' };

export const nav_bar = [
  {
    label: 'Галлерея',
    to: '/gallery',
  },
  {
    label: 'Карта',
    to: '/map',
  },
  {
    label: 'Чат',
    to: '/chat',
  },
];

export const latLngZoom = {
  positions: {
    lat: 42.86,
    lng: 74.602,
  },
  zoom: 13,
};
