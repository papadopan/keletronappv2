import { useGetApi } from './useGetApi';
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
  const api = useGetApi();
  return useMutation({
    mutationFn: (values: Details) =>
      request(`${api()}/graphql`, mutation, {
        details: values
      })
  });
};
