export const BASE_URL = import.meta.env.VITE_API_URL;
export const user = { email: 'user_email' };
export const tokens = { access: 'access_token', refresh: 'refresh_token' };

export const nav_bar = [
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Features',
    to: '/features',
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Gallery',
    to: '/gallery',
  },
  {
    label: 'Team',
    to: '/team',
  },
];
