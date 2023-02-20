import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { useGetApi } from './useGetApi';

const mutation = gql`
  mutation GetActivationCode($email: String!) {
    getActivationCode(email: $email) {
      email
    }
  }
`;

export const useGetActivationCode = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (email: string) =>
      request(`${api()}/graphql`, mutation, {
        email
      })
  });
};
