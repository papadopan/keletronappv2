import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

const mutation = gql`
  mutation DeleteBooking($deleteBookingId: Float!) {
    deleteBooking(id: $deleteBookingId) {
      court
      id
      date_booking
      num_players
      opponents
    }
  }
`;

export const useDeleteBooking = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (id: number) =>
      request(`${api()}/graphql`, mutation, {
        deleteBookingId: Number(id)
      })
  });
};
