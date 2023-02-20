import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const query = gql`
  query Query($date: String!) {
    getBookingsByDate(date: $date) {
      court
      date_booking
      id
      num_players
      opponents
      userId
      time_slot
    }
  }
`;

export const useGetBookingsByDate = (newDate: string) => {
  const api = useGetApi();
  return useQuery(['bookings', newDate], () =>
    request(`${api()}/graphql`, query, {
      date: newDate
    })
  );
};
