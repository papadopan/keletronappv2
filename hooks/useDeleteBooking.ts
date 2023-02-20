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
  return useMutation({
    mutationFn: (id: number) =>
      request(`${process.env.API_URL}/graphql`, mutation, {
        deleteBookingId: Number(id)
      })
  });
};
