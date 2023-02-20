import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

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
  return useMutation({
    mutationFn: (values: { email: string; code: string }) =>
      request(`${process.env.API_URL}/graphql`, mutation, {
        ...values
      })
  });
};
