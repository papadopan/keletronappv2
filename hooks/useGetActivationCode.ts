import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

const mutation = gql`
  mutation GetActivationCode($email: String!) {
    getActivationCode(email: $email) {
      email
    }
  }
`;

export const useGetActivationCode = () => {
  return useMutation({
    mutationFn: (email: string) =>
      request('http://localhost:4000/graphql', mutation, {
        email
      })
  });
};