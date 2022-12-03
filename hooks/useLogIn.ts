import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

type Credentials = {
  password: string;
  email: string;
};

const mutation = gql`
  mutation Login($credentials: LoginCredentials!) {
    login(credentials: $credentials) {
      email
      first_name
      id
      last_name
      token_id
    }
  }
`;

export const useLogIn = () => {
  return useMutation({
    mutationFn: (values: Credentials) =>
      request('http://localhost:4000/graphql', mutation, {
        credentials: values,
      }),
  });
};
