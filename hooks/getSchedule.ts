import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const query = gql`
  query GetSchedule {
    getSchedule {
      friday
      monday
      saturday
      sunday
      thursday
      tuesday
      wednesday
    }
  }
`;

export const useGetSchedule = () =>
  useQuery(['schedule'], () => request('http://localhost:4000/graphql', query));
