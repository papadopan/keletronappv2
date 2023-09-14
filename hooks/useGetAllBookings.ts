import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const query = gql`
  query GetAllBookings {
    getAllBookings {
      date_booking
      opponents
      time_slot
    }
  }
`;

export const useGetAllBookings = () => {
  const api = useGetApi();
  return useQuery(['allBookings'], async () => {
    return request(`${api()}/graphql`, query);
  });
};
