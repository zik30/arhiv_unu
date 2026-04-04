export const BASE_URL = import.meta.env.VITE_API_URL;
export const user = { email: 'user_email' };
export const tokens = { access: 'access_token', refresh: 'refresh_token' };

export const nav_bar = [
  {
    label: 'nav.gallery',
    to: '/gallery',
  },
  {
    label: 'nav.map',
    to: '/map',
  },
  {
    label: 'nav.chat',
    to: '/chat',
  },
  {
    label: 'nav.create',
    to: '/create',
  },
];

export const latLngZoom = {
  positions: {
    lat: 42.86,
    lng: 74.602,
  },
  zoom: 13,
};

export const mapRegions = [
  'Бишкек',
  'Ош',
  'Чуй',
  'Нарын',
  'Талас',
  'Иссык-Куль',
  'Джалал-Абад',
  'Баткен',
];

export const langOptiions = [
  { label: 'Руc', value: 'ru' },
  { label: 'Кыр', value: 'ky' },
];
