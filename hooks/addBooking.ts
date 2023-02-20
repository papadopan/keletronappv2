import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

export type Details = {
  court: string;
  date_booking: string;
  num_players: number;
  opponents: string[];
  time_slot: string;
  userId: number;
};

const mutation = gql`
  mutation AddBooking($details: Details!) {
    addBooking(details: $details) {
      court
      date_booking
      id
      num_players
      opponents
      time_slot
      userId
    }
  }
`;

export const useAddBooking = () => {
  return useMutation({
    mutationFn: (values: Details) =>
      request(`${process.env.API_URL}/graphql`, mutation, {
        details: values
      })
  });
};
