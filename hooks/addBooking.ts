import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      request('http://localhost:4000/graphql', mutation, {
        details: values,
      }),
  });
};
