import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const query = gql`
  query GetInfo($userId: String!) {
    getInfo(userId: $userId) {
      bookings {
        id
        date_booking
        num_players
        time_slot
        opponents
      }
      token_id
      last_name
      first_name
      email
      id
    }
  }
`;

export const useGetInfo = (id: string) =>
  useQuery(['user'], () =>
    request('http://localhost:4000/graphql', query, { userId: id })
  );
