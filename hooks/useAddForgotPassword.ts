import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

const mutation = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      userId
      validation
    }
  }
`;

export const useAddForgotPassword = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (email: string) =>
      request(`${api()}/graphql`, mutation, {
        email: email
      })
  });
};
