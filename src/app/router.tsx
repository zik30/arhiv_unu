import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import HomePage from 'pages/HomePage';
import MapPage from 'pages/MapPage';
import GalleryPage from 'pages/GalleryPage';
import { AuthLayout } from 'components/authLayout/AuthLayout';
import LoginPage from 'pages/login/LoginPage';
import RegistrationPage from 'pages/registration/RegistrationPage';
import GalleryDetailPage from 'pages/GalleryDetailPage';
import { ChatPage } from 'pages/chat/ChatPage';

export const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'gallery',
          element: <GalleryPage />,
        },
        {
          path: 'gallery/:id',
          element: <GalleryDetailPage />,
        },
        {
          path: 'map',
          element: <MapPage />,
        },
        {
          path: 'chat',
          element: <ChatPage />,
        },
      ],
    },
    {
      path: '/auth/',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        {
          path: 'registration',
          element: <RegistrationPage />,
        },
      ],
    },
  ]);
