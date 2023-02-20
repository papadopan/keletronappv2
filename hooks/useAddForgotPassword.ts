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
  return useMutation({
    mutationFn: (email: string) =>
      request(`${process.env.API_URL}/graphql`, mutation, {
        email: email
      })
  });
};
