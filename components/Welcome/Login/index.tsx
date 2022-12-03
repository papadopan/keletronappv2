import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import { Formik } from 'formik';
import { LoginSchema } from '../../../schema/login';
import { useLogIn } from '../../../hooks/useLogIn';

export const Login = ({ navigation }) => {
  const { mutate, error, isSuccess } = useLogIn();

  return (
    <Flex flex={1} justifyContent="space-between" padding={5}>
      <Stack>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={v => mutate(v)}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Stack space={5} justifyContent="space-between">
              <Box>
                <FormControl
                  isRequired
                  mb={4}
                  isInvalid={
                    errors.email && values.email.length > 0 ? true : undefined
                  }
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
                  isInvalid={
                    errors.password && values.password.length > 0
                      ? true
                      : undefined
                  }
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
              <Button onPress={() => handleSubmit()} isLoading={false}>
                Log In
              </Button>
            </Stack>
          )}
        </Formik>
        <Stack space={2}>
          <Button
            variant="link"
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgot Password?
          </Button>
          <Button
            variant="link"
            onPress={() => navigation.navigate('ActivationEmail')}
          >
            Resend Activation email
          </Button>
        </Stack>
      </Stack>
      <Box>
        <Button>Log In</Button>
      </Box>
    </Flex>
  );
};
