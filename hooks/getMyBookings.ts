import { gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
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
    const id = await AsyncStorage.getItem('@userId');
    return request(`${api()}/graphql`, query, {
      userId: id
    });
  });
};
