import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  Alert,
  WarningOutlineIcon,
  useColorModeValue
} from 'native-base';
import { Formik } from 'formik';
import { LoginSchema } from '../../../schema/login';
import { useLogIn } from '../../../hooks/useLogIn';
import { useEffect } from 'react';

export const Login = ({ navigation }) => {
  const { mutate, error, isSuccess, isError } = useLogIn();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Auth');
    }
  }, [isSuccess]);

  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={v => mutate(v)}
      validationSchema={LoginSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <Flex justifyContent="space-between" p={5} flex={1} bg={screenbg}>
          <Box>
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
            {isError && (
              <Alert status="error" mt={5}>
                <Flex flexDirection={'row'} alignItems="center">
                  <Alert.Icon mr={2} />
                  {error.response.errors.map((e: { message: string }) => (
                    <Text>{e.message}</Text>
                  ))}
                </Flex>
              </Alert>
            )}
            <Stack space={2} mt={8}>
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
                Resend Activation code
              </Button>
            </Stack>
          </Box>
          <Button onPress={() => handleSubmit()} isLoading={false}>
            Log In
          </Button>
        </Flex>
      )}
    </Formik>
  );
};
