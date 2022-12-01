import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

type Credentials = {
  password: string;
  last_name: string;
  first_name: string;
  email: string;
};

const mutation = gql`
  mutation Signup($credentials: SignUpCredentials!) {
    signup(credentials: $credentials) {
      email
      id
      first_name
      last_name
    }
  }
`;

export const useSignUp = () => {
  return useMutation({
    mutationFn: (values: Credentials) =>
      request('http://localhost:4000/graphql', mutation, {
        credentials: values,
      }),
  });
};
