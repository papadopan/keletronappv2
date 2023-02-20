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

export const useGetBookingsByDate = (newDate: string) =>
  useQuery(['bookings', newDate], () =>
    request(`${process.env.API_URL}/graphql`, query, {
      date: newDate
    })
  );
