import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { useGetApi } from './useGetApi';

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
  const api = useGetApi();
  return useMutation({
    mutationFn: (details: ForgotDetails) =>
      request(`${api()}/graphql`, mutation, {
        details: details
      })
  });
};
