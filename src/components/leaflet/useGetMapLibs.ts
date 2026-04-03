import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { MapPerson } from './types';

export const useGetMapLibs = () => {
  return useQuery<MapPerson[]>({
    queryKey: ['mapLibs'],
    queryFn: () =>
      axios
        .get('https://687a61ddabb83744b7ec9ca5.mockapi.io/mapLibs')
        .then((res) => res.data),
  });
};
