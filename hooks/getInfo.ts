import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const useGetInfo = () => {
  const api = useGetApi();
  return useQuery(['user'], async () => {
    const id = await AsyncStorage.getItem('@userId');
    return request(`${api()}/graphql`, query, {
      userId: id
    });
  });
};
