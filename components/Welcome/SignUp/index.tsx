import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  useToast,
  WarningOutlineIcon,
} from 'native-base';
import { Formik } from 'formik';
import { useSignUp } from '../../../hooks/useSignUp';
import { useEffect } from 'react';
import Emoji from 'react-native-emoji';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^[A-Za-z]\w{7,14}$/;
export const SignUp = () => {
  const { mutate, isLoading, error, isSuccess } = useSignUp();
  const toast = useToast();

  useEffect(() => {
    toast.show({
      render: () => {
        return (
          <Box bg="green.600" p={6} rounded="sm" mb={5}>
            Congrats <Emoji name="rocket" style={{ fontSize: 30 }} />
          </Box>
        );
      },
    });
  }, [isSuccess]);

  return (
    <Flex flex={1} justifyContent="space-between" padding={5}>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
        }}
        onSubmit={v => mutate(v)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <Stack space={5} justifyContent="space-between" flex={1}>
            <Box>
              <FormControl isRequired mb={4}>
                <FormControl.Label>First Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="John"
                  onChangeText={handleChange('first_name')}
                  value={values.first_name}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="Doe"
                  value={values.last_name}
                  onChangeText={handleChange('last_name')}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="text"
                  p={2}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="john@doe.com"
                  keyboardType="email-address"
                />
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  p={2}
                  placeholder="Password"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Button onPress={() => handleSubmit()} isLoading={isLoading}>
              Sign Up
            </Button>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};
