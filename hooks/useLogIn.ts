import { useGetApi } from './useGetApi';
import { gql } from '@apollo/client';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('@userId', value);
  } catch (e) {
    // saving error
  }
};

export const useLogIn = () => {
  const api = useGetApi();
  return useMutation({
    mutationFn: (values: Credentials) =>
      request(`${api()}/graphql`, mutation, {
        credentials: values
      }),
    onSuccess: data => {
      const { login } = data;
      storeData(login.id);
    }
  });
};
