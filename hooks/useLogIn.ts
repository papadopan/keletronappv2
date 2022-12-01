import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const mutation = gql`
  mutation Login($credentials: LoginCredentials!) {
    login(credentials: $credentials) {
      email
      first_name
      bookings {
        id
        num_players
        opponents
        time_slot
        court
        date_booking
      }
      id
      last_name
      token_id
    }
  }
`;

export const useLogIn = () =>
  useQuery(['user'], () =>
    request('http://localhost:4000/graphql', mutation, {
      credentials: {
        email: 'antonios@gmail.com',
        password: '123',
      },
    })
  );
