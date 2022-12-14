import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

type ForgotDetails = {
  email: string;
  code: string;
  password: string;
};

const mutation = gql`
  mutation UpdateForgottenPassword($details: ForgotDetails!) {
    updateForgottenPassword(details: $details) {
      email
      first_name
      id
    }
  }
`;

export const useUpdateForgottenPassword = () => {
  return useMutation({
    mutationFn: (details: ForgotDetails) =>
      request('http://localhost:4000/graphql', mutation, {
        details: details,
      }),
  });
};
