import { useCallback } from 'react';

export const useGetApi = () => {
  return useCallback(() => {
    return process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://keletron-api.onrender.com';
  }, []);
};
