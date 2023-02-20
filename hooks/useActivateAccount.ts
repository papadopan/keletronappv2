import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { useGetApi } from './useGetApi';

const mutation = gql`
  mutation ValidateUser($email: String!, $code: String!) {
    validateUser(email: $email, code: $code) {
      email
      id
      first_name
    }
  }
`;

export const useActivateAccount = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (values: { email: string; code: string }) =>
      request(`${api()}/graphql`, mutation, {
        ...values
      })
  });
};
