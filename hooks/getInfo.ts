import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { storage } from '../mmkv';

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
      admin
      id
    }
  }
`;

export const useGetInfo = () => {
  const api = useGetApi();
  return useQuery(['user'], async () => {
    const id = storage.getString('@userId');
    if (!id) {
      throw new Error('No user id found');
    }

    return request(`${api()}/graphql`, query, {
      userId: id
    });
  });
};
