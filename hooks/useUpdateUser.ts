import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

type Credentials = {
  first_name?: string;
  last_name?: string;
  password?: string;
  city?: string;
  country?: string;
  token_id?: string;
};

const mutation = gql`
  mutation EditUser($email: String!, $fields: EditUser!) {
    editUser(email: $email, fields: $fields) {
      email
    }
  }
`;

export const useUpdateUser = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (values: { email: string; fields: Credentials }) =>
      request(`${api()}/graphql`, mutation, {
        email: values.email,
        fields: values.fields
      })
  });
};
