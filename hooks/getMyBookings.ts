import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { storage } from '../mmkv';
import { useGetApi } from './useGetApi';

const query = gql`
  query Query($userId: String!) {
    getMyBookings(userId: $userId) {
      court
      date_booking
      opponents
      time_slot
      userId
      num_players
      id
    }
  }
`;

export const useGetMyBookings = () => {
  const api = useGetApi();
  return useQuery(['myBookings'], async () => {
    const id = storage.getString('@userId');
    return request(`${api()}/graphql`, query, {
      userId: id
    });
  });
};
