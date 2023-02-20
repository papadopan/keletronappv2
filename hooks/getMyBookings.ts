import { gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

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

export const useGetMyBookings = () =>
  useQuery(['myBookings'], async () => {
    const id = await AsyncStorage.getItem('@userId');
    return request(`${process.env.API_URL}/graphql`, query, {
      userId: id
    });
  });
