import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const query = gql`
  query GetMyBookings {
    getMyBookings(userId: 21) {
      id
      date_booking
      court
      time_slot
      opponents
      num_players
    }
  }
`;

export const useGetMyBookings = () =>
  useQuery(['myBookings'], () =>
    request('http://localhost:4000/graphql', query)
  );
