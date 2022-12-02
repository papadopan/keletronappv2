import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  useToast,
  WarningOutlineIcon,
} from 'native-base';
import { Formik } from 'formik';
import { useSignUp } from '../../../hooks/useSignUp';
import { useEffect } from 'react';
import Emoji from 'react-native-emoji';
import { SignupSchema } from '../../../schema/signup';

export const SignUp = ({ navigation }) => {
  const { mutate, isLoading, error, isSuccess } = useSignUp();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      // navigate user to the validate password screen
      navigation.navigate('ValidatePassword');
    }
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
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <Stack space={5} justifyContent="space-between" flex={1}>
            <Box>
              <FormControl
                isRequired
                mb={6}
                isInvalid={errors.first_name ? true : undefined}
              >
                <FormControl.Label>First Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="John"
                  onChangeText={handleChange('first_name')}
                  value={values.first_name}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.first_name}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                mb={4}
                isInvalid={errors.last_name ? true : undefined}
              >
                <FormControl.Label>Last Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="Doe"
                  value={values.last_name}
                  onChangeText={handleChange('last_name')}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.last_name}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                mb={4}
                isInvalid={errors.email ? true : undefined}
              >
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
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.password ? true : undefined}
              >
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
                  {errors.password}
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
